import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/Home'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/main',
    component: () => import('@/views/main/Main')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router