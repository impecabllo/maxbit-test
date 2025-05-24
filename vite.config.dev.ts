import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

import config from "./vite.config.base"

export default defineConfig({
  ...config,

  plugins: [
    ...config.plugins,
    createHtmlPlugin({
      template: "src/templates/index.html",
    }),
  ],

  build: {
    outDir: "dist",
  },
})
