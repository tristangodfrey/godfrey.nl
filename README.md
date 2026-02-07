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

## Creating Content

To create a new blog post:
```bash
hugo new content posts/my-new-post.md
```

## Features
- Renders posts sequentially showing the first paragraph for each post + a link to the full post.
- Clean and responsive design using the Ananke theme.
- **Obsidian Integration**:
    - Supports Obsidian-style Markdown features:
        - [x] Task lists
        - [x] Tables
        - [x] Footnotes
        - [x] Strikethrough
    - For Wikilinks, use the standard Markdown syntax `[Text](Destination)` which Hugo handles natively, or see `layouts/_default/_markup/render-link.html` for custom link handling.

## Obsidian Integration

It is handled as follows:

The source for posts is in content/Blog/Posts.
When building, filenames + MD properties are fetched from each file and put in a JSON object.
This list of objects becomes the metadata for each post.
Filename becomes the "title" property.
The first paragraph becomes the "short" property.
    
## Deployment

The site is configured for automatic deployment to **GitHub Pages** via GitHub Actions.

- **Pipeline**: Whenever you push to the `main` branch, the `.github/workflows/hugo.yaml` workflow will build the site using Hugo and deploy it.
- **Base URL**: The site is configured to be hosted at `https://godfrey.nl/`.
- **Note**: Ensure that your GitHub repository settings have "GitHub Actions" selected as the source for Pages (Settings > Pages > Build and deployment > Source).