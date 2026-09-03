import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BookOpen,
  ChevronDown,
  FileText,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { navigation } from "../../data/documentation";

export default function Sidebar() {
  const location = useLocation();

  const [openSections, setOpenSections] = useState<string[]>(
    navigation.map((section) => section.slug),
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------------------------------------------------------------------- */
  /* Automatically open the section containing the current page             */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const activeSection = navigation.find((section) =>
      (section.children ?? []).some(
        (child) =>
          location.pathname === child.slug ||
          location.pathname.endsWith(`/${child.slug}`),
      ),
    );

    if (activeSection && !openSections.includes(activeSection.slug)) {
      setOpenSections((prev) => [...prev, activeSection.slug]);
    }
  }, [location.pathname]);

  /* ---------------------------------------------------------------------- */
  /* Close mobile menu after navigation                                     */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* ---------------------------------------------------------------------- */
  /* Lock body scroll on mobile                                             */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ---------------------------------------------------------------------- */
  /* Section toggle                                                         */
  /* ---------------------------------------------------------------------- */

  const toggleSection = (slug: string) => {
    setOpenSections((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug],
    );
  };

  /* ---------------------------------------------------------------------- */
  /* Navigation                                                             */
  /* ---------------------------------------------------------------------- */

  const navigationContent = (
    <div className="space-y-7">
      {navigation.map((section) => {
        const children = section.children ?? [];
        const isOpen = openSections.includes(section.slug);

        const hasActiveChild = children.some(
          (child) =>
            location.pathname === child.slug ||
            location.pathname.endsWith(`/${child.slug}`),
        );

        return (
          <section key={section.slug}>
            {/* Section heading */}
            <button
              type="button"
              onClick={() => toggleSection(section.slug)}
              aria-expanded={isOpen}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-2
                py-1.5
                text-left
                transition
                hover:bg-slate-100
                dark:hover:bg-white/[0.04]
              "
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    transition
                    ${
                      hasActiveChild
                        ? `
                          border-indigo-200
                          bg-indigo-50
                          text-indigo-600
                          dark:border-indigo-900
                          dark:bg-indigo-950/50
                          dark:text-indigo-400
                        `
                        : `
                          border-slate-200
                          bg-slate-50
                          text-slate-400
                          dark:border-slate-800
                          dark:bg-slate-900
                          dark:text-slate-500
                        `
                    }
                  `}
                >
                  <FileText className="h-3.5 w-3.5" />
                </span>

                <span
                  className={`
                    truncate
                    text-[13px]
                    font-semibold
                    ${
                      hasActiveChild
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-700 dark:text-slate-300"
                    }
                  `}
                >
                  {section.title}
                </span>

                {children.length > 0 && (
                  <span className="
                    rounded-md
                    bg-slate-100
                    px-1.5
                    py-0.5
                    text-[10px]
                    font-semibold
                    tabular-nums
                    text-slate-400
                    dark:bg-white/[0.06]
                    dark:text-slate-500
                  ">
                    {children.length}
                  </span>
                )}
              </span>

              <ChevronDown
                className={`
                  h-4
                  w-4
                  shrink-0
                  text-slate-400
                  transition-transform
                  duration-200
                  group-hover:text-slate-600
                  dark:text-slate-500
                  dark:group-hover:text-slate-300
                  ${isOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* Children */}
            <div
              className={`
                grid
                transition-[grid-template-rows,opacity]
                duration-200
                ease-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="relative ml-[21px] mt-2 space-y-0.5 border-l border-slate-200 pl-3 dark:border-slate-800">
                  {children.map((child) => (
                    <NavLink
                      key={child.slug}
                      to={child.slug}
                      className={({ isActive }) => `
                        group
                        relative
                        flex
                        min-h-9
                        items-center
                        rounded-lg
                        px-3
                        py-2
                        text-[13px]
                        transition-all
                        duration-150
                        ${
                          isActive
                            ? `
                              bg-indigo-50
                              font-semibold
                              text-indigo-700
                              shadow-sm
                              dark:bg-indigo-500/10
                              dark:text-indigo-400
                            `
                            : `
                              text-slate-500
                              hover:bg-slate-100
                              hover:text-slate-900
                              dark:text-slate-400
                              dark:hover:bg-white/[0.04]
                              dark:hover:text-white
                            `
                        }
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          {/* Active indicator */}
                          {isActive && (
                            <span
                              className="
                                absolute
                                -left-[17px]
                                top-1/2
                                h-6
                                w-0.5
                                -translate-y-1/2
                                rounded-full
                                bg-indigo-600
                                shadow-[0_0_8px_rgba(99,102,241,0.5)]
                                dark:bg-indigo-400
                              "
                            />
                          )}

                          <span className="flex min-w-0 items-center gap-2">
                            {isActive && (
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                            )}

                            <span className="truncate">
                              {child.title}
                            </span>
                          </span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );

  return (
    <>
      {/* ================================================================== */}
      {/* Mobile trigger                                                     */}
      {/* ================================================================== */}

      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open documentation navigation"
        aria-expanded={mobileOpen}
        className="
          fixed
          bottom-5
          left-5
          z-40
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-200
          bg-white
          text-slate-700
          shadow-xl
          shadow-slate-900/10
          transition
          hover:-translate-y-0.5
          hover:border-indigo-200
          hover:text-indigo-600
          dark:border-slate-800
          dark:bg-slate-900
          dark:text-slate-200
          dark:hover:border-indigo-900
          dark:hover:text-indigo-400
          lg:hidden
        "
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* ================================================================== */}
      {/* Mobile overlay                                                     */}
      {/* ================================================================== */}

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close documentation navigation"
          onClick={() => setMobileOpen(false)}
          className="
            fixed
            inset-0
            z-40
            cursor-default
            bg-slate-950/40
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/* ================================================================== */}
      {/* Mobile drawer                                                      */}
      {/* ================================================================== */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-[300px]
          flex-col
          border-r
          border-slate-200
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          dark:border-slate-800
          dark:bg-slate-950
          lg:hidden
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Mobile header */}
        <div className="
          flex
          h-16
          shrink-0
          items-center
          justify-between
          border-b
          border-slate-200
          px-5
          dark:border-slate-800
        ">
          <div className="flex items-center gap-3">
            <div className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-indigo-600
              text-white
              shadow-sm
            ">
              <BookOpen className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-950 dark:text-white">
                Documentation
              </p>

              <p className="text-[11px] text-slate-500 dark:text-slate-500">
                Browse the docs
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close documentation navigation"
            className="
              rounded-xl
              p-2
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-900
              dark:hover:bg-white/[0.05]
              dark:hover:text-white
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile navigation */}
        <nav
          aria-label="Documentation navigation"
          className="
            flex-1
            overflow-y-auto
            px-4
            py-6
            scrollbar-thin
            scrollbar-thumb-slate-200
            dark:scrollbar-thumb-slate-800
          "
        >
          {navigationContent}

          <SidebarHelpCard />
        </nav>
      </aside>

      {/* ================================================================== */}
      {/* Desktop sidebar content                                            */}
      {/* ================================================================== */}

      <div className="hidden lg:block">
        <div className="mb-6 flex items-center gap-2 px-2">
          <BookOpen className="h-4 w-4 text-indigo-500" />

          <span className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-slate-400
            dark:text-slate-500
          ">
            Documentation
          </span>
        </div>

        <nav aria-label="Documentation navigation">
          {navigationContent}

          <SidebarHelpCard />
        </nav>
      </div>
    </>
  );
}

/* ========================================================================== */
/* Help card                                                                  */
/* ========================================================================== */

function SidebarHelpCard() {
  return (
    <div className="
      mt-8
      rounded-2xl
      border
      border-slate-200
      bg-gradient-to-br
      from-slate-50
      to-white
      p-4
      dark:border-slate-800
      dark:from-slate-900
      dark:to-slate-950
    ">
      <div className="flex items-start gap-3">
        <div className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-indigo-50
          text-indigo-600
          dark:bg-indigo-950/60
          dark:text-indigo-400
        ">
          <Sparkles className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-bold text-slate-900 dark:text-white">
            Need help?
          </p>

          <p className="mt-1 text-[11px] leading-5 text-slate-500 dark:text-slate-400">
            Start with the API introduction to learn how everything works.
          </p>

          <NavLink
            to="/docs/api-introduction"
            className="
              mt-3
              inline-flex
              items-center
              gap-1
              text-xs
              font-semibold
              text-indigo-600
              transition
              hover:text-indigo-700
              dark:text-indigo-400
              dark:hover:text-indigo-300
            "
          >
            Get started
            <ArrowUpRight className="h-3 w-3" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
