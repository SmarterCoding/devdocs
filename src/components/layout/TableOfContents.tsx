import { List } from "lucide-react";
import { useTableOfContents } from "../../hooks/useTableOfContents";

export default function TableOfContents() {
  const { headings, activeId } = useTableOfContents();

  if (headings.length === 0) return null;

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 xl:block">
      <nav
        aria-label="Table of contents"
        className="
          h-full
          overflow-y-auto
          px-4 py-8
          scrollbar-thin
          scrollbar-thumb-gray-200
          dark:scrollbar-thumb-white/10
        "
      >
        {/* Header */}
        <div className="mb-5 flex items-center gap-2 px-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-500 dark:bg-white/[0.06] dark:text-gray-400">
            <List className="h-3.5 w-3.5" />
          </div>

          <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
            On this page
          </h2>
        </div>

        {/* Contents */}
        <div className="relative">
          {/* Vertical guide */}
          <div className="absolute bottom-0 left-2 top-0 w-px bg-gray-200 dark:bg-white/10" />

          <ul className="space-y-0.5">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              const isSubHeading = heading.level === 3;

              return (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`
                      group relative flex items-center
                      rounded-r-lg
                      py-1.5
                      pr-2
                      text-[13px]
                      leading-5
                      transition-all duration-150

                      ${
                        isSubHeading
                          ? "pl-8"
                          : "pl-5"
                      }

                      ${
                        isActive
                          ? `
                            bg-blue-50
                            font-medium
                            text-blue-700
                            dark:bg-blue-500/10
                            dark:text-blue-400
                          `
                          : `
                            text-gray-500
                            hover:bg-gray-50
                            hover:text-gray-900
                            dark:text-gray-500
                            dark:hover:bg-white/[0.04]
                            dark:hover:text-gray-200
                          `
                      }
                    `}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <span
                        className="
                          absolute
                          -left-px
                          top-0
                          h-full
                          w-0.5
                          rounded-full
                          bg-blue-600
                          dark:bg-blue-400
                        "
                      />
                    )}

                    {/* Heading level indicator */}
                    {isSubHeading && (
                      <span
                        className={`
                          absolute left-5 h-1 w-1 rounded-full
                          ${
                            isActive
                              ? "bg-blue-500 dark:bg-blue-400"
                              : "bg-gray-300 dark:bg-gray-700"
                          }
                        `}
                      />
                    )}

                    <span className="truncate">
                      {heading.text}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

