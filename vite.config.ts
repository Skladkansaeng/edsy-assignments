import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  root: "",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@sections": resolve(__dirname, "./src/sections"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@pages": resolve(__dirname, "./src/pages"),
    }
  }
});
