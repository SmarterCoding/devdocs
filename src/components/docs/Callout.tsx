import { ReactNode } from "react"
import {
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
} from "lucide-react"

interface CalloutProps {
  type: "info" | "tip" | "warning" | "danger" | "success"
  children: ReactNode
  title?: string
}

const config = {
  info: {
    icon: Info,
    label: "Info",
    iconClass:
      "bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400",
    container:
      "border-blue-200/70 bg-blue-50/70 dark:border-blue-900/60 dark:bg-blue-950/30",
    accent: "bg-blue-500",
    title: "text-blue-900 dark:text-blue-200",
    text: "text-blue-800/90 dark:text-blue-200/80",
  },

  tip: {
    icon: Lightbulb,
    label: "Tip",
    iconClass:
      "bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400",
    container:
      "border-purple-200/70 bg-purple-50/70 dark:border-purple-900/60 dark:bg-purple-950/30",
    accent: "bg-purple-500",
    title: "text-purple-900 dark:text-purple-200",
    text: "text-purple-800/90 dark:text-purple-200/80",
  },

  warning: {
    icon: AlertTriangle,
    label: "Warning",
    iconClass:
      "bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400",
    container:
      "border-amber-200/70 bg-amber-50/70 dark:border-amber-900/60 dark:bg-amber-950/30",
    accent: "bg-amber-500",
    title: "text-amber-900 dark:text-amber-200",
    text: "text-amber-800/90 dark:text-amber-200/80",
  },

  danger: {
    icon: XCircle,
    label: "Danger",
    iconClass:
      "bg-red-500/10 text-red-600 dark:bg-red-400/10 dark:text-red-400",
    container:
      "border-red-200/70 bg-red-50/70 dark:border-red-900/60 dark:bg-red-950/30",
    accent: "bg-red-500",
    title: "text-red-900 dark:text-red-200",
    text: "text-red-800/90 dark:text-red-200/80",
  },

  success: {
    icon: CheckCircle,
    label: "Success",
    iconClass:
      "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
    container:
      "border-emerald-200/70 bg-emerald-50/70 dark:border-emerald-900/60 dark:bg-emerald-950/30",
    accent: "bg-emerald-500",
    title: "text-emerald-900 dark:text-emerald-200",
    text: "text-emerald-800/90 dark:text-emerald-200/80",
  },
} as const

export default function Callout({
  type,
  children,
  title,
}: CalloutProps) {
  const current = config[type]
  const Icon = current.icon

  return (
    <div
      role="note"
      className={`
        group
        relative
        my-6
        overflow-hidden
        rounded-xl
        border
        ${current.container}
        shadow-sm
        transition-all
        duration-200
        hover:shadow-md
      `}
    >
      {/* Accent bar */}
      <div
        className={`
          absolute
          inset-y-0
          left-0
          w-1
          ${current.accent}
        `}
      />

      <div className="flex gap-4 p-4 sm:p-5">

        {/* Icon */}
        <div
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-lg
            ${current.iconClass}
          `}
        >
          <Icon
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pt-0.5">

          {/* Title */}
          <div
            className={`
              mb-1.5
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              ${current.title}
            `}
          >
            {title || current.label}
          </div>

          {/* Body */}
          <div
            className={`
              text-sm
              leading-6
              ${current.text}
              [&>p]:my-1
              [&>p:first-child]:mt-0
              [&>p:last-child]:mb-0
              [&>a]:font-medium
              [&>a]:underline
              [&>code]:rounded
              [&>code]:bg-black/5
              [&>code]:px-1.5
              [&>code]:py-0.5
              [&>code]:font-mono
              [&>code]:text-[0.85em]
              dark:[&>code]:bg-white/10
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

