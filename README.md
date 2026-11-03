# theoremview
Fork of Terrence Tao's excellent paper diagram viewer

Use **colour scheme** in the toolbar to choose System, Light, Dark, Gruvbox
Material (Dark or Light), Dracula, or Nord. The choice is saved in your browser;
System follows your operating system's appearance. Schemes apply to the interface,
diagram, and SVG exports. Switching schemes preserves edits, selection, and zoom.
JSON exports keep the diagram's original authored colours.

## GitHub Pages

In the repository's **Settings → Pages → Build and deployment**, set **Source**
to **GitHub Actions**. The **Deploy to GitHub Pages** workflow publishes the viewer
on every push to `main`. For the first deployment, you can also run it manually
from the repository's **Actions** tab.

The site will be available at <https://xand-stapleton.github.io/theoremview/> after
a successful deployment. The default diagram is Kakeya; a direct link is
<https://xand-stapleton.github.io/theoremview/?paper=kakeya>.

No build tools or dependencies are needed. Only the viewer's static assets are
published. The example paper diagrams load from the original tao-web site and
require an internet connection.
