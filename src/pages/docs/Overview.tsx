import Callout from "../../components/docs/Callout";
import CodeBlock from "../../components/docs/CodeBlock";
import DocsCard from "../../components/docs/DocsCard";

import {
  Rocket,
  BookOpen,
  Code,
  Settings,
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Overview() {
  const features = [
    {
      icon: Zap,
      title: "Powerful APIs",
      description:
        "Build faster with flexible REST and GraphQL APIs designed for modern applications.",
    },
    {
      icon: Sparkles,
      title: "Real-time",
      description:
        "Keep your applications synchronized with real-time updates and collaboration.",
    },
    {
      icon: ShieldCheck,
      title: "Secure by default",
      description:
        "Authentication, authorization, and enterprise-grade security are built in.",
    },
  ];

  const quickLinks = [
    {
      icon: Rocket,
      title: "Quick Start",
      description: "Get your first project running in minutes.",
      href: "/docs/quick-start",
    },
    {
      icon: BookOpen,
      title: "Guides",
      description: "Follow practical tutorials and implementation guides.",
      href: "/guides",
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Explore endpoints, parameters, and API examples.",
      href: "/api",
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Customize DevDocs for your application.",
      href: "/docs/configuration",
    },
  ];

  return (
    <article className="mx-auto w-full max-w-5xl">
      {/* Hero */}
      <header className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50 px-6 py-12 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40 sm:px-10 sm:py-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            Getting Started
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Build faster with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              DevDocs
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Everything you need to install, configure, integrate, and deploy
            modern applications with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/docs/quick-start"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <Rocket className="h-4 w-4" />
              Quick Start
            </a>

            <a
              href="/api"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
            >
              <Code className="h-4 w-4" />
              API Reference
            </a>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="introduction" className="scroll-mt-24">
        <div className="mb-7">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Introduction
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Everything you need to get started
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="space-y-5 text-[16px] leading-8 text-slate-600 dark:text-slate-400">
            <p>
              DevDocs is a modern developer documentation platform that helps
              you build, integrate, and deploy applications faster.
            </p>

            <p>
              It provides a comprehensive collection of tools and APIs for
              creating robust applications — from simple websites to complex
              microservices architectures.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Designed for
            </p>

            <div className="mt-4 space-y-3">
              {[
                "Web applications",
                "APIs & integrations",
                "Microservices",
                "Production systems",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                    <Check className="h-3 w-3" />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is DevDocs */}
      <section className="mt-16">
        <Callout type="info" title="What is DevDocs?">
          DevDocs is a modern developer documentation platform that helps you
          build, integrate, and deploy applications faster.
        </Callout>
      </section>

      {/* Features */}
      <section id="key-features" className="mt-16 scroll-mt-24">
        <div className="mb-7">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Why DevDocs
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Key features
          </h2>

          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
            Everything is designed to make development simpler, faster, and
            more reliable.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-indigo-900"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section id="quick-links" className="mt-16 scroll-mt-24">
        <div className="mb-7">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Explore
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Quick links
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Jump directly to the documentation you need.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {quickLinks.map((link) => {
            const Icon = link.icon;

            return (
              <DocsCard
                key={link.title}
                icon={Icon}
                title={link.title}
                description={link.description}
                href={link.href}
              />
            );
          })}
        </div>
      </section>

      {/* Installation */}
      <section id="installation-summary" className="mt-16 scroll-mt-24">
        <div className="mb-7">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Installation
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Install DevDocs
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Choose your preferred package manager to install the latest
            version.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="bash"
            code={`npm install devdocs

# or

yarn add devdocs

# or

pnpm add devdocs`}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 overflow-hidden rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900/60 dark:bg-indigo-950/20 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Ready to build?
            </h2>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Follow the Quick Start guide and have your first project running
              in minutes.
            </p>
          </div>

          <a
            href="/docs/quick-start"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Get Started
            <Rocket className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Back to top */}
      <div className="mt-12 flex justify-end border-t border-slate-200 pt-6 dark:border-slate-800">
        <a
          href="#"
          className="text-sm font-medium text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Back to top ↑
        </a>
      </div>
    </article>
  );
}

