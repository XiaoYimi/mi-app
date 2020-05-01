import Vue from 'vue'
import VueRouter from 'vue-router'

import commonRoutes from './modules/common'

Vue.use(VueRouter)

const routes = [
  ...commonRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
