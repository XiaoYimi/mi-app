import Vue from 'vue'
import VueRouter from 'vue-router'

import commonRoutes from './modules/common'
import tabbarRoutes from './modules/tabbar'
import profileRoutes from './modules/profile'

Vue.use(VueRouter)

const routes = [
  ...commonRoutes,
  ...tabbarRoutes,
  ...profileRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
