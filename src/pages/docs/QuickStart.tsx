import CodeBlock from "../../components/docs/CodeBlock";
import Steps from "../../components/docs/Steps";
import Callout from "../../components/docs/Callout";

export default function QuickStart() {
  return (
    <article className="mx-auto w-full max-w-4xl">
      {/* Hero */}
      <header className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/70 px-6 py-10 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 sm:px-10 sm:py-12">
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Getting Started
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Quick Start
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Get up and running with{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              DevDocs
            </span>{" "}
            in under 5 minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              <span>⏱</span>
              5 min setup
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              <span>📦</span>
              npm ready
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              <span>✓</span>
              Beginner friendly
            </div>
          </div>
        </div>
      </header>

      {/* On this page */}
      <nav className="mb-14 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/50">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">
          On this page
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {[
            ["01", "Steps", "#steps"],
            ["02", "Example Project", "#example"],
            ["03", "Configuration", "#configuration"],
            ["04", "Run Development Server", "#run"],
          ].map(([number, title, href]) => (
            <a
              key={href}
              href={href}
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/70"
            >
              <span className="font-mono text-xs text-slate-400">
                {number}
              </span>

              <span className="text-sm font-medium text-slate-700 transition group-hover:text-indigo-600 dark:text-slate-300 dark:group-hover:text-indigo-400">
                {title}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Steps */}
      <section id="steps" className="scroll-mt-24">
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              1
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Steps
            </h2>
          </div>

          <p className="ml-11 text-slate-600 dark:text-slate-400">
            Follow these four steps to get your project up and running.
          </p>
        </div>

        <Steps
          steps={[
            {
              title: "Install dependencies",
              description:
                "Install the DevDocs package using npm or yarn.",
            },
            {
              title: "Configure your project",
              description:
                "Create a configuration file or use environment variables.",
            },
            {
              title: "Start development",
              description:
                "Run the development server and start building.",
            },
            {
              title: "Deploy your application",
              description:
                "Build for production and deploy to your hosting provider.",
            },
          ]}
        />
      </section>

      {/* Example */}
      <section id="example" className="mt-16 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              2
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Example Project
            </h2>
          </div>

          <p className="ml-11 text-slate-600 dark:text-slate-400">
            Create a new project and install DevDocs using npm.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="bash"
            code={`mkdir my-app
cd my-app
npm init -y
npm install devdocs`}
          />
        </div>
      </section>

      {/* Configuration */}
      <section id="configuration" className="mt-16 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              3
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Configuration
            </h2>
          </div>

          <p className="ml-11 text-slate-600 dark:text-slate-400">
            Create a{" "}
            <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-indigo-600 dark:bg-slate-800 dark:text-indigo-400">
              devdocs.config.js
            </code>{" "}
            file in your project root.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="javascript"
            code={`module.exports = {
  apiKey: process.env.DEVDOCS_API_KEY,
  environment: "development",
  features: {
    auth: true,
    realtime: true,
  },
};`}
          />
        </div>

        <div className="mt-5">
          <Callout
            type="info"
            title="Environment variables"
          >
            Keep your API keys and other secrets in environment variables
            instead of committing them directly to your source code.
          </Callout>
        </div>
      </section>

      {/* Run */}
      <section id="run" className="mt-16 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              4
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Run Development Server
            </h2>
          </div>

          <p className="ml-11 text-slate-600 dark:text-slate-400">
            Start the development server and begin building your application.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="bash"
            code="npx devdocs dev"
          />
        </div>
      </section>

      {/* Success */}
      <section className="mt-16">
        <Callout type="success" title="You're ready!">
          Your application is now running with DevDocs. Check the
          documentation for more advanced configuration, authentication,
          deployment, and production setup.
        </Callout>
      </section>

      {/* Bottom navigation */}
      <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Next
          </p>

          <a
            href="/docs/configuration"
            className="mt-1 inline-flex items-center gap-2 font-semibold text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
          >
            Configuration
            <span>→</span>
          </a>
        </div>

        <a
          href="#"
          className="text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </article>
  );
}

