// @ts-nocheck
import terser from "@rollup/plugin-terser"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

import config from "./vite.config.base"

export default defineConfig({
  ...config,
  plugins: [
    ...config.plugins,
    createHtmlPlugin({
      template: "src/templates/index.html",
    }),
    splitVendorChunkPlugin(),
  ],

  build: {
    target: "es2020",
    minify: "terser",
    rollupOptions: {
      plugins: [
        terser({
          maxWorkers: 4,
          ecma: 2020,
          module: true,
        }),
      ],
      output: {
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
      },
    },

    outDir: "dist",
    cssCodeSplit: true,
    assetsDir: "assets",
  },

  define: {
    ...config.define,
  },
})
