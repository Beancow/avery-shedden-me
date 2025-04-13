import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  dir: {
    pages: './app/pages',
  },
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
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
  },
  compatibilityDate: '2024-11-01',
})
