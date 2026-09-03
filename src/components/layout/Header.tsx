import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BookOpen,
  Github,
  Menu,
  Moon,
  Search,
  Sun,
  X,
  ArrowUpRight,
} from "lucide-react";

import { useDarkMode } from "../../hooks/useDarkMode";

interface HeaderProps {
  onOpenSearch: () => void;
}

export default function Header({ onOpenSearch }: HeaderProps) {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Docs", href: "/docs" },
    { label: "Guides", href: "/guides" },
    { label: "API Reference", href: "/api" },
    { label: "Examples", href: "/examples" },
    { label: "Changelog", href: "/changelog" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b0f]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <div className="flex min-w-0 items-center">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="group flex items-center gap-2.5"
              >
                {/* Logo */}
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-950 text-white shadow-sm transition-transform duration-200 group-hover:scale-105 dark:bg-white dark:text-gray-950">
                  <BookOpen className="h-4.5 w-4.5" />
                </span>

                {/* Name */}
                <span className="text-[15px] font-bold tracking-tight text-gray-950 dark:text-white">
                  DevDocs
                </span>
              </Link>

              {/* Divider */}
              <span className="mx-3 hidden h-5 w-px bg-gray-200 sm:block dark:bg-white/10" />

              {/* Current area */}
              <span className="hidden text-sm font-medium text-gray-500 sm:block dark:text-gray-400">
                Documentation
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) => `
                    rounded-lg px-3 py-2
                    text-[13px] font-medium
                    transition-colors duration-150

                    ${
                      isActive
                        ? "bg-gray-100 text-gray-950 dark:bg-white/[0.07] dark:text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-white/[0.04] dark:hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5">
              {/* Desktop Search */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="
                  group hidden h-9 items-center gap-2
                  rounded-lg border border-gray-200
                  bg-gray-50/70 px-3
                  text-sm text-gray-500
                  transition-all
                  hover:border-gray-300
                  hover:bg-white
                  hover:text-gray-900
                  sm:flex
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-gray-400
                  dark:hover:border-white/20
                  dark:hover:bg-white/[0.07]
                  dark:hover:text-white
                "
                aria-label="Search documentation"
              >
                <Search className="h-4 w-4" />

                <span className="hidden lg:inline">
                  Search documentation
                </span>

                <kbd
                  className="
                    ml-2 hidden items-center gap-0.5
                    rounded-md border
                    border-gray-200
                    bg-white px-1.5 py-0.5
                    font-mono text-[10px]
                    text-gray-400
                    lg:flex
                    dark:border-white/10
                    dark:bg-white/[0.05]
                  "
                >
                  <span>⌘</span>
                  <span>K</span>
                </kbd>
              </button>

              {/* Mobile Search */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg
                  text-gray-500
                  transition
                  hover:bg-gray-100
                  hover:text-gray-950
                  sm:hidden
                  dark:text-gray-400
                  dark:hover:bg-white/[0.06]
                  dark:hover:text-white
                "
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden h-9 w-9 items-center justify-center
                  rounded-lg
                  text-gray-500
                  transition
                  hover:bg-gray-100
                  hover:text-gray-950
                  sm:flex
                  dark:text-gray-400
                  dark:hover:bg-white/[0.06]
                  dark:hover:text-white
                "
                aria-label="GitHub"
              >
                <Github className="h-4.5 w-4.5" />
              </a>

              {/* Theme */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg
                  text-gray-500
                  transition
                  hover:bg-gray-100
                  hover:text-gray-950
                  dark:text-gray-400
                  dark:hover:bg-white/[0.06]
                  dark:hover:text-white
                "
                aria-label={
                  isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {isDark ? (
                  <Sun className="h-4.5 w-4.5" />
                ) : (
                  <Moon className="h-4.5 w-4.5" />
                )}
              </button>

              {/* Mobile menu */}
              <button
                type="button"
                onClick={() =>
                  setIsMobileMenuOpen((prev) => !prev)
                }
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg
                  text-gray-500
                  transition
                  hover:bg-gray-100
                  hover:text-gray-950
                  md:hidden
                  dark:text-gray-400
                  dark:hover:bg-white/[0.06]
                  dark:hover:text-white
                "
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            overflow-hidden border-t border-gray-200
            transition-all duration-200
            dark:border-white/10
            md:hidden
            ${
              isMobileMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 border-t-0 opacity-0"
            }
          `}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                    flex items-center justify-between
                    rounded-lg px-3 py-2.5
                    text-sm font-medium
                    transition-colors

                    ${
                      isActive
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Mobile GitHub */}
            <div className="mt-4 border-t border-gray-200 pt-4 dark:border-white/10">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </span>

                <ArrowUpRight className="h-4 w-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

