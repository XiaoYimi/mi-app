import Vue from 'vue'
import VueRouter from 'vue-router'

// 测试
import tabbarRoutes from './modules/tabbar'
import commonRoutes from './modules/common'

Vue.use(VueRouter)

const routes = [
  ...tabbarRoutes,
  ...commonRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
