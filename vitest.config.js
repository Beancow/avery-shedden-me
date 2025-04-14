import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        rootDir: ".",
        modulesDir: "./node_modules",
        telemetry: true,
        modules: [
          "@nuxt/ui",
          "@nuxt/eslint",
          "@nuxt/icon",
          "@nuxt/image",
          "@nuxt/fonts",
          "@nuxt/test-utils/module",
        ],
        css: ["~/assets/css/main.css"],
        future: {
          compatibilityVersion: 4,
        },
        domEnvironment: "happy-dom", // 'happy-dom' (default) or 'jsdom'
        overrides: {
          // other Nuxt config you want to pass
        },
      },
    },
    mock: {
      intersectionObserver: true,
      indexedDb: true,
      localStorage: true,
      sessionStorage: true,
    },
    include: [
      "tests/**/*.spec.js",
      "tests/**/*.spec.ts",
      "tests/**/*.test.js",
      "tests/**/*.test.ts",
    ],
    exclude: ["tests/fixtures/**", "tests/__mocks__/**"],
  },
});
