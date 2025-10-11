# Repository Guidelines

## Project Structure & Module Organization

The site ships as a static Cloudflare Pages project. Root-level `index.html`, `contact.html`, and `admitra-smb.html` contain all markup; keep hero flows and CTA logic there so anchors remain predictable. Tailwind source lives in `src/input.css`; compiled output is committed at `dist/tailwind.css` alongside `styles.css` for handcrafted utilities. Assets sit under `static/` (`images`, `videos`, `posters`, `brand_videos`, etc.); store new files in lowercase snake_case to avoid broken URLs.

## Build, Test, and Development Commands

- `python3 -m http.server`

## Coding Style & Naming Conventions

Follow the existing four-space indentation and semantic HTML landmarks (`header`, `section`, `nav`) to protect accessibility. Prefer Tailwind utilities; when repeating combinations, promote them to `styles.css` as kebab-case class names (e.g., `gradient-text`, `btn-primary`). Keep asset filenames lowercase with underscores, and use descriptive data attributes such as `data-role="dealer-card"` for interactive hooks. The repo does not enforce formatting; align with current layout or run Prettier locally before large structural edits.

## Testing Guidelines

There is no automated test suite, so rely on manual smoke tests. After styling changes, run `npm run build` followed by `npm run serve` and verify hero animations, video loaders, and contact CTA on desktop and mobile breakpoints. Use Lighthouse or Axe browser extensions to catch accessibility regressions. If you introduce JavaScript in `static/`, add console warnings for failure states and document the expected user flow in your PR.

## Commit & Pull Request Guidelines

Recent history uses imperative, sentence-style subjects (“Update index.html to enhance the contact section…”). Continue writing present-tense summaries that mention the primary file or UX impact. Pull requests should include: a concise goal, screenshots or recordings for visual tweaks, links to related issues, and the manual checks you ran. Keep PRs scoped—split large asset drops from structural refactors—and ensure `npm run build` succeeds before requesting review.
