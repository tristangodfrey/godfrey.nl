# godfrey.nl

Static site for my personal blog posts, built with [Hugo](https://gohugo.io/) and the [Ananke theme](https://github.com/theNewDynamic/gohugo-theme-ananke).

## Getting Started

To run the site locally:

1. Install Hugo (e.g., `brew install hugo` on macOS).
2. Clone the repository and initialize submodules:
   ```bash
   git clone --recurse-submodules https://github.com/your-username/godfrey.nl.git
   cd godfrey.nl
   ```
3. Start the development server:
   ```bash
   hugo server -D
   ```

## Customization

### Modifying Colors
The site's colors are managed via CSS variables in **`assets/css/custom.css`**.

To update the colors, modify the following variables in the `:root` block:

- **`--accent`**: Changes the hover color for the site title and post titles.
- **`--header-color`**: Changes the default color of the site title and post titles.

Example:
```css
:root {
  --accent: #ff4500;     /* Orange-red hover color */
  --header-color: #222;  /* Darker gray for titles */
}
```

### Testing Changes
To see your changes instantly, run the development server:
```bash
hugo server
```
The site will automatically refresh in your browser whenever you save `assets/css/custom.css`.

## Features

- **Responsive Header**: Dynamic height header with a bouncing scroll indicator.
- **Smooth Scrolling**: Custom JavaScript for smooth navigation to content.
- **Maintenance Mode**: Configurable maintenance mode toggle in `hugo.toml`.
- **Clean List View**: A minimalist list of post titles and dates.
- **Obsidian Integration**:
    - Supports Obsidian-style Markdown features: Task lists, Tables, Footnotes, and Strikethrough.
    - Wikilink support (using standard Markdown syntax).
    - Source posts in `content/Blog/Posts` are automatically mounted for processing.

## Deployment

The site is configured for automatic deployment to **GitHub Pages** via GitHub Actions.

- **Pipeline**: Whenever you push to the `main` branch, the `.github/workflows/hugo.yaml` workflow will build the site using Hugo and deploy it.
- **Base URL**: The site is configured to be hosted at `https://godfrey.nl/`.
- **Note**: Ensure that your GitHub repository settings have "GitHub Actions" selected as the source for Pages (Settings > Pages > Build and deployment > Source).