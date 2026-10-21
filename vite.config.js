import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo name on GitHub Pages: https://USERNAME.github.io/portfolio/
  base: "/portfolio/",
});
