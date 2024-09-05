import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import envCompatible from "vite-plugin-env-compatible";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
