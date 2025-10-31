import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
=======
import { componentTagger } from "lovable-tagger";
>>>>>>> ff1267d232b76d32b947929cb3d37a609241be3b

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // ✅ correct for custom domain (e.g., hariharan.me)
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react()].filter(Boolean),
=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> ff1267d232b76d32b947929cb3d37a609241be3b
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
