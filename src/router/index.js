import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/Game',
    component: () => import('@/views/Game')
  },
  {
    path: '/PhaserInStroe',
    component: () => import('@/views/PhaserInStore')
  }
]

const router = new VueRouter({
  routes
})

export default router
