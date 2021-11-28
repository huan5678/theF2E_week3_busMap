import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"), // 根路徑
      "@": path.resolve(__dirname, "src"), // src 路徑
    },
  },
  define: {
    "process.env.NODE_ENV": {},
  }
});
