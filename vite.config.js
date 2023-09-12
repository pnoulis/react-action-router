import { relative } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      minify: false,
      entry: relative(process.env.PKGDIR, process.env.ENTRY_POINT),
      template: "index.html",
    }),
  ],
});
