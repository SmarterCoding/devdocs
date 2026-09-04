import CodeBlock from "../../components/docs/CodeBlock";
import Tabs from "../../components/docs/Tabs";
import Callout from "../../components/docs/Callout";

import {
  Check,
  Package,
  Terminal,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Installation() {
  return (
    <article className="mx-auto w-full max-w-4xl">
      {/* ================================================================== */}
      {/* Hero                                                               */}
      {/* ================================================================== */}

      <header className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/70 px-6 py-10 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 sm:px-10 sm:py-12">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Package className="h-3.5 w-3.5" />
            Getting Started
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Installation
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Install DevDocs in your project using the package manager you
            already know and love.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              Node.js 16+
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              <Package className="h-3.5 w-3.5 text-indigo-500" />
              npm / yarn / pnpm / bun
            </div>
          </div>
        </div>
      </header>

      {/* ================================================================== */}
      {/* Prerequisites                                                       */}
      {/* ================================================================== */}

      <section id="prerequisites" className="scroll-mt-24">
        <div className="mb-7">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Before you begin
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Prerequisites
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Make sure your development environment meets these requirements.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Node */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-indigo-900">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                <Terminal className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Node.js
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Node.js version 16 or later is required.
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  <Check className="h-3 w-3 text-emerald-500" />
                  v16+
                </div>
              </div>
            </div>
          </div>

          {/* Package manager */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-indigo-900">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                <Package className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Package manager
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Use npm, yarn, pnpm, or bun to install DevDocs.
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["npm", "yarn", "pnpm", "bun"].map((manager) => (
                    <span
                      key={manager}
                      className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {manager}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Package Manager                                                     */}
      {/* ================================================================== */}

      <section id="package-manager" className="mt-16 scroll-mt-24">
        <div className="mb-7">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Step 1
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Choose your package manager
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Select your preferred package manager and run the installation
            command.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <Tabs
            tabs={[
              {
                label: "npm",
                content: (
                  <CodeBlock
                    language="bash"
                    code="npm install devdocs"
                  />
                ),
              },
              {
                label: "yarn",
                content: (
                  <CodeBlock
                    language="bash"
                    code="yarn add devdocs"
                  />
                ),
              },
              {
                label: "pnpm",
                content: (
                  <CodeBlock
                    language="bash"
                    code="pnpm add devdocs"
                  />
                ),
              },
              {
                label: "bun",
                content: (
                  <CodeBlock
                    language="bash"
                    code="bun add devdocs"
                  />
                ),
              },
            ]}
          />
        </div>

        <div className="mt-5">
          <Callout type="info" title="Which package manager should I use?">
            Any of the supported package managers will work. Use the one
            already configured in your project to keep your development
            workflow consistent.
          </Callout>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Verify Installation                                                 */}
      {/* ================================================================== */}

      <section id="verify-installation" className="mt-16 scroll-mt-24">
        <div className="mb-7">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Step 2
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Verify your installation
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Confirm that DevDocs is installed and available from your
            terminal.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="bash"
            code="npx devdocs --version"
          />
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Installation complete
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                If the command prints a version number, DevDocs has been
                installed successfully and is ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Compatibility                                                       */}
      {/* ================================================================== */}

      <section className="mt-16">
        <Callout type="warning" title="Browser compatibility">
          DevDocs requires Node.js 16+ and modern browser support. Some
          features may not work correctly in older browsers.
        </Callout>
      </section>

      {/* ================================================================== */}
      {/* Next step                                                           */}
      {/* ================================================================== */}

      <section className="mt-14 border-t border-slate-200 pt-8 dark:border-slate-800">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Next step
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              Configure your project
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Learn how to configure DevDocs for your application.
            </p>
          </div>

          <a
            href="/docs/configuration"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Configuration
            <Sparkles className="h-4 w-4" />
          </a>
        </div>
      </section>
    </article>
  );
}

