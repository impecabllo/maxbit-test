import path from "path"
import commonjs from "vite-plugin-commonjs"

import react from "@vitejs/plugin-react"

const config = {
  plugins: [react(), commonjs()],

  resolve: {
    extensions: [".mjs", ".js", "jsx", ".mts", ".ts", ".tsx", ".json", ".scss", ".css", ".module.scss"],
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@state": path.resolve(__dirname, "./src/state"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
    },
  },

  define: {
    global: {},
  },
}

export default config
