import Home from '../../views/tabbar/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('../../views/tabbar/Classify.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../../views/tabbar/Cart.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../../views/tabbar/Me.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../../views/About.vue')
  }
]
