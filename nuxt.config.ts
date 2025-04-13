import { ContentFileType } from '@nuxt/content'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'europe-west1',
      },
    },
    compressPublicAssets: false,
    preset: 'firebase',

    prerender: {
      routes: ['/'],
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/test-utils/module',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
