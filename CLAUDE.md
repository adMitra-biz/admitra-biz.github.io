# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Updated: September 1st, 2025

# CRITICAL REASONING GUIDELINES

**MANDATORY: Use Chain of Thought (CoT) and Tree of Thought (ToT) for all complex tasks**

1. **Chain of Thought**: Break down complex problems into sequential reasoning steps. Show your work explicitly:

   - "First, I need to understand X..."
   - "Next, I should consider Y because..."
   - "Therefore, the solution is Z..."

2. **Tree of Thought**: For multi-path problems, explore different branches:

   - Present multiple solution approaches
   - Evaluate pros/cons of each path
   - Choose optimal path with clear reasoning
   - Backtrack and try alternatives if needed

3. **Always Think Before Acting**: Before any code change, explicitly state your reasoning process and decision tree.

# Global Context

## Role & Communication Style

Senior software engineer collaborating with peer. Prioritize planning before implementation. Technical discussions, not assistant-serving requests.

## Development Process

1. **Plan First**: Discuss approach using CoT/ToT
2. **Identify Decisions**: Surface implementation choices with reasoning
3. **Consult Options**: Present alternatives with trade-offs
4. **Confirm Alignment**: Ensure agreement before coding
5. **Then Implement**: Follow agreed plan

## Core Behaviors

- Break features into clear tasks with explicit reasoning
- Ask about preferences: data structures, patterns, libraries, error handling
- Surface assumptions and get confirmation
- Provide constructive criticism when spotting issues
- Push back on flawed logic using clear reasoning chains
- Present trade-offs objectively without defaulting to agreement

## Project Overview

This is the AdMitra business website - a static marketing site for a hyperlocal co-branded advertising platform. The site is built as a pure HTML/CSS/JavaScript website deployed via Cloudflare Pages.

**Architecture:**

- Static website with two main pages: enterprise (`index.html`) and SMB (`admitra-smb.html`)
- Cloudflare Pages deployment configured via `wrangler.jsonc`
- Responsive design using Tailwind CSS from CDN
- Custom CSS variables system for consistent theming
- Static assets organized in `/static/` directory

## Key Technologies

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Styling**: Tailwind CSS (CDN) + custom CSS with extensive CSS variables
- **Fonts**: Google Fonts (Inter, Sora, Space Grotesk, Space Mono, Material Symbols)
- **Deployment**: Cloudflare Pages
- **Configuration**: `wrangler.jsonc` for Cloudflare deployment settings

## Development Commands

```bash
# Deploy to Cloudflare Pages
wrangler pages deploy

# Local development (serve files)
python -m http.server 8000
# or
npx serve .
```

## CSS Architecture and Color System

**Critical**: This project uses a strict CSS variables system. See `.cursorrules` for comprehensive color guidelines.

### CSS Variables Structure

- Primary colors: `--primary-50` to `--primary-900` (modern blue)
- Secondary colors: `--secondary-50` to `--secondary-900` (teal)
- Accent colors: `--accent-50` to `--accent-900` (indigo)
- Neutral: `--gray-50` to `--gray-900` (slate)
- Semantic: `--success-*`, `--warning-*`, `--error-*`

### Key Rules from .cursorrules:

1. **NEVER** use hardcoded hex colors (`#3b82f6`)
2. **ALWAYS** use CSS variables (`var(--primary-500)`)
3. Use semantic color meanings (primary for brand, success only for actual success states)
4. Follow BEM methodology for CSS classes
5. Use mobile-first responsive design
6. Maintain accessibility standards

### Typography System

- `--font-sans`: Inter (primary)
- `--font-display`: Sora (headings)
- `--font-alt`: Space Grotesk (alternative)
- `--font-mono`: Space Mono (monospace)

## File Structure

```
/
├── index.html              # Main enterprise page
├── admitra-smb.html        # SMB-focused page
├── styles.css              # Custom CSS with variables system
├── wrangler.jsonc          # Cloudflare Pages config
├── .cursorrules            # Development guidelines
└── static/                 # Static assets
    ├── images/             # Image assets
    ├── videos/             # Video content
    ├── gifs/               # GIF animations
    ├── posters/            # Poster images
    └── brand_videos/       # Brand video content
```

## Content Strategy

The website targets two distinct audiences:

1. **Enterprise** (`index.html`): Large brands and agencies
2. **SMBs** (`admitra-smb.html`): Small and medium businesses in India

Each page has tailored messaging, design, and features for its target audience.

## Design System Guidelines

### Component Patterns

- Hero sections with gradient backgrounds
- Card-based layouts with subtle shadows
- Responsive navigation with mobile menu
- Badge/pill components for status indicators
- Video carousels and media sections

### Interactive Elements

- Glass morphism effects (`backdrop-filter: blur()`)
- Smooth transitions and hover states
- Material Design icons via Google Fonts
- Mobile-first responsive breakpoints

## Deployment

The site deploys to Cloudflare Pages using the `wrangler.jsonc` configuration:

- Asset directory: `./` (root)
- SPA handling for proper routing
- Automatic builds from git commits

## Development Best Practices

1. **Always read `.cursorrules`** before making style changes
2. Test responsive design across mobile, tablet, desktop
3. Validate HTML and CSS using W3C validators
4. Use semantic HTML elements for accessibility
5. Maintain consistent spacing and typography scales
6. Optimize images and media assets for web delivery

## Common Tasks

- **Adding new sections**: Follow existing HTML structure patterns and use CSS variables
- **Color updates**: Modify variables in `:root` section of `styles.css`
- **Responsive fixes**: Use mobile-first media queries
- **Asset management**: Place new assets in appropriate `/static/` subdirectories
- **Content updates**: Maintain consistent messaging tone between enterprise and SMB pages
- Additionally, ensure that you use the best practices while working with JS, CSS and HTML for creating websites for professional SaaS products.