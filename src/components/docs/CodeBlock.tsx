import { useState } from 'react'
import Prism from 'prismjs'
import {
  Check,
  Copy,
  FileCode2,
  Terminal,
} from 'lucide-react'

import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  fileName?: string
}

export default function CodeBlock({
  code,
  language = 'text',
  showLineNumbers = true,
  fileName,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const normalizedLanguage =
    language === 'tsx'
      ? 'typescript'
      : language === 'jsx'
        ? 'javascript'
        : language

  const grammar =
    Prism.languages[normalizedLanguage] ||
    Prism.languages.markup ||
    Prism.languages.plain

  const highlighted = Prism.highlight(
    code,
    grammar,
    normalizedLanguage
  )

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy code:', error)
    }
  }

  const lines = code.split('\n')

  return (
    <div className="group relative my-8 overflow-hidden rounded-xl border border-gray-200 bg-[#0b0f14] shadow-2xl shadow-black/10 dark:border-white/10 dark:shadow-black/30">

      {/* Header */}
      <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#11161d] px-4">

        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">

          {/* Window dots */}
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>

          {/* File */}
          <div className="flex min-w-0 items-center gap-2">

            {fileName ? (
              <FileCode2
                size={15}
                className="shrink-0 text-gray-400"
              />
            ) : (
              <Terminal
                size={15}
                className="shrink-0 text-gray-400"
              />
            )}

            <span className="truncate text-xs font-medium text-gray-300">
              {fileName || 'Code'}
            </span>
          </div>

          {/* Language */}
          <span className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:inline-flex">
            {language}
          </span>
        </div>

        {/* Copy */}
        <button
          type="button"
          onClick={copyToClipboard}
          className="
            inline-flex
            items-center
            gap-2
            rounded-md
            border
            border-white/10
            bg-white/5
            px-2.5
            py-1.5
            text-xs
            font-medium
            text-gray-400
            transition
            hover:border-white/20
            hover:bg-white/10
            hover:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-white/20
          "
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="relative overflow-x-auto">

        <pre
          className="
            m-0
            min-w-full
            overflow-x-auto
            bg-[#0b0f14]
            py-5
            font-mono
            text-[13px]
            leading-6
            text-gray-300
            antialiased
            sm:text-[13.5px]
          "
        >
          <code className="block">
            {showLineNumbers ? (
              lines.map((_, index) => {
                const start = code
                  .split('\n')
                  .slice(0, index)
                  .map(() => '')
                  .join('\n')

                const lineCode =
                  code.split('\n')[index]

                const highlightedLine = Prism.highlight(
                  lineCode || ' ',
                  grammar,
                  normalizedLanguage
                )

                return (
                  <span
                    key={index}
                    className="flex min-w-max"
                  >
                    {/* Line number */}
                    <span
                      className="
                        sticky
                        left-0
                        w-12
                        shrink-0
                        select-none
                        border-r
                        border-white/5
                        bg-[#0b0f14]
                        pr-4
                        text-right
                        text-xs
                        text-gray-600
                      "
                    >
                      {index + 1}
                    </span>

                    {/* Code */}
                    <span
                      className="pl-5 pr-8"
                      dangerouslySetInnerHTML={{
                        __html: highlightedLine,
                      }}
                    />
                  </span>
                )
              })
            ) : (
              <span
                className="block px-6"
                dangerouslySetInnerHTML={{
                  __html: highlighted,
                }}
              />
            )}
          </code>
        </pre>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  )
}

