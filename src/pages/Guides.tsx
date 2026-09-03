import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Key,
  Rocket,
  Search,
  Settings,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

export default function Guides() {
  const guides = [
    {
      title: "Authentication",
      description:
        "Learn how to securely authenticate users and protect your application.",
      icon: Key,
      href: "/docs/authentication",
      category: "Security",
      difficulty: "Beginner",
    },
    {
      title: "Configuration",
      description:
        "Configure your application, environment variables, and project settings.",
      icon: Settings,
      href: "/docs/configuration",
      category: "Setup",
      difficulty: "Beginner",
    },
    {
      title: "Deployment",
      description:
        "Deploy your application to production and prepare it for real users.",
      icon: Rocket,
      href: "/docs/deployment",
      category: "Production",
      difficulty: "Intermediate",
    },
    {
      title: "Getting Started",
      description:
        "Build your first application and understand the basic project structure.",
      icon: BookOpen,
      href: "/docs/quick-start",
      category: "Basics",
      difficulty: "Beginner",
    },
    {
      title: "API Integration",
      description:
        "Connect your application to the API and work with requests and responses.",
      icon: Code2,
      href: "/docs/api-integration",
      category: "Development",
      difficulty: "Intermediate",
    },
    {
      title: "Performance",
      description:
        "Learn practical techniques for improving application performance.",
      icon: Zap,
      href: "/docs/performance",
      category: "Optimization",
      difficulty: "Advanced",
    },
  ];

  const popularGuides = [
    {
      title: "Quick Start",
      description: "Build your first project in just a few minutes.",
      href: "/docs/quick-start",
    },
    {
      title: "Authentication",
      description: "Secure your application with authentication.",
      href: "/docs/authentication",
    },
    {
      title: "Configuration",
      description: "Configure your environment and application.",
      href: "/docs/configuration",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/10" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}

        <section className="pt-20 pb-16 sm:pt-24 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-gray-600 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-300">
                <Sparkles
                  size={15}
                  className="text-primary-600 dark:text-primary-400"
                />

                Developer Guides
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              Learn how to build
              <span className="block bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-primary-400 dark:via-indigo-400 dark:to-purple-400">
                with DevDocs.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Practical guides, tutorials, and examples to help you build,
              integrate, configure, and deploy your applications.
            </p>

            {/* Search */}
            <div className="mx-auto mt-9 max-w-2xl">
              <button
                type="button"
                className="group flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white p-2 text-left shadow-xl shadow-gray-900/5 transition-all hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20 dark:hover:border-primary-700"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition-colors group-hover:bg-primary-50 group-hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-primary-950 dark:group-hover:text-primary-400">
                  <Search size={20} />
                </div>

                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Search guides
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    Find tutorials, examples and solutions
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
        {/* FEATURED GUIDE */}
        {/* ========================================================= */}

        <section className="pb-20">
          <Link
            to="/docs/quick-start"
            className="group relative block overflow-hidden rounded-3xl border border-gray-200 bg-gray-950 shadow-2xl transition-all hover:-translate-y-1 dark:border-gray-800"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-2">

              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-14">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-primary-300">
                  <Rocket size={14} />
                  Recommended
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Start building today.
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-gray-400">
                  Follow our quick start guide to install DevDocs, configure
                  your project, and build your first application.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-white">
                  Read the guide
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Code Preview */}
              <div className="flex items-center border-t border-white/10 bg-black/20 p-6 lg:border-l lg:border-t-0 lg:p-10">
                <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
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
                      <span className="text-gray-500">$</span>{" "}
                      <span className="text-gray-200">
                        npm install your-package
                      </span>
                      {"\n\n"}
                      <span className="text-gray-500">$</span>{" "}
                      <span className="text-gray-200">
                        npm run dev
                      </span>
                      {"\n\n"}
                      <span className="text-gray-500">✓</span>{" "}
                      <span className="text-gray-300">
                        Development server started
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ========================================================= */}
        {/* POPULAR GUIDES */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              Popular
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              Start with these guides
            </h2>

            <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-400">
              The most useful guides for getting started with your project.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {popularGuides.map((guide, index) => (
              <Link
                key={guide.href}
                to={guide.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-700"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-500"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                  {guide.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ALL GUIDES */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                Documentation
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
                Explore all guides
              </h2>

              <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-400">
                Choose a guide based on what you are trying to accomplish.
              </p>
            </div>

            <span className="text-sm text-gray-500">
              {guides.length} guides
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => {
              const Icon = guide.icon;

              return (
                <Link
                  key={guide.href}
                  to={guide.href}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-700"
                >
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all group-hover:bg-primary-600 group-hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-primary-500">
                      <Icon size={22} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-500"
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                      {guide.category}
                    </span>

                    <span className="text-xs text-gray-400">
                      {guide.difficulty}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                    {guide.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {guide.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Read guide
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* LEARNING PATH */}
        {/* ========================================================= */}

        <section className="border-t border-gray-200 py-24 dark:border-gray-800">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                <BookOpen size={21} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                A simple learning path
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-gray-600 dark:text-gray-400">
                Follow the recommended order to go from your first project
                to a production-ready application.
              </p>

              <Link
                to="/docs"
                className="group mt-7 inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white"
              >
                View documentation
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Learn the basics",
                  description: "Understand the core concepts and project structure.",
                },
                {
                  number: "02",
                  title: "Build your application",
                  description: "Use guides and examples to build real features.",
                },
                {
                  number: "03",
                  title: "Deploy to production",
                  description: "Configure, optimize and deploy your application.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xs font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-950 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* FEATURES */}
        {/* ========================================================= */}

        <section className="pb-24">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-12 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Terminal,
                  title: "Practical examples",
                  description:
                    "Learn with examples you can adapt directly to your project.",
                },
                {
                  icon: Code2,
                  title: "Developer focused",
                  description:
                    "Clear explanations without unnecessary complexity.",
                },
                {
                  icon: CheckCircle2,
                  title: "Production ready",
                  description:
                    "Learn patterns and practices suitable for real applications.",
                },
              ].map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title}>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm dark:bg-gray-800 dark:text-primary-400">
                      <Icon size={19} />
                    </div>

                    <h3 className="font-semibold text-gray-950 dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
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
                Ready to build something?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
                Start with the documentation and learn everything you need
                to build your next application.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/docs/quick-start"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 font-semibold text-gray-950 transition-colors hover:bg-gray-100"
                >
                  Start learning
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/docs"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Browse documentation
                  <BookOpen size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

