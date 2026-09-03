#!/bin/bash

# Create project structure
mkdir -p src/components/layout src/components/docs src/components/ui src/pages/docs src/data src/hooks src/types src/utils .github/workflows

# package.json
cat > package.json << 'EOF'
{
  "name": "devdocs",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.263.1",
    "prismjs": "^1.29.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2"
  },
  "devDependencies": {
    "@types/prismjs": "^1.26.0",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.1.6",
    "vite": "^4.4.7"
  }
}
EOF

# vite.config.ts
cat > vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
EOF

# tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF

# tsconfig.node.json
cat > tsconfig.node.json << 'EOF'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
EOF

# tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
EOF

# postcss.config.js
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# index.html
cat > index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DevDocs</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

# src/main.tsx
cat > src/main.tsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF

# src/App.tsx
cat > src/App.tsx << 'EOF'
import { lazy, Suspense, useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import MobileMenu from './components/layout/MobileMenu'
import SearchModal from './components/ui/SearchModal'
import { useDarkMode } from './hooks/useDarkMode'

const Home = lazy(() => import('./pages/Home'))
const DocsLayout = lazy(() => import('./pages/docs/DocsLayout'))
const Overview = lazy(() => import('./pages/docs/Overview'))
const Installation = lazy(() => import('./pages/docs/Installation'))
const QuickStart = lazy(() => import('./pages/docs/QuickStart'))
const Authentication = lazy(() => import('./pages/docs/Authentication'))
const Configuration = lazy(() => import('./pages/docs/Configuration'))
const ApiIntroduction = lazy(() => import('./pages/docs/ApiIntroduction'))
const ApiEndpoints = lazy(() => import('./pages/docs/ApiEndpoints'))
const Deployment = lazy(() => import('./pages/docs/Deployment'))
const Changelog = lazy(() => import('./pages/docs/Changelog'))
const Guides = lazy(() => import('./pages/Guides'))
const ApiReference = lazy(() => import('./pages/ApiReference'))
const ChangelogPage = lazy(() => import('./pages/ChangelogPage'))

function App() {
  useDarkMode()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const openSearch = useCallback(() => setIsSearchOpen(true), [])
  const closeSearch = useCallback(() => setIsSearchOpen(false), [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <BrowserRouter>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-primary-600">
        Skip to content
      </a>
      <div className="flex flex-col min-h-screen">
        <Header onOpenSearch={openSearch} />
        <MobileMenu />
        {isSearchOpen && <SearchModal onClose={closeSearch} />}
        <main id="main-content" className="flex-1">
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home onOpenSearch={openSearch} />} />
              <Route path="/docs" element={<DocsLayout />}>
                <Route index element={<Overview />} />
                <Route path="overview" element={<Overview />} />
                <Route path="installation" element={<Installation />} />
                <Route path="quick-start" element={<QuickStart />} />
                <Route path="authentication" element={<Authentication />} />
                <Route path="configuration" element={<Configuration />} />
                <Route path="api-introduction" element={<ApiIntroduction />} />
                <Route path="api-endpoints" element={<ApiEndpoints />} />
                <Route path="deployment" element={<Deployment />} />
                <Route path="changelog" element={<Changelog />} />
              </Route>
              <Route path="/guides" element={<Guides />} />
              <Route path="/api" element={<ApiReference />} />
              <Route path="/changelog" element={<ChangelogPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
EOF

# src/index.css
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply antialiased text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-900;
  }
}

@layer components {
  .prose-custom {
    @apply max-w-none;
  }
  .prose-custom h1 {
    @apply text-4xl font-bold tracking-tight mb-6 mt-2;
  }
  .prose-custom h2 {
    @apply text-2xl font-semibold tracking-tight mt-12 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800;
  }
  .prose-custom h3 {
    @apply text-xl font-semibold mt-8 mb-4;
  }
  .prose-custom h4 {
    @apply text-lg font-semibold mt-6 mb-2;
  }
  .prose-custom p {
    @apply leading-7 mb-4;
  }
  .prose-custom a {
    @apply text-primary-600 dark:text-primary-400 hover:underline;
  }
  .prose-custom ul {
    @apply list-disc pl-6 mb-4;
  }
  .prose-custom ol {
    @apply list-decimal pl-6 mb-4;
  }
  .prose-custom li {
    @apply mb-1;
  }
  .prose-custom table {
    @apply w-full text-left border-collapse my-6;
  }
  .prose-custom th {
    @apply border-b-2 border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold;
  }
  .prose-custom td {
    @apply border-b border-gray-200 dark:border-gray-700 px-4 py-2;
  }
}
EOF

# src/hooks/useDarkMode.ts
cat > src/hooks/useDarkMode.ts << 'EOF'
import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches)
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleDarkMode = () => setIsDark((prev) => !prev)

  return { isDark, toggleDarkMode }
}
EOF

# src/hooks/useTableOfContents.ts
cat > src/hooks/useTableOfContents.ts << 'EOF'
import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export function useTableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'))
    const headingData = elements.map((el) => ({
      id: el.id,
      text: el.textContent || '',
      level: parseInt(el.tagName[1], 10),
    }))
    setHeadings(headingData)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return { headings, activeId }
}
EOF

# src/types/docs.ts
cat > src/types/docs.ts << 'EOF'
export interface NavItem {
  title: string
  slug: string
  children?: NavItem[]
}

export interface SearchItem {
  title: string
  description: string
  path: string
  category: string
}
EOF

# src/data/documentation.ts
cat > src/data/documentation.ts << 'EOF'
import { NavItem, SearchItem } from '../types/docs'

export const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    slug: 'getting-started',
    children: [
      { title: 'Overview', slug: '/docs/overview' },
      { title: 'Installation', slug: '/docs/installation' },
      { title: 'Quick Start', slug: '/docs/quick-start' },
    ],
  },
  {
    title: 'Guides',
    slug: 'guides',
    children: [
      { title: 'Authentication', slug: '/docs/authentication' },
      { title: 'Configuration', slug: '/docs/configuration' },
      { title: 'Deployment', slug: '/docs/deployment' },
    ],
  },
  {
    title: 'API Reference',
    slug: 'api-reference',
    children: [
      { title: 'Introduction', slug: '/docs/api-introduction' },
      { title: 'Endpoints', slug: '/docs/api-endpoints' },
    ],
  },
  {
    title: 'Resources',
    slug: 'resources',
    children: [
      { title: 'Changelog', slug: '/docs/changelog' },
    ],
  },
]

export const searchIndex: SearchItem[] = [
  { title: 'Overview', description: 'Learn about DevDocs and its features', path: '/docs/overview', category: 'Getting Started' },
  { title: 'Installation', description: 'Install DevDocs in your project', path: '/docs/installation', category: 'Getting Started' },
  { title: 'Quick Start', description: 'Get up and running quickly', path: '/docs/quick-start', category: 'Getting Started' },
  { title: 'Authentication', description: 'Secure your application with authentication', path: '/docs/authentication', category: 'Guides' },
  { title: 'Configuration', description: 'Configure DevDocs to your needs', path: '/docs/configuration', category: 'Guides' },
  { title: 'API Introduction', description: 'Introduction to the DevDocs API', path: '/docs/api-introduction', category: 'API Reference' },
  { title: 'API Endpoints', description: 'Reference for all API endpoints', path: '/docs/api-endpoints', category: 'API Reference' },
  { title: 'Deployment', description: 'Deploy your application to production', path: '/docs/deployment', category: 'Guides' },
  { title: 'Changelog', description: 'See what\'s new in DevDocs', path: '/docs/changelog', category: 'Resources' },
]
EOF

# src/components/layout/Header.tsx
cat > src/components/layout/Header.tsx << 'EOF'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, Github, Moon, Sun, X } from 'lucide-react'
import { useDarkMode } from '../../hooks/useDarkMode'

interface HeaderProps {
  onOpenSearch: () => void
}

export default function Header({ onOpenSearch }: HeaderProps) {
  const { isDark, toggleDarkMode } = useDarkMode()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Docs', href: '/docs' },
    { label: 'Guides', href: '/guides' },
    { label: 'API Reference', href: '/api' },
    { label: 'Examples', href: '/examples' },
    { label: 'Changelog', href: '/changelog' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-white">
              <span className="text-2xl">⚡</span>
              <span>DevDocs</span>
            </Link>
            <span className="ml-2 hidden sm:inline text-sm text-gray-500 dark:text-gray-400">Documentation</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Search size={16} />
              <span>Search</span>
              <kbd className="ml-2 text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">⌘K</kbd>
            </button>
            <button
              onClick={onOpenSearch}
              className="sm:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
EOF

# src/components/layout/MobileMenu.tsx
cat > src/components/layout/MobileMenu.tsx << 'EOF'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import Sidebar from './Sidebar'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-80 max-w-[80%] bg-white dark:bg-gray-900 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <Link to="/" className="flex items-center gap-2 font-bold text-lg">
                <span className="text-2xl">⚡</span>
                <span>DevDocs</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
    </>
  )
}
EOF

# src/components/layout/Sidebar.tsx
cat > src/components/layout/Sidebar.tsx << 'EOF'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { navigation } from '../../data/documentation'

export default function Sidebar() {
  const [openSections, setOpenSections] = useState<string[]>(
    navigation.map((section) => section.slug),
  )

  const toggleSection = (slug: string) => {
    setOpenSections((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }

  return (
    <nav className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6 bg-white dark:bg-gray-900">
      <div className="space-y-6">
        {navigation.map((section) => (
          <div key={section.slug}>
            <button
              onClick={() => toggleSection(section.slug)}
              className="flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {section.title}
              <ChevronDown
                size={16}
                className={`transform transition-transform ${openSections.includes(section.slug) ? 'rotate-180' : ''}`}
              />
            </button>
            {openSections.includes(section.slug) && (
              <div className="mt-2 space-y-1">
                {section.children?.map((child) => (
                  <NavLink
                    key={child.slug}
                    to={child.slug}
                    className={({ isActive }) =>
                      `block px-3 py-1.5 text-sm rounded-md ${
                        isActive
                          ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`
                    }
                  >
                    {child.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
EOF

# src/components/layout/TableOfContents.tsx
cat > src/components/layout/TableOfContents.tsx << 'EOF'
import { useTableOfContents } from '../../hooks/useTableOfContents'

export default function TableOfContents() {
  const { headings, activeId } = useTableOfContents()

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-16 hidden xl:block w-64 h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
        On this page
      </h2>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm py-1 border-l-2 pl-3 ${
                activeId === heading.id
                  ? 'border-primary-500 text-primary-700 dark:text-primary-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              } ${heading.level === 3 ? 'ml-4' : ''}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
EOF

# src/components/ui/SearchModal.tsx
cat > src/components/ui/SearchModal.tsx << 'EOF'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchIndex } from '../../data/documentation'

interface SearchModalProps {
  onClose: () => void
}

export default function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(searchIndex)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (query.trim() === '') {
      setResults(searchIndex)
      return
    }
    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].path)
      }
    }
  }

  const handleSelect = (path: string) => {
    navigate(path)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl"
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-4">
          <Search size={20} className="text-gray-400" />
          <input
            ref={inputRef}
            autoFocus
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 py-4 px-3 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
          />
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600" aria-label="Close search">
            <X size={20} />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto p-2">
          {results.map((item, index) => (
            <button
              key={item.path}
              onClick={() => handleSelect(item.path)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                index === selectedIndex
                  ? 'bg-primary-50 dark:bg-primary-900/50'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</div>
                <span className="text-xs text-gray-500">{item.category}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
            </button>
          ))}
          {results.length === 0 && <p className="text-center py-8 text-gray-500">No results found</p>}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-2 text-xs text-gray-400 flex justify-between">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  )
}
EOF

# src/components/docs/CodeBlock.tsx
cat > src/components/docs/CodeBlock.tsx << 'EOF'
import { useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  fileName?: string
}

export default function CodeBlock({ code, language = 'text', showLineNumbers = false, fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const highlighted = Prism.highlight(code, Prism.languages[language] || Prism.languages.text, language)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative my-6">
      <div className="flex items-center justify-between bg-gray-800 dark:bg-gray-950 px-4 py-2 rounded-t-lg">
        <span className="text-sm text-gray-300">{fileName || language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className={`bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 overflow-x-auto rounded-b-lg ${showLineNumbers ? 'line-numbers' : ''}`}>
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  )
}
EOF

# src/components/docs/Callout.tsx
cat > src/components/docs/Callout.tsx << 'EOF'
import { ReactNode } from 'react'
import { Info, AlertTriangle, CheckCircle, XCircle, Lightbulb } from 'lucide-react'

interface CalloutProps {
  type: 'info' | 'tip' | 'warning' | 'danger' | 'success'
  children: ReactNode
  title?: string
}

const icons = {
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
  danger: XCircle,
  success: CheckCircle,
}

const styles = {
  info: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-200',
  tip: 'bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-900 text-purple-800 dark:text-purple-200',
  warning: 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900 text-yellow-800 dark:text-yellow-200',
  danger: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900 text-red-800 dark:text-red-200',
  success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900 text-green-800 dark:text-green-200',
}

export default function Callout({ type, children, title }: CalloutProps) {
  const Icon = icons[type]
  return (
    <div className={`my-6 p-4 rounded-lg border ${styles[type]}`}>
      <div className="flex gap-3">
        <Icon className="flex-shrink-0 mt-1" size={20} />
        <div>
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}
EOF

# src/components/docs/Tabs.tsx
cat > src/components/docs/Tabs.tsx << 'EOF'
import { useState } from 'react'

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[]
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="my-6">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="flex space-x-4">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-1 text-sm font-medium border-b-2 ${
                activeTab === index
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="pt-4">{tabs[activeTab].content}</div>
    </div>
  )
}
EOF

# src/components/docs/Accordion.tsx
cat > src/components/docs/Accordion.tsx << 'EOF'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionProps {
  items: { question: string; answer: string }[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="my-6 space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-900 dark:text-gray-100"
          >
            {item.question}
            <ChevronDown
              size={18}
              className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600 dark:text-gray-400">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}
EOF

# src/components/docs/Steps.tsx
cat > src/components/docs/Steps.tsx << 'EOF'
interface StepsProps {
  steps: { title: string; description: string }[]
}

export default function Steps({ steps }: StepsProps) {
  return (
    <ol className="my-6 space-y-4">
      {steps.map((step, index) => (
        <li key={index} className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-400 flex items-center justify-center font-semibold">
            {index + 1}
          </div>
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">{step.title}</div>
            <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
EOF

# src/components/docs/DocsCard.tsx
cat > src/components/docs/DocsCard.tsx << 'EOF'
import { Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'

interface DocsCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export default function DocsCard({ title, description, icon: Icon, href }: DocsCardProps) {
  return (
    <Link
      to={href}
      className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
          <Icon className="text-primary-600 dark:text-primary-400" size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  )
}
EOF

# src/pages/Home.tsx
cat > src/pages/Home.tsx << 'EOF'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Rocket, BookOpen, Code, Lightbulb, Puzzle, FileText } from 'lucide-react'
import DocsCard from '../components/docs/DocsCard'

interface HomeProps {
  onOpenSearch?: () => void
}

export default function Home({ onOpenSearch }: HomeProps) {
  const featuredDocs = [
    { title: 'Installation', path: '/docs/installation' },
    { title: 'Quick Start', path: '/docs/quick-start' },
    { title: 'Authentication', path: '/docs/authentication' },
    { title: 'API Reference', path: '/api' },
  ]

  const latestUpdates = [
    { version: '1.0.0', date: 'Jan 15, 2024', description: 'Initial release with core features' },
    { version: '0.9.0', date: 'Dec 20, 2023', description: 'Beta release and API improvements' },
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Build Better Applications
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Everything you need to build, integrate, and deploy modern applications.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/docs/quick-start"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg"
          >
            Get Started <ArrowRight size={18} />
          </Link>
          <Link
            to="/api"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            View API
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-16">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-400 hover:border-primary-400 dark:hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 text-left"
        >
          <Search size={20} />
          <span>Search documentation...</span>
          <kbd className="ml-auto text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <DocsCard icon={Rocket} title="Getting Started" description="Learn the basics and get up and running" href="/docs" />
        <DocsCard icon={BookOpen} title="Guides" description="In-depth tutorials and guides" href="/guides" />
        <DocsCard icon={Code} title="API Reference" description="Explore our API endpoints" href="/api" />
        <DocsCard icon={Lightbulb} title="Examples" description="Real-world examples and use cases" href="/examples" />
        <DocsCard icon={Puzzle} title="Integrations" description="Connect with other tools and services" href="/integrations" />
        <DocsCard icon={FileText} title="Changelog" description="See what's new in DevDocs" href="/changelog" />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Documentation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredDocs.map((doc) => (
            <Link
              key={doc.path}
              to={doc.path}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
            >
              <div className="font-medium text-gray-900 dark:text-white">{doc.title}</div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Latest Updates</h2>
        <div className="space-y-4">
          {latestUpdates.map((update) => (
            <div key={update.version} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{update.version}</span>
                <span className="text-sm text-gray-500">{update.date}</span>
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
EOF

# src/pages/docs/DocsLayout.tsx
cat > src/pages/docs/DocsLayout.tsx << 'EOF'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import TableOfContents from '../../components/layout/TableOfContents'

export default function DocsLayout() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex">
      <aside className="hidden md:block w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-800">
        <Sidebar />
      </aside>
      <main className="flex-1 min-w-0 py-8 px-6">
        <div className="prose-custom">
          <Outlet />
        </div>
      </main>
      <aside className="hidden xl:block">
        <TableOfContents />
      </aside>
    </div>
  )
}
EOF

# Now the individual doc pages (Overview, Installation, etc.)
# We'll generate them similarly, but to save space I'll combine into a loop
for page in Overview Installation QuickStart Authentication Configuration ApiIntroduction ApiEndpoints Deployment Changelog; do
  file="src/pages/docs/${page}.tsx"
  case $page in
    Overview)
      content='import Callout from "../../components/docs/Callout";
import CodeBlock from "../../components/docs/CodeBlock";
import DocsCard from "../../components/docs/DocsCard";
import { Rocket, BookOpen, Code, Settings } from "lucide-react";

export default function Overview() {
  return (
    <div className="prose-custom">
      <h1>Getting Started</h1>
      <p className="lead">Learn how to install and configure DevDocs.</p>
      <Callout type="info" title="What is DevDocs?">
        DevDocs is a modern developer documentation platform that helps you build, integrate, and deploy applications faster.
      </Callout>
      <h2 id="introduction">Introduction</h2>
      <p>DevDocs provides a comprehensive set of tools and APIs to help you create robust applications.</p>
      <h2 id="key-features">Key Features</h2>
      <ul>
        <li>Intuitive API with GraphQL and REST support</li>
        <li>Real-time collaboration and updates</li>
        <li>Built-in authentication and authorization</li>
        <li>Extensive plugin ecosystem</li>
        <li>Enterprise-grade security</li>
      </ul>
      <h2 id="quick-links">Quick Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
        <DocsCard icon={Rocket} title="Quick Start" description="Get up and running in minutes" href="/docs/quick-start" />
        <DocsCard icon={BookOpen} title="Guides" description="In-depth tutorials and guides" href="/guides" />
        <DocsCard icon={Code} title="API Reference" description="Explore our API endpoints" href="/api" />
        <DocsCard icon={Settings} title="Configuration" description="Configure DevDocs to your needs" href="/docs/configuration" />
      </div>
      <h2 id="installation-summary">Installation Summary</h2>
      <CodeBlock language="bash" code={`npm install devdocs\n# or\nyarn add devdocs\n# or\npnpm add devdocs`} />
    </div>
  );
}'
      ;;
    Installation)
      content='import CodeBlock from "../../components/docs/CodeBlock";
import Tabs from "../../components/docs/Tabs";
import Callout from "../../components/docs/Callout";

export default function Installation() {
  return (
    <div className="prose-custom">
      <h1>Installation</h1>
      <p>Install DevDocs in your project using your preferred package manager.</p>
      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>Node.js 16 or later</li>
        <li>npm, yarn, or pnpm</li>
      </ul>
      <h2 id="package-manager">Package Manager</h2>
      <Tabs
        tabs={[
          { label: "npm", content: <CodeBlock language="bash" code="npm install devdocs" /> },
          { label: "yarn", content: <CodeBlock language="bash" code="yarn add devdocs" /> },
          { label: "pnpm", content: <CodeBlock language="bash" code="pnpm add devdocs" /> },
          { label: "bun", content: <CodeBlock language="bash" code="bun add devdocs" /> },
        ]}
      />
      <h2 id="verify-installation">Verify Installation</h2>
      <p>After installation, verify that DevDocs is available:</p>
      <CodeBlock language="bash" code="npx devdocs --version" />
      <Callout type="warning" title="Note">
        DevDocs requires Node.js 16+ and modern browser support. Some features may not work in older browsers.
      </Callout>
    </div>
  );
}'
      ;;
    QuickStart)
      content='import CodeBlock from "../../components/docs/CodeBlock";
import Steps from "../../components/docs/Steps";
import Callout from "../../components/docs/Callout";

export default function QuickStart() {
  return (
    <div className="prose-custom">
      <h1>Quick Start</h1>
      <p>Get up and running with DevDocs in under 5 minutes.</p>
      <h2 id="steps">Steps</h2>
      <Steps
        steps={[
          { title: "Install dependencies", description: "Install the DevDocs package using npm or yarn." },
          { title: "Configure your project", description: "Create a configuration file or use environment variables." },
          { title: "Start development", description: "Run the development server and start building." },
          { title: "Deploy your application", description: "Build for production and deploy to your hosting provider." },
        ]}
      />
      <h2 id="example">Example Project</h2>
      <CodeBlock language="bash" code={`mkdir my-app\ncd my-app\nnpm init -y\nnpm install devdocs`} />
      <h2 id="configuration">Configuration</h2>
      <p>Create a <code>devdocs.config.js</code> file:</p>
      <CodeBlock language="javascript" code={`module.exports = {\n  apiKey: process.env.DEVDOCS_API_KEY,\n  environment: "development",\n  features: { auth: true, realtime: true },\n};`} />
      <h2 id="run">Run Development Server</h2>
      <CodeBlock language="bash" code="npx devdocs dev" />
      <Callout type="success" title="You are ready!">
        Your application is now running with DevDocs.
      </Callout>
    </div>
  );
}'
      ;;
    Authentication)
      content='import CodeBlock from "../../components/docs/CodeBlock";
import Callout from "../../components/docs/Callout";
import Tabs from "../../components/docs/Tabs";

export default function Authentication() {
  return (
    <div className="prose-custom">
      <h1>Authentication</h1>
      <p>Secure your application with DevDocs authentication.</p>
      <h2 id="overview">Overview</h2>
      <p>DevDocs provides built-in authentication with support for OAuth, JWT, and API keys.</p>
      <h2 id="setup">Setup</h2>
      <Tabs
        tabs={[
          { label: "JWT", content: <CodeBlock language="typescript" code={`import { createAuth } from "devdocs/auth";\n\nconst auth = createAuth({ type: "jwt", secret: process.env.JWT_SECRET });`} /> },
          { label: "OAuth", content: <CodeBlock language="typescript" code={`import { createAuth } from "devdocs/auth";\n\nconst auth = createAuth({ type: "oauth", providers: ["google", "github"] });`} /> },
          { label: "API Key", content: <CodeBlock language="typescript" code={`import { createAuth } from "devdocs/auth";\n\nconst auth = createAuth({ type: "apiKey", header: "X-API-Key" });`} /> },
        ]}
      />
      <h2 id="middleware">Middleware</h2>
      <CodeBlock language="typescript" code={`import { requireAuth } from "devdocs/auth/middleware";\n\napp.get("/protected", requireAuth, (req, res) => {\n  res.json({ user: req.user });\n});`} />
      <Callout type="warning" title="Security">Always use HTTPS in production.</Callout>
    </div>
  );
}'
      ;;
    Configuration)
      content='import CodeBlock from "../../components/docs/CodeBlock";
import Callout from "../../components/docs/Callout";

export default function Configuration() {
  return (
    <div className="prose-custom">
      <h1>Configuration</h1>
      <p>Configure DevDocs to suit your project needs.</p>
      <h2 id="config-file">Configuration File</h2>
      <CodeBlock language="javascript" fileName="devdocs.config.js" code={`module.exports = {\n  apiKey: process.env.DEVDOCS_API_KEY,\n  environment: "development",\n  features: { auth: true, realtime: true, logging: "info" },\n  server: { port: 3000 }\n};`} />
      <h2 id="environment-variables">Environment Variables</h2>
      <CodeBlock language="bash" code={`DEVDOCS_API_KEY=your-api-key\nDEVDOCS_ENV=production\nDEVDOCS_PORT=8080`} />
      <h2 id="options">Options</h2>
      <ul>
        <li><code>apiKey</code> - Your API key</li>
        <li><code>environment</code> - development, staging, production</li>
      </ul>
      <Callout type="tip" title="Tip">Use environment variables for sensitive values.</Callout>
    </div>
  );
}'
      ;;
    ApiIntroduction)
      content='import CodeBlock from "../../components/docs/CodeBlock";
import Callout from "../../components/docs/Callout";

export default function ApiIntroduction() {
  return (
    <div className="prose-custom">
      <h1>API Introduction</h1>
      <p>Learn the basics of the DevDocs API.</p>
      <h2 id="base-url">Base URL</h2>
      <CodeBlock language="text" code="https://api.devdocs.example.com/v1" />
      <h2 id="authentication">Authentication</h2>
      <CodeBlock language="bash" code={`curl -H "Authorization: Bearer YOUR_TOKEN" \\\n  https://api.devdocs.example.com/v1/users`} />
      <h2 id="rate-limiting">Rate Limiting</h2>
      <p>API requests are limited to 1000 per hour.</p>
      <h2 id="errors">Errors</h2>
      <CodeBlock language="json" code={`{\n  "error": { "code": "invalid_request", "message": "Invalid API key", "status": 401 }\n}`} />
      <Callout type="info" title="Need help?">Check the API Reference for details.</Callout>
    </div>
  );
}'
      ;;
    ApiEndpoints)
      content='import CodeBlock from "../../components/docs/CodeBlock";
import Tabs from "../../components/docs/Tabs";

export default function ApiEndpoints() {
  return (
    <div className="prose-custom">
      <h1>API Endpoints</h1>
      <p>Reference for all available API endpoints.</p>
      <h2 id="users">Users</h2>
      <Tabs
        tabs={[
          { label: "List Users", content: <CodeBlock language="bash" code="GET /v1/users\nAuthorization: Bearer YOUR_TOKEN" /> },
          { label: "Create User", content: <CodeBlock language="bash" code={`POST /v1/users\nContent-Type: application/json\n\n{ "email": "user@example.com", "name": "John Doe" }`} /> },
        ]}
      />
      <h2 id="products">Products</h2>
      <CodeBlock language="bash" code="GET /v1/products?limit=10&page=1" />
      <h2 id="orders">Orders</h2>
      <CodeBlock language="bash" code={`POST /v1/orders\nContent-Type: application/json\n\n{ "productId": "prod_123", "quantity": 2 }`} />
    </div>
  );
}'
      ;;
    Deployment)
      content='import CodeBlock from "../../components/docs/CodeBlock";
import Steps from "../../components/docs/Steps";

export default function Deployment() {
  return (
    <div className="prose-custom">
      <h1>Deployment</h1>
      <p>Deploy your application to production.</p>
      <h2 id="build">Build</h2>
      <CodeBlock language="bash" code="npm run build" />
      <h2 id="deploy-steps">Deployment Steps</h2>
      <Steps
        steps={[
          { title: "Set environment variables", description: "Configure production environment variables." },
          { title: "Build your application", description: "Run the build command." },
          { title: "Upload to hosting", description: "Deploy the build output." },
          { title: "Verify", description: "Check that your application is running." },
        ]}
      />
      <h2 id="hosting">Hosting Providers</h2>
      <ul><li>Vercel</li><li>Netlify</li><li>AWS</li><li>Google Cloud</li><li>Heroku</li></ul>
    </div>
  );
}'
      ;;
    Changelog)
      content='export default function Changelog() {
  return (
    <div className="prose-custom">
      <h1>Changelog</h1>
      <p>See what is new in DevDocs.</p>
      <h2 id="version-1.0.0">Version 1.0.0</h2>
      <p>Released on January 15, 2024</p>
      <ul>
        <li>Initial release</li>
        <li>Authentication support</li>
        <li>REST and GraphQL APIs</li>
      </ul>
      <h2 id="version-0.9.0">Version 0.9.0</h2>
      <p>Released on December 20, 2023</p>
      <ul>
        <li>Beta release</li>
        <li>Basic API endpoints</li>
      </ul>
    </div>
  );
}'
      ;;
  esac
  echo "$content" > "$file"
done

# Guides, ApiReference, ChangelogPage pages
cat > src/pages/Guides.tsx << 'EOF'
import { Key, Settings, Rocket } from 'lucide-react'
import DocsCard from '../components/docs/DocsCard'

export default function Guides() {
  const guides = [
    { title: 'Authentication', description: 'Secure your application', icon: Key, href: '/docs/authentication' },
    { title: 'Configuration', description: 'Configure DevDocs', icon: Settings, href: '/docs/configuration' },
    { title: 'Deployment', description: 'Deploy to production', icon: Rocket, href: '/docs/deployment' },
  ]
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => <DocsCard key={guide.href} {...guide} />)}
      </div>
    </div>
  )
}
EOF

cat > src/pages/ApiReference.tsx << 'EOF'
import { Code, Users, Package, ShoppingCart } from 'lucide-react'
import DocsCard from '../components/docs/DocsCard'

export default function ApiReference() {
  const endpoints = [
    { title: 'Introduction', description: 'API basics and authentication', icon: Code, href: '/docs/api-introduction' },
    { title: 'Users', description: 'Manage users', icon: Users, href: '/docs/api-endpoints' },
    { title: 'Products', description: 'Manage products', icon: Package, href: '/docs/api-endpoints' },
    { title: 'Orders', description: 'Manage orders', icon: ShoppingCart, href: '/docs/api-endpoints' },
  ]
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">API Reference</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {endpoints.map((endpoint) => <DocsCard key={endpoint.title} {...endpoint} />)}
      </div>
    </div>
  )
}
EOF

cat > src/pages/ChangelogPage.tsx << 'EOF'
export default function ChangelogPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Changelog</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Version 1.0.0</h2>
          <p className="text-gray-500">January 15, 2024</p>
          <ul className="mt-4 space-y-2 list-disc pl-6">
            <li>Initial release</li>
            <li>Authentication support</li>
            <li>REST and GraphQL APIs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Version 0.9.0</h2>
          <p className="text-gray-500">December 20, 2023</p>
          <ul className="mt-4 space-y-2 list-disc pl-6">
            <li>Beta release</li>
            <li>Basic API endpoints</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
EOF

# CI/CD workflow with security
cat > .github/workflows/deploy.yml << 'EOF'
name: CI/CD with Security Checks

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write
  security-events: write

jobs:
  security:
    name: Security Checks
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run npm audit
        run: npm audit --audit-level=high

      - name: Dependency Review (PR only)
        if: github.event_name == 'pull_request'
        uses: actions/dependency-review-action@v4

  build:
    name: Build
    needs: security
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  codeql:
    name: CodeQL Analysis
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read
      contents: read
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript-typescript']
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: ${{ matrix.language }}

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3

  deploy:
    name: Deploy to GitHub Pages
    needs: [build, codeql]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
EOF

echo "Project generated successfully!"
echo "Run 'npm install' and 'npm run dev' to start."