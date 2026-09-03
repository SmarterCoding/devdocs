
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import TableOfContents from "../../components/layout/TableOfContents";

export default function DocsLayout() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-indigo-500/[0.035] to-transparent dark:from-indigo-500/[0.05]"
      />
      <div className="mx-auto flex w-full max-w-[1440px]">

        <aside
          className="
            hidden
            w-64
            shrink-0
            border-r
            border-slate-200
            lg:block
            dark:border-slate-800
          "
        >
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-5 py-8">
            <Sidebar />
          </div>
        </aside>

        {/* ================================================================ */}
        {/* Main Documentation Content                                       */}
        {/* ================================================================ */}

        <main
          id="docs-content"
          className="
            min-w-0
            flex-1
            px-5
            py-10
            sm:px-8
            lg:px-10
            xl:px-12
          "
        >
          <div className="mx-auto w-full max-w-3xl">
            {/* Reading progress / top accent */}
            <div
              aria-hidden="true"
              className="mb-10 h-px w-full bg-gradient-to-r from-indigo-500/40 via-indigo-500/10 to-transparent"
            />

            <Outlet />

            {/* Bottom spacing */}
            <div className="h-24" />
          </div>
        </main>

        {/* ================================================================ */}
        {/* Table of Contents                                                */}
        {/* ================================================================ */}

        <aside
          className="
            hidden
            w-56
            shrink-0
            xl:block
          "
        >
          <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto px-6 py-10">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}

