import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Base path for GitHub Pages: https://<user>.github.io/Landing-Glass-v2/
// Override at build time with VITE_BASE_PATH=/your-repo/ if you rename the repo.
const base = process.env.VITE_BASE_PATH ?? "/Landing-Glass-v2/";

export default defineConfig({
  base,
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    host: true,
    port: 8080,
    strictPort: false,
  },
});