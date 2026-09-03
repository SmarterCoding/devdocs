import CodeBlock from "../../components/docs/CodeBlock";
import Steps from "../../components/docs/Steps";
import Callout from "../../components/docs/Callout";

import {
  ArrowRight,
  Check,
  Cloud,
  Globe,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function Deployment() {
  const deploymentSteps = [
    {
      title: "Set environment variables",
      description:
        "Configure your production environment variables and make sure sensitive values are stored securely.",
    },
    {
      title: "Build your application",
      description:
        "Run the production build command to generate optimized production assets.",
    },
    {
      title: "Upload to hosting",
      description:
        "Deploy your production build to your preferred hosting provider.",
    },
    {
      title: "Verify deployment",
      description:
        "Open your production URL and verify that the application is running correctly.",
    },
  ];

  const hostingProviders = [
    {
      name: "Vercel",
      description:
        "Deploy modern React and Node.js applications with automatic builds and previews.",
      icon: Cloud,
    },
    {
      name: "Netlify",
      description:
        "A simple platform for deploying static sites and modern web applications.",
      icon: Globe,
    },
    {
      name: "AWS",
      description:
        "Use AWS infrastructure when you need flexible and scalable production hosting.",
      icon: Server,
    },
    {
      name: "Google Cloud",
      description:
        "Deploy applications using Google's scalable cloud infrastructure.",
      icon: Cloud,
    },
    {
      name: "Heroku",
      description:
        "Quickly deploy Node.js applications with a straightforward developer workflow.",
      icon: Rocket,
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
            <Rocket className="h-3.5 w-3.5" />
            Production
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Deploy your application
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Take your application from development to production with a
            simple, reliable deployment workflow.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Production ready",
              "Optimized builds",
              "Node.js",
              "Static hosting",
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

      {/* Introduction */}
      <section className="mb-14">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Ready for production
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              A simple workflow from build to deployment
            </p>
          </div>
        </div>

        <p className="text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          Before deploying, make sure your environment is configured correctly,
          your application builds successfully, and your production settings
          are ready. DevDocs can be deployed to any platform that supports
          Node.js applications or static sites.
        </p>
      </section>

      {/* Build */}
      <section id="build" className="mb-14 scroll-mt-24">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <Terminal className="h-4.5 w-4.5" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Build
          </h2>
        </div>

        <p className="mb-5 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          Create an optimized production build before uploading your
          application to your hosting provider.
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                Terminal
              </span>
            </div>

            <span className="text-xs text-slate-400">production</span>
          </div>

          <CodeBlock language="bash" code="npm run build" />
        </div>
      </section>

      {/* Deployment Steps */}
      <section id="deploy-steps" className="mb-14 scroll-mt-24">
        <div className="mb-5">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Rocket className="h-3.5 w-3.5" />
            Workflow
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Deployment steps
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Follow these steps to move your application into production.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 dark:border-slate-800 dark:bg-slate-950">
          <Steps steps={deploymentSteps} />
        </div>
      </section>

      {/* Environment */}
      <section className="mb-14">
        <Callout type="info" title="Production environment">
          Make sure production environment variables are configured on your
          hosting provider. Never expose private credentials or secrets in
          client-side code or commit them to your repository.
        </Callout>
      </section>

      {/* Hosting */}
      <section id="hosting" className="mb-14 scroll-mt-24">
        <div className="mb-7">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Globe className="h-3.5 w-3.5" />
            Hosting
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hosting providers
          </h2>

          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Choose the hosting platform that best fits your application's
            architecture and deployment requirements.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {hostingProviders.map((provider) => {
            const Icon = provider.icon;

            return (
              <div
                key={provider.name}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-indigo-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:bg-slate-900 dark:text-slate-300 dark:group-hover:bg-indigo-950/50 dark:group-hover:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {provider.name}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {provider.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Production Checklist */}
      <section className="mb-14">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900 dark:text-white">
                  Production checklist
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Check these items before going live.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 p-6 sm:grid-cols-2">
            {[
              "Environment variables configured",
              "Production build completed",
              "Database connection verified",
              "Application URL configured",
              "Error handling tested",
              "Production deployment verified",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>

                {item}
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

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              <Rocket className="h-4 w-4" />
              Ready to ship
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Your application is ready for production.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Complete the checklist, deploy your build, and verify your
              production environment.
            </p>
          </div>

          <a
            href="/docs/configuration"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Configuration
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <div className="h-8" />
    </article>
  );
}