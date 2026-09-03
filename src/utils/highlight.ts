import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markup";

export function highlightCode(code: string, language: string) {
  return Prism.highlight(
    code,
    Prism.languages[language] || Prism.languages.text,
    language,
  );
}
