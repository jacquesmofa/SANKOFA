import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// BASE_PATH is "/" for the live site and "/preview/" for preview builds (see .github/workflows/deploy.yml).
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  define: { __BASE_PATH__: JSON.stringify(base) },
  plugins: [react()],
  base,
  build: { outDir: "out", sourcemap: false },
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
  server: { port: 3000, host: "0.0.0.0" },
});
