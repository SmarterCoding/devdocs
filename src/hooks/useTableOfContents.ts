import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function useTableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2[id], h3[id]"));
    const headingData = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: parseInt(el.tagName[1], 10),
    }));
    setHeadings(headingData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { headings, activeId };
}
