import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.{js,ts,vue}'],
    globals: true,
  },
})
