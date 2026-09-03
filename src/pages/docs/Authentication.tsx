import CodeBlock from "../../components/docs/CodeBlock";
import Callout from "../../components/docs/Callout";
import Tabs from "../../components/docs/Tabs";

import {
  Check,
  Key,
  Lock,
  ShieldCheck,
  Sparkles,
  User,
  Workflow,
} from "lucide-react";

export default function Authentication() {
  const authenticationMethods = [
    {
      name: "JWT",
      description:
        "Use JSON Web Tokens for stateless authentication between your client and API.",
      icon: Lock,
    },
    {
      name: "OAuth",
      description:
        "Connect popular identity providers such as Google and GitHub.",
      icon: User,
    },
    {
      name: "API Keys",
      description:
        "Authenticate server-to-server requests using secure API keys.",
      icon: Key,
    },
  ];

  const securityChecklist = [
    "Use HTTPS for production traffic",
    "Keep authentication secrets in environment variables",
    "Never expose private API keys in client-side code",
    "Use short-lived tokens where appropriate",
    "Rotate credentials when they may have been compromised",
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
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Security
          </div>

          {/* Title */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Authentication
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Secure your application with flexible authentication options for
            users, APIs, and server-to-server communication.
          </p>

          {/* Feature Pills */}
          <div className="mt-7 flex flex-wrap gap-2">
            {["JWT", "OAuth", "API Keys", "Middleware"].map((item) => (
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

      {/* Overview */}
      <section id="overview" className="mb-14 scroll-mt-24">
        <div className="mb-7 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Authentication overview
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Choose the authentication strategy that fits your application
            </p>
          </div>
        </div>

        <p className="mb-7 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          DevDocs provides built-in authentication support for OAuth, JWT, and
          API keys. You can integrate with your existing user management
          system or use your preferred authentication provider.
        </p>

        {/* Authentication Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {authenticationMethods.map((method) => {
            const Icon = method.icon;

            return (
              <div
                key={method.name}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-indigo-900"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {method.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Setup */}
      <section id="setup" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Workflow className="h-3.5 w-3.5" />
            Setup
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Choose an authentication method
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Configure the authentication strategy that best fits your
            application's architecture.
          </p>
        </div>

        {/* Authentication Tabs */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <Tabs
            tabs={[
              {
                label: "JWT",
                content: (
                  <CodeBlock
                    language="typescript"
                    code={`import { createAuth } from 'devdocs/auth';

const auth = createAuth({
  type: 'jwt',
  secret: process.env.JWT_SECRET,
});`}
                  />
                ),
              },

              {
                label: "OAuth",
                content: (
                  <CodeBlock
                    language="typescript"
                    code={`import { createAuth } from 'devdocs/auth';

const auth = createAuth({
  type: 'oauth',
  providers: ['google', 'github'],
});`}
                  />
                ),
              },

              {
                label: "API Key",
                content: (
                  <CodeBlock
                    language="typescript"
                    code={`import { createAuth } from 'devdocs/auth';

const auth = createAuth({
  type: 'apiKey',
  header: 'X-API-Key',
});`}
                  />
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Middleware */}
      <section id="middleware" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <Lock className="h-3.5 w-3.5" />
            Middleware
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Protect your routes
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Add authentication middleware to routes that require a verified
            user.
          </p>
        </div>

        {/* Middleware Code */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <CodeBlock
            language="typescript"
            code={`import { requireAuth } from 'devdocs/auth/middleware';

app.get('/protected', requireAuth, (req, res) => {
  res.json({ user: req.user });
});`}
          />
        </div>
      </section>

      {/* Security Warning */}
      <section className="mb-14">
        <Callout type="warning" title="Security">
          Always use HTTPS in production and keep authentication secrets
          private. Never place private credentials directly in client-side
          code.
        </Callout>
      </section>

      {/* Security Checklist */}
      <section className="mb-14">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
          {/* Header */}
          <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900 dark:text-white">
                  Security checklist
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Recommended practices for production applications.
                </p>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {securityChecklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-6 py-4"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>

                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-7 sm:p-9 dark:border-indigo-900/50 dark:from-indigo-950/40 dark:via-slate-950 dark:to-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Authentication is ready
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Configure your authentication strategy and protect the routes
              that require authenticated access.
            </p>

            <a
              href="/docs/configuration"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              View Configuration
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-8" />
    </article>
  );
}