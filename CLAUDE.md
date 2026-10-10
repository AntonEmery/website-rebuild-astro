# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro ... # Run Astro CLI commands (e.g. astro check)
```

There are no tests in this project.

## Architecture

This is an **Astro v7** static site for a Celtic fingerstyle guitar musician (Anton Emery). It uses `@astrojs/mdx` for blog posts and SCSS for all styling.

### Layout hierarchy

- `Layout.astro` — root shell: imports global SCSS, all three web fonts (Lusitana for headings, Mallanna for subheadings, Hind Vadodara for body), and wraps every page with `<Nav>` and `<Footer>`.
- `BlogPostLayout.astro` — wraps blog content inside `Layout.astro` via `MainBlogSection`.
- `MainContentSection.astro` / `MainBlogSection.astro` — section wrappers used by pages and blog posts respectively.

### Content collections (blog posts)

Blog posts live in `src/content/blog/` as `.mdx` files. The collection is defined in `src/content.config.ts` and uses Astro's glob loader. Required frontmatter fields:

```
title, description, keywords, postTitle, slug, featuredImage: { url, alt }
```

The dynamic route `src/pages/[...slug].astro` generates one page per post using `getStaticPaths`. The `post.id` (filename without extension) becomes the URL slug.

Blog posts can import and use components directly (e.g. `AudioPlayerAndLinks`, `YouTubeEmbed`, `ImageAndCaption`). Some posts also include a `tab` frontmatter object with `audio`, `video`, and `notation` fields passed as props to `AudioPlayerAndLinks`.

### Static data

- `src/data/tabs.tsx` — array of `Tab` objects (title, description, tuning, optional audio/video/notation paths) rendered on the `/tabs` page.
- `src/data/albumData.tsx` — album data rendered on the `/albums` page.

### Static assets

- `src/assets/` — images imported directly in `.astro` files (Astro optimizes these at build time). Paths in MDX frontmatter like `featuredImage.url` use `/src/assets/...` paths.
- `public/audio/` — `.mp3` files served as-is.
- `public/tabs/` — `.pdf` tab notation files served as-is.

### Styling

All styles are SCSS partials in `src/styles/`, imported centrally via `src/styles/styles.scss`. CSS custom properties for colors, typography scale (fluid `clamp()`-based), and layout dimensions are defined in `_variables.scss`. Responsive breakpoints are in `_breakpoints.scss`.
