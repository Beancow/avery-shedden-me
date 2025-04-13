import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: ['**/node_modules/**', '**/.nuxt/**'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['**/app.vue', '**/app/**/*.{js,ts,vue}'],
      exclude: ['**/node_modules/**', '**/.nuxt/**'],
    },
  },
  resolve: {
    alias: {
      '@': '/app',
      '~': '/app',
      '@@': '/app',
      '~~': '/app',
      '@nuxt': '/nuxt',
      '@nuxt/test-utils': '/nuxt/test-utils',
      '@nuxt/test-utils/dist': '/nuxt/test-utils/dist',
    },
  },
  root: '/app',
})
