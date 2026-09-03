import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface DocsCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export default function DocsCard({
  title,
  description,
  icon: Icon,
  href,
}: DocsCardProps) {
  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.05] dark:hover:shadow-black/20"
    >
      {/* Hover glow */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300 dark:group-hover:border-blue-500/20 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400">
            <Icon className="h-5 w-5" />
          </div>

          <ArrowUpRight className="h-4 w-4 text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-700 dark:text-gray-600 dark:group-hover:text-gray-300" />
        </div>

        <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {description}
        </p>

        <div className="mt-6 text-sm font-medium text-blue-600 dark:text-blue-400">
          Explore →
        </div>
      </div>
    </Link>
  );
}

