import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Game
  }
]

const router = new VueRouter({
  routes
})

export default router
