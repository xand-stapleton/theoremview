// Apply the saved scheme before CSS paints; System follows the OS via CSS.
(() => {
  const storageKey = 'theoremview.colourScheme';
  const schemes = new Set([
    'system', 'light', 'dark', 'gruvbox-material-dark',
    'gruvbox-material-light', 'dracula', 'nord',
  ]);
  let current = 'system';
  function apply(value) {
    current = schemes.has(value) ? value : 'system';
    if (current === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', current);
  }
  try { apply(localStorage.getItem(storageKey)); } catch (e) { apply('system'); }

  document.addEventListener('DOMContentLoaded', () => {
    const picker = document.getElementById('theme');
    picker.value = current;
    picker.addEventListener('change', () => {
      apply(picker.value);
      // Private browsing or local-file storage restrictions must not block switching.
      try { localStorage.setItem(storageKey, current); } catch (e) {}
    });
    window.addEventListener('storage', (e) => {
      if (e.key !== storageKey && e.key !== null) return;
      apply(e.newValue);
      picker.value = current;
    });
  });
})();
