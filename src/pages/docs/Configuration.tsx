import CodeBlock from "../../components/docs/CodeBlock";
import Callout from "../../components/docs/Callout";

import {
  Check,
  Code2,
  FileCog,
  KeyRound,
  Settings2,
  ShieldCheck,
  Server,
  Sparkles,
} from "lucide-react";

export default function Configuration() {
  const options = [
    {
      name: "apiKey",
      type: "string",
      description: "Your API key used for authentication.",
      icon: KeyRound,
    },
    {
      name: "environment",
      type: "string",
      description: "Application environment: development, staging, or production.",
      icon: Settings2,
    },
    {
      name: "features.auth",
      type: "boolean",
      description: "Enable or disable authentication features.",
      icon: ShieldCheck,
    },
    {
      name: "features.realtime",
      type: "boolean",
      description: "Enable real-time updates.",
      icon: Sparkles,
    },
    {
      name: "server.port",
      type: "number",
      description: "Port used by the development server.",
      icon: Server,
    },
  ];

  return (
    <article className="mx-auto w-full max-w-4xl">
      {/* Hero */}
      <header className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/70 p-8 shadow-sm sm:p-10 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Settings2 className="h-3.5 w-3.5" />
            Configuration
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Configure DevDocs
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Customize DevDocs for your project using a configuration file or
            environment variables.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Simple configuration",
              "Environment variables",
              "Feature flags",
              "Production ready",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Configuration overview */}
      <section className="mb-14">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            <FileCog className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Configuration options
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Configure your application the way you need it
            </p>
          </div>
        </div>

        <p className="text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          DevDocs supports both a JavaScript configuration file and environment
          variables. Use the configuration file for application behavior and
          environment variables for values that change between environments.
        </p>
      </section>

      {/* Configuration file */}
      <section id="config-file" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <Code2 className="h-3.5 w-3.5" />
            Configuration file
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Configure with JavaScript
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Create a <code className="rounded-md bg-slate-100 px-1.5 py-0.5 text-sm text-indigo-600 dark:bg-slate-900 dark:text-indigo-400">devdocs.config.js</code>{" "}
            file in your project root.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="javascript"
            fileName="devdocs.config.js"
            code={`module.exports = {
  apiKey: process.env.DEVDOCS_API_KEY,
  environment: process.env.NODE_ENV || 'development',

  features: {
    auth: true,
    realtime: true,
    logging: 'info',
  },

  server: {
    port: 3000,
  },
};`}
          />
        </div>
      </section>

      {/* Environment variables */}
      <section
        id="environment-variables"
        className="mb-14 scroll-mt-24"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <KeyRound className="h-3.5 w-3.5" />
            Environment
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Environment variables
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            You can also configure DevDocs through environment variables.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="bash"
            code={`DEVDOCS_API_KEY=your-api-key
DEVDOCS_ENV=production
DEVDOCS_PORT=8080`}
          />
        </div>
      </section>

      {/* Configuration precedence */}
      <section className="mb-14">
        <Callout type="info" title="Environment-specific configuration">
          Environment variables are useful when the same application runs in
          development, staging, and production. Keep sensitive values such as
          API keys outside your source code.
        </Callout>
      </section>

      {/* Options */}
      <section id="options" className="mb-14 scroll-mt-24">
        <div className="mb-7">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Settings2 className="h-3.5 w-3.5" />
            Reference
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Configuration options
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Available configuration properties for your DevDocs project.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="hidden grid-cols-[1.2fr_100px_2fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:grid dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
            <span>Option</span>
            <span>Type</span>
            <span>Description</span>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {options.map((option) => {
              const Icon = option.icon;

              return (
                <div
                  key={option.name}
                  className="grid gap-4 px-5 py-5 transition-colors hover:bg-slate-50/70 sm:grid-cols-[1.2fr_100px_2fr] sm:items-center dark:hover:bg-slate-900/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                      <Icon className="h-4 w-4" />
                    </div>

                    <code className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {option.name}
                    </code>
                  </div>

                  <div>
                    <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                      {option.type}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="mb-14">
        <Callout type="tip" title="Keep secrets secure">
          Use environment variables for sensitive values such as API keys,
          access tokens, and credentials. Do not commit secrets to your
          repository.
        </Callout>
      </section>

      {/* Final card */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-7 sm:p-9 dark:border-indigo-900/50 dark:from-indigo-950/40 dark:via-slate-950 dark:to-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
            <Check className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Configuration complete
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Your DevDocs configuration is ready. Continue with the
              deployment guide when you're ready to move your application to
              production.
            </p>

            <a
              href="/docs/deployment"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Continue to Deployment
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="h-8" />
    </article>
  );
}