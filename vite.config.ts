import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_b",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  css: {
    postcss: {
     plugins: [tailwindcss()],
    },
   },
})