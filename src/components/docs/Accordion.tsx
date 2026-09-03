import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { ReactNode } from "react"

interface AccordionItem {
  question: string
  answer: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpen?: number[]
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] =
    useState<number[]>(defaultOpen)

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((current) =>
        current.includes(index)
          ? current.filter((item) => item !== index)
          : [...current, index]
      )

      return
    }

    setOpenIndexes((current) =>
      current.includes(index) ? [] : [index]
    )
  }

  return (
    <div className="my-8 space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        const contentId = `accordion-content-${index}`
        const buttonId = `accordion-button-${index}`

        return (
          <div
            key={index}
            className={`
              group
              overflow-hidden
              rounded-xl
              border
              transition-all
              duration-200
              ${
                isOpen
                  ? "border-gray-300 bg-gray-50 shadow-sm dark:border-gray-700 dark:bg-gray-900/60"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 dark:hover:bg-gray-900/40"
              }
            `}
          >
            {/* Question */}
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                px-5
                py-4
                text-left
                outline-none
                transition-colors
                focus-visible:ring-2
                focus-visible:ring-gray-400
                focus-visible:ring-inset
                dark:focus-visible:ring-gray-600
              "
            >
              <span
                className={`
                  text-sm
                  font-semibold
                  leading-6
                  transition-colors
                  ${
                    isOpen
                      ? "text-gray-950 dark:text-white"
                      : "text-gray-800 dark:text-gray-200"
                  }
                `}
              >
                {item.question}
              </span>

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
                  transition-all
                  duration-200
                  ${
                    isOpen
                      ? "border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800"
                      : "border-gray-200 bg-gray-50 group-hover:bg-white dark:border-gray-800 dark:bg-gray-900"
                  }
                `}
              >
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`
                    text-gray-500
                    transition-transform
                    duration-200
                    dark:text-gray-400
                    ${isOpen ? "rotate-180" : ""}
                  `}
                  aria-hidden="true"
                />
              </span>
            </button>

            {/* Answer */}
            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
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
              <div className="overflow-hidden">
                <div className="border-t border-gray-200 px-5 pb-5 pt-4 text-sm leading-6 text-gray-600 dark:border-gray-800 dark:text-gray-400">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

