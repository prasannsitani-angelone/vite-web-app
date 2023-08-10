import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@components": "/src/components"
    }
  }
})
