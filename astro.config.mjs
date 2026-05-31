// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Michelprogram.github.io",
  base: "/cat-sitting/",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
