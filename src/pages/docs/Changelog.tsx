import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Code2,
  GitBranch,
  Package,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Changelog() {
  const releases = [
    {
      version: "1.0.0",
      date: "January 15, 2024",
      label: "Latest",
      description:
        "The first stable release of DevDocs with the core features needed to build and manage modern applications.",
      changes: [
        {
          type: "New",
          icon: Sparkles,
          text: "Initial release with core features",
        },
        {
          type: "New",
          icon: Check,
          text: "Authentication support with JWT, OAuth, and API keys",
        },
        {
          type: "New",
          icon: Code2,
          text: "REST and GraphQL APIs",
        },
        {
          type: "New",
          icon: Zap,
          text: "Real-time collaboration",
        },
        {
          type: "New",
          icon: Package,
          text: "Plugin system",
        },
      ],
    },
    {
      version: "0.9.0",
      date: "December 20, 2023",
      description:
        "The first public beta introduced the initial API foundation and documentation experience.",
      changes: [
        {
          type: "Beta",
          icon: Sparkles,
          text: "Beta release",
        },
        {
          type: "New",
          icon: Code2,
          text: "Basic API endpoints",
        },
        {
          type: "New",
          icon: Package,
          text: "Documentation site launched",
        },
      ],
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
            <GitBranch className="h-3.5 w-3.5" />
            Release history
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Changelog
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Follow the evolution of DevDocs and see what has changed across
            every release.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <Package className="h-3.5 w-3.5" />
              Releases
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <Sparkles className="h-3.5 w-3.5" />
              New features
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <Zap className="h-3.5 w-3.5" />
              Improvements
            </span>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="mb-12">
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            <CalendarDays className="h-5 w-5" />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Stay up to date
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              This page contains the release history for DevDocs, including
              new features, improvements, and important changes.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section aria-label="Release history">
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[15px] top-2 hidden w-px bg-gradient-to-b from-indigo-300 via-slate-200 to-transparent sm:block dark:from-indigo-700 dark:via-slate-800"
          />

          <div className="space-y-12">
            {releases.map((release, releaseIndex) => (
              <article
                key={release.version}
                id={`version-${release.version}`}
                className="relative scroll-mt-24 sm:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-indigo-600 shadow-sm sm:flex dark:border-slate-950 dark:bg-indigo-500">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Release header */}
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        v{release.version}
                      </h2>

                      {release.label && (
                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                          {release.label}
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <CalendarDays className="h-4 w-4" />
                      Released on {release.date}
                    </div>
                  </div>

                  <span className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    <GitBranch className="h-3.5 w-3.5" />
                    release/{release.version}
                  </span>
                </div>

                {/* Release card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {release.description}
                    </p>
                  </div>

                  <div className="divide-y divide-slate-200 dark:divide-slate-800">
                    {release.changes.map((change, index) => {
                      const Icon = change.icon;

                      return (
                        <div
                          key={`${release.version}-${index}`}
                          className="flex items-start gap-4 px-6 py-4 transition-colors hover:bg-slate-50/70 dark:hover:bg-slate-900/40"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                            <Icon className="h-4 w-4" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="mb-1">
                              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                                {change.type}
                              </span>
                            </div>

                            <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                              {change.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Separator */}
                {releaseIndex < releases.length - 1 && (
                  <div className="mt-12 h-px bg-slate-200 sm:hidden dark:bg-slate-800" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-7 sm:p-9 dark:border-indigo-900/50 dark:from-indigo-950/40 dark:via-slate-950 dark:to-slate-950">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"
          />

          <div className="relative">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              <Sparkles className="h-4 w-4" />
              What's next?
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Keep building with DevDocs
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Explore the documentation to learn more about configuration,
              deployment, APIs, and the features available in DevDocs.
            </p>

            <a
              href="/docs/overview"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Explore documentation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="h-8" />
    </article>
  );
}