import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: "./",
  modulesDir: "./node_modules",
  telemetry: false,

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/test-utils/module",
  ],

  css: ["~/assets/css/main.css"],

  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: "europe-west1",
      },
    },
    compressPublicAssets: false,
    preset: "firebase",

    prerender: {
      routes: ["/"],
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-27",
});
