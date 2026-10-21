import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Lazy initializer: read the saved choice once, on first render.
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") === "dark"; }
    catch { return false; }
  });

  // Synchronize React state with the outside world: the <html> attribute and storage.
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); }
    catch { /* Theme still works when storage is unavailable. */ }
  }, [dark]);

  return (
    <button aria-pressed={dark} onClick={() => setDark((d) => !d)}>
      Dark theme
    </button>
  );
}
