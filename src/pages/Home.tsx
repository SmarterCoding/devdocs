import { Link } from 'react-router-dom'
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  Rocket,
  BookOpen,
  Code2,
  Lightbulb,
  Puzzle,
  FileText,
  Terminal,
  Zap,
  Github,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

interface HomeProps {
  onOpenSearch?: () => void
}

export default function Home({ onOpenSearch }: HomeProps) {
  const featuredDocs = [
    {
      title: 'Installation',
      description: 'Set up your project in just a few minutes.',
      path: '/docs/installation',
    },
    {
      title: 'Quick Start',
      description: 'Build your first application with our tools.',
      path: '/docs/quick-start',
    },
    {
      title: 'Authentication',
      description: 'Secure your application with authentication.',
      path: '/docs/authentication',
    },
    {
      title: 'API Reference',
      description: 'Explore endpoints, parameters and responses.',
      path: '/api',
    },
  ]

  const latestUpdates = [
    {
      version: '1.0.0',
      date: 'Jan 15, 2024',
      description: 'Initial release with core features.',
    },
    {
      version: '0.9.0',
      date: 'Dec 20, 2023',
      description: 'Beta release and API improvements.',
    },
    {
      version: '0.8.0',
      date: 'Nov 12, 2023',
      description: 'Added integrations and developer tooling.',
    },
  ]

  const categories = [
    {
      icon: Rocket,
      title: 'Getting Started',
      description: 'Learn the basics and get up and running quickly.',
      href: '/docs',
    },
    {
      icon: BookOpen,
      title: 'Guides',
      description: 'In-depth tutorials and practical guides.',
      href: '/guides',
    },
    {
      icon: Code2,
      title: 'API Reference',
      description: 'Explore endpoints, parameters and API resources.',
      href: '/api',
    },
    {
      icon: Lightbulb,
      title: 'Examples',
      description: 'Real-world examples and implementation patterns.',
      href: '/examples',
    },
    {
      icon: Puzzle,
      title: 'Integrations',
      description: 'Connect your application with other services.',
      href: '/integrations',
    },
    {
      icon: FileText,
      title: 'Changelog',
      description: 'Follow new features, improvements and fixes.',
      href: '/changelog',
    },
  ]

  return (
    <main className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/10" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}

        <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-7 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-300">
                <Sparkles
                  size={15}
                  className="text-primary-600 dark:text-primary-400"
                />

                <span>Developer documentation</span>

                <span className="h-1 w-1 rounded-full bg-gray-400" />

                <span className="text-gray-500 dark:text-gray-400">
                  v1.0.0
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl dark:text-white">
              Build better
              <span className="block bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-primary-400 dark:via-indigo-400 dark:to-purple-400">
                applications faster.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-400">
              Everything you need to build, integrate, and deploy modern
              applications. Explore guides, APIs, examples, and tools built
              for developers.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/docs/quick-start"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gray-950 px-6 font-semibold text-white shadow-lg shadow-gray-950/10 transition-all hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                Get started
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/api"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                Explore API
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Search */}
            <div className="mx-auto mt-12 max-w-2xl">
              <button
                type="button"
                onClick={onOpenSearch}
                className="group flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white p-2 text-left shadow-xl shadow-gray-900/5 transition-all hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20 dark:hover:border-primary-700"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition-colors group-hover:bg-primary-50 group-hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-primary-950 dark:group-hover:text-primary-400">
                  <Search size={20} />
                </div>

                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Search documentation
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    Find guides, APIs, examples and more
                  </div>
                </div>

                <kbd className="mr-1 hidden rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500 sm:block dark:border-gray-700 dark:bg-gray-800">
                  ⌘ K
                </kbd>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* QUICK START */}
        {/* ========================================================= */}

        <section className="pb-20">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-950 shadow-2xl dark:border-gray-800">

            <div className="grid lg:grid-cols-2">

              {/* Text */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-primary-400">
                  <Terminal size={22} />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Start building in minutes.
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-gray-400">
                  Install the package, follow the quick start guide, and
                  start building your next application with a clean,
                  developer-friendly API.
                </p>

                <div className="mt-7">
                  <Link
                    to="/docs/quick-start"
                    className="group inline-flex items-center gap-2 font-semibold text-white"
                  >
                    Read the quick start
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              {/* Code */}
              <div className="border-t border-white/10 bg-black/30 p-5 lg:border-l lg:border-t-0 lg:p-8">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                    <span className="ml-3 text-xs text-gray-500">
                      terminal
                    </span>
                  </div>

                  <pre className="overflow-x-auto p-6 text-sm leading-7">
                    <code>
                      <span className="text-gray-500">$</span>{' '}
                      <span className="text-gray-200">
                        npm install your-package
                      </span>
                      {'\n\n'}
                      <span className="text-gray-500">$</span>{' '}
                      <span className="text-gray-200">
                        npm run dev
                      </span>
                      {'\n\n'}
                      <span className="text-gray-500">✓</span>{' '}
                      <span className="text-gray-300">
                        Ready to build something amazing
                      </span>
                    </code>
                  </pre>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* STATS */}
        {/* ========================================================= */}

        <section className="pb-20">
          <div className="grid grid-cols-2 divide-x divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-4 dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">

            {[
              ['100+', 'Documentation pages'],
              ['50+', 'API endpoints'],
              ['20+', 'Examples'],
              ['1.0.0', 'Latest version'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="px-5 py-7 text-center sm:px-6"
              >
                <div className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
                  {value}
                </div>

                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {label}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* ========================================================= */}
        {/* CATEGORIES */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                Explore
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
                Everything you need
              </h2>

              <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-400">
                Explore our documentation and find exactly what you need to
                build your project.
              </p>
            </div>

            <Link
              to="/docs"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Browse all docs
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon

              return (
                <Link
                  key={category.title}
                  to={category.href}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-700"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all group-hover:bg-primary-600 group-hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-primary-500">
                      <Icon size={21} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-500"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* FEATURED DOCUMENTATION */}
        {/* ========================================================= */}

        <section className="border-t border-gray-200 py-24 dark:border-gray-800">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                <BookOpen size={21} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
                Popular documentation
              </h2>

              <p className="mt-4 max-w-md leading-7 text-gray-600 dark:text-gray-400">
                Start with the most commonly used documentation pages and
                quickly learn how everything works.
              </p>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
              {featuredDocs.map((doc) => (
                <Link
                  key={doc.path}
                  to={doc.path}
                  className="group flex items-center justify-between gap-6 p-5 transition-colors hover:bg-gray-50 sm:p-6 dark:hover:bg-gray-800/50"
                >
                  <div>
                    <h3 className="font-semibold text-gray-950 dark:text-white">
                      {doc.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {doc.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-500"
                  />
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* LATEST UPDATES */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              What's new
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              Latest updates
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {latestUpdates.map((update) => (
              <div
                key={update.version}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700 dark:bg-primary-950 dark:text-primary-400">
                    v{update.version}
                  </span>

                  <span className="text-xs text-gray-500">
                    {update.date}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {update.description}
                </p>

                <Link
                  to="/changelog"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Read changelog
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* FEATURES */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-12 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="grid gap-10 md:grid-cols-2">

              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm dark:bg-gray-800 dark:text-primary-400">
                  <Zap size={21} />
                </div>

                <h2 className="text-2xl font-bold text-gray-950 dark:text-white">
                  Designed for developers
                </h2>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  Simple APIs, clear documentation, practical examples and
                  everything you need to move from idea to production.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Clear documentation',
                  'TypeScript support',
                  'Production ready',
                  'Modern API design',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-primary-600 dark:text-primary-400"
                    />

                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CTA */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-16 text-center shadow-2xl sm:px-12 dark:bg-black">

            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-400">
                <Rocket size={23} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to start building?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
                Follow the quick start guide and build your first application
                today.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/docs/quick-start"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 font-semibold text-gray-950 transition-colors hover:bg-gray-100"
                >
                  Get started
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Github size={17} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

