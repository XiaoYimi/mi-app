export default [
  // 个人资料
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/views/user/Profile.vue')
  },

  // 头像修改
  {
    name: 'Profile-Avatar-Edit',
    path: '/profile/avatar/edit',
    component: () => import('@/views/user/avatar/Edit.vue')
  },

  // 昵称修改
  {
    name: 'Profile-Motto-Edit',
    path: '/profile/motto/edit',
    component: () => import('@/views/user/motto/Edit.vue')
  },

  // 收货地址列表
  {
    name: 'Profile-Address',
    path: '/profile/address',
    component: () => import('@/views/user/address/Address.vue')
  },
  // 新增|修改收货地址
  {
    name: 'Profile-Address-Edit',
    path: '/profile/address/edit',
    component: () => import('@/views/user/address/Edit.vue')
  },

  // 修改密码
  {
    name: 'Profile-Password-Edit',
    path: '/profile/password/edit',
    component: () => import('@/views/user/password/Edit.vue')
  },

  // 忘记密码
  {
    name: 'Profile-Password-Forget',
    path: '/profile/password/forget',
    component: () => import('@/views/user/password/forget/Forget.vue')
  },

  // 通过手机校验当前用户
  {
    name: 'Profile-Phone-Input',
    path: '/profile/phone/input',
    component: () => import('@/views/user/phone/Input.vue')
  },
  // 获取短信验证
  {
    name: 'Profile-Phone-SendMSG',
    path: '/profile/phone/sendmsg',
    component: () => import('@/views/user/phone/SendMSG.vue')
  },
  // 验证码验证
  {
    name: 'Profile-Phone-Check',
    path: '/profile/phone/check',
    component: () => import('@/views/user/phone/Check.vue')
  },

  // 重置密码
  {
    name: 'Profile-Password-Reset',
    path: '/profile/password/reset',
    component: () => import('@/views/user/password/forget/Reset.vue')
  },

  // 密保手机
  {
    name: 'Profile-Secret',
    path: '/profile/secret',
    component: () => import('@/views/user/secret/Secret.vue')
  },
  // 密保-账户密码
  {
    name: 'Profile-Secret-Account',
    path: '/profile/secret/account',
    component: () => import('../../views/user/password/Edit.vue')
  },
  // 密保-安全邮箱
  {
    name: 'Profile-Secret-Email',
    path: '/profile/secret/email',
    component: () => import('@/views/user/secret/Email.vue')
  },
  // 密保-安全手机
  {
    name: 'Profile-Secret-Phone',
    path: '/profile/secret/phone',
    component: () => import('@/views/user/secret/Phone.vue')
  },
  // 密保-密保问题
  {
    name: 'Profile-Secret-Problem',
    path: '/profile/secret/problem',
    component: () => import('@/views/user/secret/Problem.vue')
  },
  // 密保-绑定授权
  {
    name: 'Profile-Secret-Userbind',
    path: '/profile/secret/userbind',
    component: () => import('@/views/user/secret/Userbind.vue')
  },
  // 密保-绑定授权解除
  {
    name: 'Profile-Secret-Userbind-Delete',
    path: '/profile/secret/userbind/delete',
    component: () => import('@/views/user/secret/authorize/Delete.vue')
  },
  // 密保-设备管理
  {
    name: 'Profile-Secret-Device',
    path: '/profile/secret/device',
    component: () => import('@/views/user/secret/Device.vue')
  },

  // 第三方用户
  {
    name: 'Profile-Userbind-Signin',
    path: '/profile/userbind',
    component: () => import('@/views/user/userbind/Signin.vue')
  }
]
