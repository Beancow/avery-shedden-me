import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        requiresAuth: false,
        description: 'Welcome to the home page',
        keywords: 'home, welcome, vue',
      },
    },
  ],
})

export default router
