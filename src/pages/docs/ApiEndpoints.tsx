import CodeBlock from "../../components/docs/CodeBlock";
import Tabs from "../../components/docs/Tabs";

import {
  ArrowRight,
  Box,
  Check,
  ClipboardList,
  Code2,
  Package,
  Plus,
  ShoppingCart,
  Sparkles,
  User,
} from "lucide-react";

export default function ApiEndpoints() {
  const endpointSections = [
    {
      title: "Users",
      description:
        "Manage users and retrieve account information through the Users API.",
      icon: User,
      color: "indigo",
    },
    {
      title: "Products",
      description:
        "Retrieve product information and browse your available catalog.",
      icon: Package,
      color: "violet",
    },
    {
      title: "Orders",
      description:
        "Create and manage orders using the Orders API.",
      icon: ShoppingCart,
      color: "emerald",
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
            API Reference
          </div>

          {/* Title */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            API Endpoints
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Explore available endpoints for users, products, orders, and other
            resources in the DevDocs API.
          </p>

          {/* Pills */}
          <div className="mt-7 flex flex-wrap gap-2">
            {["REST", "GET", "POST", "PUT", "JSON"].map((item) => (
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

      {/* Quick Overview */}
      <section className="mb-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {endpointSections.map((section) => {
            const Icon = section.icon;

            return (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase()}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-indigo-900"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-indigo-500 dark:text-slate-700" />
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {section.description}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Users */}
      <section id="users" className="mb-14 scroll-mt-24">
        <div className="mb-7">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            <User className="h-3.5 w-3.5" />
            Users API
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Users
          </h2>

          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Create, retrieve, update, and manage users through the Users API.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <Tabs
            tabs={[
              {
                label: "List Users",
                content: (
                  <CodeBlock
                    language="bash"
                    code={`GET /v1/users
Authorization: Bearer YOUR_TOKEN`}
                  />
                ),
              },

              {
                label: "Create User",
                content: (
                  <CodeBlock
                    language="http"
                    code={`POST /v1/users
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "John Doe"
}`}
                  />
                ),
              },

              {
                label: "Update User",
                content: (
                  <CodeBlock
                    language="http"
                    code={`PUT /v1/users/:id
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "name": "Jane Doe"
}`}
                  />
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mb-14 scroll-mt-24">
        <div className="mb-7">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:bg-violet-950/40 dark:text-violet-400">
            <Package className="h-3.5 w-3.5" />
            Products API
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Products
          </h2>

          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Retrieve products from your catalog with pagination and filtering
            support.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <CodeBlock
            language="http"
            code={`GET /v1/products?limit=10&page=1
Authorization: Bearer YOUR_TOKEN`}
          />
        </div>

        {/* Endpoint details */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40">
            <code className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              limit
            </code>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Number of products to return.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40">
            <code className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              page
            </code>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Page number for pagination.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40">
            <code className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Authorization
            </code>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Required authentication token.
            </p>
          </div>
        </div>
      </section>

      {/* Orders */}
      <section id="orders" className="mb-14 scroll-mt-24">
        <div className="mb-7">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
            <ShoppingCart className="h-3.5 w-3.5" />
            Orders API
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Orders
          </h2>

          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            Create new orders and manage order information through the Orders
            API.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <CodeBlock
            language="http"
            code={`POST /v1/orders
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "productId": "prod_123",
  "quantity": 2
}`}
          />
        </div>

        {/* Order response */}
        <div className="mt-5">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <Code2 className="h-4 w-4 text-indigo-500" />
            Example response
          </h3>

          <CodeBlock
            language="json"
            code={`{
  "id": "order_123",
  "status": "created",
  "productId": "prod_123",
  "quantity": 2
}`}
          />
        </div>
      </section>

      {/* HTTP Methods */}
      <section className="mb-14">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <ClipboardList className="h-3.5 w-3.5" />
            HTTP methods
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Common operations
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            DevDocs follows standard HTTP methods for interacting with
            resources.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-[100px_1fr] border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <span>Method</span>
            <span>Purpose</span>
          </div>

          {[
            {
              method: "GET",
              purpose: "Retrieve an existing resource.",
            },
            {
              method: "POST",
              purpose: "Create a new resource.",
            },
            {
              method: "PUT",
              purpose: "Update an existing resource.",
            },
            {
              method: "DELETE",
              purpose: "Remove an existing resource.",
            },
          ].map((item, index, items) => (
            <div
              key={item.method}
              className={`grid grid-cols-[100px_1fr] px-5 py-4 ${
                index !== items.length - 1
                  ? "border-b border-slate-200 dark:border-slate-800"
                  : ""
              }`}
            >
              <code className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                {item.method}
              </code>

              <span className="text-sm text-slate-600 dark:text-slate-400">
                {item.purpose}
              </span>
            </div>
          ))}
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
            <Code2 className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Ready to build?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Learn how to authenticate requests and start working with the
              DevDocs API.
            </p>

            <a
              href="/docs/api-introduction"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Read API Introduction
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="h-8" />
    </article>
  );
}