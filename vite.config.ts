import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart(),
    netlify(),
    tsConfigPaths(),
    tailwindcss(),
    react(),
  ],
});
