import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  GitCommit,
  Package,
  Sparkles,
  Wrench,
  Bug,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ChangelogPage() {
  const releases = [
    {
      version: "1.0.0",
      date: "January 15, 2024",
      status: "Latest",
      description:
        "The first stable release of DevDocs with the core developer experience ready for production.",
      changes: [
        {
          type: "New",
          icon: Sparkles,
          items: [
            "Initial release with core features",
            "REST and GraphQL API support",
            "Real-time collaboration",
            "Plugin system",
          ],
        },
        {
          type: "Security",
          icon: ShieldCheck,
          items: [
            "JWT authentication",
            "OAuth authentication",
            "API key authentication",
          ],
        },
        {
          type: "Performance",
          icon: Zap,
          items: [
            "Improved API response performance",
            "Optimized documentation search",
          ],
        },
      ],
    },
    {
      version: "0.9.0",
      date: "December 20, 2023",
      status: "Beta",
      description:
        "A major beta release introducing the initial API and documentation experience.",
      changes: [
        {
          type: "New",
          icon: Sparkles,
          items: [
            "Beta release",
            "Basic API endpoints",
            "Documentation site launched",
          ],
        },
        {
          type: "Improved",
          icon: Wrench,
          items: [
            "Improved navigation",
            "Updated documentation layout",
            "Better mobile support",
          ],
        },
      ],
    },
    {
      version: "0.8.0",
      date: "November 12, 2023",
      status: "Release",
      description:
        "Introduced the first developer preview with foundational project features.",
      changes: [
        {
          type: "New",
          icon: Sparkles,
          items: [
            "Initial developer preview",
            "Basic documentation pages",
            "Getting started guide",
          ],
        },
        {
          type: "Fixed",
          icon: Bug,
          items: [
            "Fixed navigation issues",
            "Fixed responsive layout problems",
          ],
        },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/10" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}

        <section className="pt-20 pb-16 text-center sm:pt-24 lg:pt-28">
          <div className="mx-auto max-w-3xl">

            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-gray-600 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-300">
                <GitCommit
                  size={15}
                  className="text-primary-600 dark:text-primary-400"
                />

                Release history
              </div>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              Changelog
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Follow the latest features, improvements, fixes, and changes
              shipped to DevDocs.
            </p>

            {/* Current version */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-400">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                v1.0.0
              </span>

              <span className="text-sm text-gray-500">
                Latest stable release
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* RELEASE SUMMARY */}
        {/* ========================================================= */}

        <section className="mb-20">
          <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-3 dark:border-gray-800 dark:bg-gray-900">

            <div className="border-b border-gray-200 p-6 text-center sm:border-b-0 sm:border-r dark:border-gray-800">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                <Package size={19} />
              </div>

              <div className="text-2xl font-bold text-gray-950 dark:text-white">
                1.0.0
              </div>

              <div className="mt-1 text-sm text-gray-500">
                Current version
              </div>
            </div>

            <div className="border-b border-gray-200 p-6 text-center sm:border-b-0 sm:border-r dark:border-gray-800">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <GitCommit size={19} />
              </div>

              <div className="text-2xl font-bold text-gray-950 dark:text-white">
                3
              </div>

              <div className="mt-1 text-sm text-gray-500">
                Releases
              </div>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <CheckCircle2 size={19} />
              </div>

              <div className="text-2xl font-bold text-gray-950 dark:text-white">
                Stable
              </div>

              <div className="mt-1 text-sm text-gray-500">
                Release status
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* RELEASE TIMELINE */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="relative">

            {/* Timeline line */}
            <div className="absolute left-[15px] top-2 bottom-0 hidden w-px bg-gray-200 md:block dark:bg-gray-800" />

            <div className="space-y-16">
              {releases.map((release, releaseIndex) => (
                <article
                  key={release.version}
                  className="relative md:pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-primary-600 shadow-sm md:flex dark:border-gray-950 dark:bg-primary-500">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  {/* Release Header */}
                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
                            v{release.version}
                          </h2>

                          {releaseIndex === 0 && (
                            <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-400">
                              Latest
                            </span>
                          )}

                          {release.status === "Beta" && (
                            <span className="rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400">
                              Beta
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-sm font-medium text-gray-500">
                          {release.date}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                        <GitCommit size={18} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                      {release.description}
                    </p>

                    {/* Changes */}
                    <div className="mt-8 space-y-8">
                      {release.changes.map((change) => {
                        const Icon = change.icon;

                        return (
                          <div key={change.type}>
                            <div className="mb-4 flex items-center gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                                <Icon size={15} />
                              </div>

                              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                                {change.type}
                              </h3>
                            </div>

                            <div className="space-y-3 pl-10">
                              {change.items.map((item) => (
                                <div
                                  key={item}
                                  className="flex items-start gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />

                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
                      <Link
                        to="/docs"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        View documentation
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CTA */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-14 text-center shadow-2xl sm:px-12">

            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-400">
                <Package size={22} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white">
                Explore the documentation
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
                Learn more about the latest features and start building with
                the newest version.
              </p>

              <div className="mt-8">
                <Link
                  to="/docs"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 font-semibold text-gray-950 transition-colors hover:bg-gray-100"
                >
                  Browse documentation
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

