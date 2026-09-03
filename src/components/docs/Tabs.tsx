import { useId, useState } from "react";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: number;
}

export default function Tabs({
  tabs,
  defaultTab = 0,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabsId = useId();

  if (!tabs.length) {
    return null;
  }

  const safeActiveTab =
    activeTab >= 0 && activeTab < tabs.length
      ? activeTab
      : 0;

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % tabs.length;
        break;

      case "ArrowLeft":
        nextIndex =
          (index - 1 + tabs.length) % tabs.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    setActiveTab(nextIndex);

    requestAnimationFrame(() => {
      document
        .getElementById(`${tabsId}-tab-${nextIndex}`)
        ?.focus();
    });
  };

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.02]">
      {/* Tab navigation */}
      <div className="border-b border-gray-200 bg-gray-50/70 dark:border-white/10 dark:bg-white/[0.02]">
        <div
          role="tablist"
          aria-label="Content tabs"
          className="
            flex
            overflow-x-auto
            px-2
            scrollbar-none
          "
        >
          {tabs.map((tab, index) => {
            const isActive = safeActiveTab === index;

            return (
              <button
                key={`${tab.label}-${index}`}
                id={`${tabsId}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tabsId}-panel-${index}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(index)}
                onKeyDown={(event) =>
                  handleKeyDown(event, index)
                }
                className={`
                  relative
                  shrink-0
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-colors
                  duration-150
                  outline-none

                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-inset

                  ${
                    isActive
                      ? "text-gray-950 dark:text-white"
                      : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  }
                `}
              >
                {tab.label}

                {/* Active indicator */}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-2
                    right-2
                    h-0.5
                    rounded-full
                    bg-blue-600
                    transition-all
                    duration-200
                    dark:bg-blue-400

                    ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div
        id={`${tabsId}-panel-${safeActiveTab}`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${safeActiveTab}`}
        tabIndex={0}
        className="
          p-5
          outline-none
          sm:p-6
        "
      >
        {tabs[safeActiveTab].content}
      </div>
    </div>
  );
}

