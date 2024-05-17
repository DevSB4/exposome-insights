import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Production
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "https://exposome-insights.onrender.com/",
        changeOrigin: true,
      },
    },
  },
});
