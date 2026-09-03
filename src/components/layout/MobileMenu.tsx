import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-[80%] bg-white dark:bg-gray-900 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <Link
                to="/"
                className="flex items-center gap-2 font-bold text-lg"
              >
                <span className="text-2xl">⚡</span>
                <span>DevDocs</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}
