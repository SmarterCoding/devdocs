import CodeBlock from "../../components/docs/CodeBlock";
import Callout from "../../components/docs/Callout";

import {
  AlertCircle,
  ArrowRight,
  Check,
  Clock3,
  Code2,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function ApiIntroduction() {
  const apiFeatures = [
    {
      icon: Zap,
      title: "Fast & reliable",
      description:
        "Build integrations with predictable REST endpoints and consistent responses.",
    },
    {
      icon: ShieldCheck,
      title: "Secure by default",
      description:
        "Authenticate requests using API keys or OAuth bearer tokens.",
    },
    {
      icon: Code2,
      title: "Developer friendly",
      description:
        "Clear JSON responses, standard HTTP status codes, and familiar tooling.",
    },
  ];

  const requestHeaders = [
    {
      name: "Authorization",
      value: "Bearer YOUR_TOKEN",
      description: "Authentication token used to authorize the request.",
    },
    {
      name: "Content-Type",
      value: "application/json",
      description: "Required when sending JSON request bodies.",
    },
  ];

  return (
    <article className="mx-auto w-full max-w-4xl">
      {/* Hero */}
      <header className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/70 p-8 shadow-sm sm:p-10 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
        />

        <div className="relative">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            API Documentation
          </div>

          {/* Title */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            API Introduction
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Learn the fundamentals of the DevDocs API and start building
            integrations in minutes.
          </p>

          {/* Pills */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "REST API",
              "JSON",
              "API Keys",
              "OAuth",
              "HTTP",
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

      {/* Quick overview */}
      <section className="mb-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {apiFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-indigo-900"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
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

      {/* Base URL */}
      <section id="base-url" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            <ArrowRight className="h-3.5 w-3.5" />
            Endpoint
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Base URL
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            All API requests are made through the following base URL.
          </p>
        </div>

        <CodeBlock
          language="text"
          code="https://api.devdocs.example.com/v1"
        />
      </section>

      {/* Authentication */}
      <section id="authentication" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
            <KeyRound className="h-3.5 w-3.5" />
            Authentication
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Authenticate your requests
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Most endpoints require authentication using an API key or OAuth
            bearer token.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="bash"
            code={`curl \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  https://api.devdocs.example.com/v1/users`}
          />
        </div>

        {/* Headers */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Request headers
            </h3>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {requestHeaders.map((header) => (
              <div
                key={header.name}
                className="grid gap-3 px-6 py-5 sm:grid-cols-[180px_1fr]"
              >
                <div>
                  <code className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-indigo-600 dark:bg-slate-900 dark:text-indigo-400">
                    {header.name}
                  </code>
                </div>

                <div>
                  <code className="text-sm text-slate-800 dark:text-slate-200">
                    {header.value}
                  </code>

                  <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {header.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limiting */}
      <section id="rate-limiting" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
            <Clock3 className="h-3.5 w-3.5" />
            Limits
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Rate limiting
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            API requests are limited to{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">
              1,000 requests per hour
            </strong>{" "}
            per API key.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
              <Clock3 className="h-5 w-5" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Monitor your remaining quota
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Check the{" "}
                <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs text-indigo-600 dark:bg-slate-950 dark:text-indigo-400">
                  X-RateLimit-Remaining
                </code>{" "}
                response header to determine how many requests remain in the
                current window.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Errors */}
      <section id="errors" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 dark:bg-red-950/40 dark:text-red-400">
            <AlertCircle className="h-3.5 w-3.5" />
            Errors
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Handling errors
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Errors are returned as JSON with an appropriate HTTP status code
            and a machine-readable error code.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="json"
            code={`{
  "error": {
    "code": "invalid_request",
    "message": "Invalid API key",
    "status": 401
  }
}`}
          />
        </div>

        {/* Status examples */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              code: "400",
              title: "Bad Request",
              text: "Invalid or incomplete request.",
            },
            {
              code: "401",
              title: "Unauthorized",
              text: "Authentication failed or is missing.",
            },
            {
              code: "429",
              title: "Too Many Requests",
              text: "Rate limit has been exceeded.",
            },
          ].map((error) => (
            <div
              key={error.code}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
            >
              <code className="text-lg font-bold text-red-600 dark:text-red-400">
                {error.code}
              </code>

              <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                {error.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {error.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Help */}
      <section className="mb-14">
        <Callout type="info" title="Need help?">
          Explore the{" "}
          <a
            href="/api"
            className="font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            API Reference
          </a>{" "}
          for detailed endpoint documentation, parameters, request examples,
          and response schemas.
        </Callout>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-7 sm:p-9 dark:border-indigo-900/50 dark:from-indigo-950/40 dark:via-slate-950 dark:to-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
              <Code2 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Ready to explore the API?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Continue to the API Reference to discover available endpoints
                and start building your integration.
              </p>

              <a
                href="/api"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Open API Reference
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-8" />
    </article>
  );
}