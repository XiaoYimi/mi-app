export default [
  // 根路由重定向
  {
    path: '/',
    name: 'Home',
    redirect: '/tabbar/home'
  },
  // 手机注册|登录
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup.vue')
  }
]
