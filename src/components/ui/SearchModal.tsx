import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { searchIndex } from "../../data/documentation";

interface SearchModalProps {
  onClose?: () => void;
}

export default function SearchModal({ onClose }: SearchModalProps = {}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchIndex);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim() === "") {
      setResults(searchIndex);
      return;
    }
    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    );
    setResults(filtered);
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl">
        <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-4">
          <Search size={20} className="text-gray-400" />
          <input
            autoFocus
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 py-4 px-3 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto p-2">
          {results.map((item) => (
            <button
              key={item.path}
              onClick={() => handleSelect(item.path)}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.title}
                </div>
                <span className="text-xs text-gray-500">{item.category}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {item.description}
              </p>
            </button>
          ))}
          {results.length === 0 && (
            <p className="text-center py-8 text-gray-500">No results found</p>
          )}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-2 text-xs text-gray-400">
          Press <kbd>Esc</kbd> to close
        </div>
      </div>
    </div>
  );
}
