# DevDocs

A modern, production-ready developer documentation template built with Vite, React, TypeScript, and Tailwind CSS. It features a responsive layout, dark mode, full-text search, syntax-highlighted code blocks, and a collection of reusable documentation components.

## Feature

- Responsive layout – Sticky header, collapsible sidebar, main content area, and a right-side table of contents that adapts to desktop, tablet, and mobile.

- Dark mode – System preference detection with manual toggle and localStorage persistence.

- Search modal – Command palette (⌘K / Ctrl+K) with keyboard navigation and fuzzy filtering across documentation pages.

- Code blocks – Syntax highlighting (via Prism), copy button, language label, and optional line numbers.

- Documentation components – Callouts (info, tip, warning, danger, success), Tabs, Accordions, Steps, and Cards.

- Table of contents – Automatically generated from page headings with scroll-spy highlighting.

- Routing – React Router with lazy-loaded pages and nested doc routes.

- Accessibility – Semantic HTML, ARIA labels, skip-to-content link, keyboard navigation, and focus states.

- Performance – Code splitting, lazy loading, and minimal dependencies.

## Tech Stack

- [Vite](https://vite.dev/) – Build tool and dev server
- [React](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- [React Router](https://reactrouter.com/) – Client-side routing
- [Lucide React](https://lucide.dev/guide/react/) – Icon set
- [Prism.js](https://prismjs.com/) – Syntax highlighting

# Getting Started

## Prerequisites

- Node.js 16 or later
- npm, yarn, or pnpm

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/devdocs.git
cd devdocs
npm install
```

## Development

Start the development sever:
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

## Build
To crate a production build:

```bash
npm run build
```

The output will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

# Project Structure

```text
devdocs/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── docs/
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── Callout.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Steps.tsx
│   │   │   └── DocsCard.tsx
│   │   └── ui/
│   │       └── SearchModal.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── docs/
│   │   │   ├── DocsLayout.tsx
│   │   │   ├── Overview.tsx
│   │   │   ├── Installation.tsx
│   │   │   ├── QuickStart.tsx
│   │   │   ├── Authentication.tsx
│   │   │   ├── Configuration.tsx
│   │   │   ├── ApiIntroduction.tsx
│   │   │   ├── ApiEndpoints.tsx
│   │   │   ├── Deployment.tsx
│   │   │   └── Changelog.tsx
│   │   ├── Guides.tsx
│   │   ├── ApiReference.tsx
│   │   └── ChangelogPage.tsx
│   ├── data/
│   │   └── documentation.ts
│   ├── hooks/
│   │   ├── useDarkMode.ts
│   │   └── useTableOfContents.ts
│   ├── types/
│   │   └── docs.ts
│   ├── utils/
│   │   └── highlight.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

# Customization

## Colors and Styling
- The primary color palette is defined in `tailwind.config.js` under `colors.primary`.
- Global style and the custom prose classes are in `src/index.css`.
- Dark mode is configured using the `class` strategy (`darkMode: 'class'` in Tailwind config).

## Navigation and Content
- Documentation navigation structure is defind in `src/data/documentation.ts`.
- Search index is also in `src/data/documentation.ts` (add your page there).
- Each documentation page is a React component in `src/pages/docs/` - edit the JSX directly to updte content.
- To add a new page:
    1. Create a new component in `src/pages/docs/`.
    2. Add a route in `src/App.tsx`.
    3. Add it to the navigation and search index in `src/data/documentation.ts`.

## Components
Reusable documentation components are located in `src/components/docs/`:

- `CodeBlock` – Syntax-highlighted code with copy button.
- `Callout` – Info, tip, warning, danger, success boxes.
- `Tabs` – Tabbed content.
- `Accordion` – Expandable FAQ/accordion.
- `Steps` – Numbered step list.
- `DocsCard` – Card with icon, title, and description.

## License

This project is licensed under the MIT License – see the [LICENSE](https://opensource.org/license/MIT) file for details.