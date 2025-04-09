import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import navMenu from './navMenu.js'

const routes = [
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
  ...navMenu.map((item) => ({
    path: item.href,
    name: item.label,
    component: HomeView,
    meta: {
      title: item.label,
      requiresAuth: false,
      description: 'Welcome to `${item.label}` page',
      keywords: 'home, `${item.label}`, vue',
    },
  })),
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
