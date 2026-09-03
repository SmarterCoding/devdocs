import { NavItem, SearchItem } from "../types/docs";

export const navigation: NavItem[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    children: [
      { title: "Overview", slug: "/docs/overview" },
      { title: "Installation", slug: "/docs/installation" },
      { title: "Quick Start", slug: "/docs/quick-start" },
    ],
  },
  {
    title: "Guides",
    slug: "guides",
    children: [
      { title: "Authentication", slug: "/docs/authentication" },
      { title: "Configuration", slug: "/docs/configuration" },
      { title: "Deployment", slug: "/docs/deployment" },
    ],
  },
  {
    title: "API Reference",
    slug: "api-reference",
    children: [
      { title: "Introduction", slug: "/docs/api-introduction" },
      { title: "Endpoints", slug: "/docs/api-endpoints" },
    ],
  },
  {
    title: "Resources",
    slug: "resources",
    children: [{ title: "Changelog", slug: "/docs/changelog" }],
  },
];

export const searchIndex: SearchItem[] = [
  {
    title: "Overview",
    description: "Learn about DevDocs and its features",
    path: "/docs/overview",
    category: "Getting Started",
  },
  {
    title: "Installation",
    description: "Install DevDocs in your project",
    path: "/docs/installation",
    category: "Getting Started",
  },
  {
    title: "Quick Start",
    description: "Get up and running quickly",
    path: "/docs/quick-start",
    category: "Getting Started",
  },
  {
    title: "Authentication",
    description: "Secure your application with authentication",
    path: "/docs/authentication",
    category: "Guides",
  },
  {
    title: "Configuration",
    description: "Configure DevDocs to your needs",
    path: "/docs/configuration",
    category: "Guides",
  },
  {
    title: "API Introduction",
    description: "Introduction to the DevDocs API",
    path: "/docs/api-introduction",
    category: "API Reference",
  },
  {
    title: "API Endpoints",
    description: "Reference for all API endpoints",
    path: "/docs/api-endpoints",
    category: "API Reference",
  },
  {
    title: "Deployment",
    description: "Deploy your application to production",
    path: "/docs/deployment",
    category: "Guides",
  },
  {
    title: "Changelog",
    description: "See what's new in DevDocs",
    path: "/docs/changelog",
    category: "Resources",
  },
];
