export default [
  {
    name: 'Tabbar-Home',
    path: '/tabbar/home',
    component: () => import('@/views/tabbar/Home.vue')
  },
  {
    name: 'Tabbar-Classify',
    path: '/tabbar/classify',
    component: () => import('@/views/tabbar/Classify.vue')
  },
  {
    name: 'Tabbar-Cart',
    path: '/tabbar/cart',
    component: () => import('@/views/tabbar/Cart.vue')
  },
  {
    name: 'Tabbar-Me',
    path: '/tabbar/me',
    component: () => import('@/views/tabbar/Me.vue')
  }
]
