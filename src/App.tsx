import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu";
import SearchModal from "./components/ui/SearchModal";
import { useDarkMode } from "./hooks/useDarkMode";

/* -------------------------------------------------------------------------- */
/* Lazy-loaded pages                                                         */
/* -------------------------------------------------------------------------- */

const Home = lazy(() => import("./pages/Home"));

const DocsLayout = lazy(() => import("./pages/docs/DocsLayout"));
const Overview = lazy(() => import("./pages/docs/Overview"));
const Installation = lazy(() => import("./pages/docs/Installation"));
const QuickStart = lazy(() => import("./pages/docs/QuickStart"));
const Authentication = lazy(() => import("./pages/docs/Authentication"));
const Configuration = lazy(() => import("./pages/docs/Configuration"));
const ApiIntroduction = lazy(() => import("./pages/docs/ApiIntroduction"));
const ApiEndpoints = lazy(() => import("./pages/docs/ApiEndpoints"));
const Deployment = lazy(() => import("./pages/docs/Deployment"));
const Changelog = lazy(() => import("./pages/docs/Changelog"));

const Guides = lazy(() => import("./pages/Guides"));
const ApiReference = lazy(() => import("./pages/ApiReference"));
const ChangelogPage = lazy(() => import("./pages/ChangelogPage"));

/* -------------------------------------------------------------------------- */
/* Loading screen                                                             */
/* -------------------------------------------------------------------------- */

function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-slate-200 dark:border-slate-800" />

          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-indigo-600 dark:border-t-indigo-400" />
        </div>

        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Loading documentation...
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Scroll to top on route change                                              */
/* -------------------------------------------------------------------------- */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}

/* -------------------------------------------------------------------------- */
/* Animated route container                                                   */
/* -------------------------------------------------------------------------- */

function AppRoutes({
  onOpenSearch,
}: {
  onOpenSearch: () => void;
}) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<Home onOpenSearch={onOpenSearch} />}
        />

        {/* Documentation */}
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Overview />} />

          <Route path="overview" element={<Overview />} />
          <Route path="installation" element={<Installation />} />
          <Route path="quick-start" element={<QuickStart />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="configuration" element={<Configuration />} />

          <Route
            path="api-introduction"
            element={<ApiIntroduction />}
          />

          <Route
            path="api-endpoints"
            element={<ApiEndpoints />}
          />

          <Route path="deployment" element={<Deployment />} />
          <Route path="changelog" element={<Changelog />} />
        </Route>

        {/* Main pages */}
        <Route path="/guides" element={<Guides />} />
        <Route path="/api" element={<ApiReference />} />
        <Route path="/changelog" element={<ChangelogPage />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6">
              <div className="text-center">
                <p className="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  404
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Page not found
                </h1>

                <p className="mx-auto mt-4 max-w-md text-slate-500 dark:text-slate-400">
                  The page you're looking for doesn't exist or may have been
                  moved.
                </p>

                <a
                  href="/"
                  className="mt-7 inline-flex items-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  Back to home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
}

/* -------------------------------------------------------------------------- */
/* Application                                                                */
/* -------------------------------------------------------------------------- */

function App() {
  useDarkMode();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((current) => !current);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  /* ------------------------------------------------------------------------ */
  /* Keyboard shortcuts                                                       */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      /*
       * Command/Ctrl + K
       */
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setIsSearchOpen(true);
        return;
      }

      /*
       * Escape
       */
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
        return;
      }

      /*
       * "/" opens search when the user isn't typing.
       */
      if (
        event.key === "/" &&
        !isTyping &&
        !event.metaKey &&
        !event.ctrlKey
      ) {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * Prevent background scrolling while mobile menu is open.
   */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /*
   * Prevent background scrolling while search modal is open.
   */
  useEffect(() => {
    if (!isSearchOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isSearchOpen]);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Accessibility */}
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          focus:fixed
          focus:left-4
          focus:top-4
          focus:z-[100]
          focus:rounded-lg
          focus:bg-white
          focus:px-4
          focus:py-2
          focus:text-sm
          focus:font-semibold
          focus:text-indigo-600
          focus:shadow-lg
          dark:focus:bg-slate-900
          dark:focus:text-indigo-400
        "
      >
        Skip to content
      </a>

      <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        {/* ---------------------------------------------------------------- */}
        {/* Header                                                            */}
        {/* ---------------------------------------------------------------- */}

        <Header
          onOpenSearch={openSearch}
          onOpenMobileMenu={toggleMobileMenu}
        />

        {/* ---------------------------------------------------------------- */}
        {/* Mobile navigation                                                */}
        {/* ---------------------------------------------------------------- */}

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />

        {/* ---------------------------------------------------------------- */}
        {/* Search                                                            */}
        {/* ---------------------------------------------------------------- */}

        {isSearchOpen && (
          <SearchModal onClose={closeSearch} />
        )}

        {/* ---------------------------------------------------------------- */}
        {/* Main content                                                      */}
        {/* ---------------------------------------------------------------- */}

        <main
          id="main-content"
          className="
            min-h-[calc(100vh-4rem)]
            flex-1
            outline-none
          "
          tabIndex={-1}
        >
          <AppRoutes onOpenSearch={openSearch} />
        </main>

        {/* ---------------------------------------------------------------- */}
        {/* Global background decoration                                     */}
        {/* ---------------------------------------------------------------- */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/[0.025] blur-3xl dark:bg-indigo-500/[0.04]" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

