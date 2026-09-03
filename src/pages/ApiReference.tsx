import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Package,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";

import DocsCard from "../components/docs/DocsCard";

export default function ApiReference() {
  const endpoints = [
    {
      title: "Introduction",
      description: "API basics, authentication, requests, and responses.",
      icon: Code2,
      href: "/docs/api-introduction",
    },
    {
      title: "Users",
      description: "Create, update, retrieve, and manage users.",
      icon: Users,
      href: "/docs/api-endpoints",
    },
    {
      title: "Products",
      description: "Manage products, inventory, pricing, and details.",
      icon: Package,
      href: "/docs/api-endpoints",
    },
    {
      title: "Orders",
      description: "Create and manage orders throughout their lifecycle.",
      icon: ShoppingCart,
      href: "/docs/api-endpoints",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-white/10">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              </span>

              API v1 is available
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              Build with our
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                powerful API
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Everything you need to integrate our platform into your
              application. Explore endpoints, authentication, resources,
              requests, and responses.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/docs/api-introduction"
                className="group inline-flex items-center gap-2 rounded-lg bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-950/10 transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/docs/api-endpoints"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-white/[0.08]"
              >
                <Code2 className="h-4 w-4" />
                View endpoints
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          {/* Intro */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Zap className="h-5 w-5" />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
              Simple, predictable APIs
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Our REST API is designed to be easy to understand and integrate.
              Use standard HTTP methods and JSON responses to build reliable
              integrations quickly.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["REST", "JSON", "HTTPS", "OAuth 2.0"].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-gray-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-black/20 dark:text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Code Preview */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#0d1117] shadow-xl dark:border-white/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

              <span className="ml-auto font-mono text-xs text-gray-500">
                request.ts
              </span>
            </div>

            <pre className="overflow-x-auto p-5 text-xs leading-6 text-gray-300 sm:text-sm">
              <code>{`const response = await fetch(
  "https://api.example.com/v1/users",
  {
    headers: {
      Authorization:
        "Bearer YOUR_API_KEY",
    },
  }
);

const data = await response.json();`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="border-t border-gray-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Documentation
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              Explore the API
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
              Find the resources and endpoints you need to start building your
              integration.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {endpoints.map((endpoint) => (
              <DocsCard key={endpoint.title} {...endpoint} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gray-950 px-6 py-12 text-center dark:bg-white/[0.06] sm:px-12">
          <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to start building?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-400">
              Follow the quick-start guide and make your first API request in
              minutes.
            </p>

            <Link
              to="/docs/api-introduction"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
            >
              Read the quick start
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

