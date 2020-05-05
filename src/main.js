import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible'
import './assets/scss/base.css'
import './assets/scss/iconfont.css'
import api from './api/index'

import { Toast, Dialog } from 'vant'
import 'vant/lib/toast/style'
import 'vant/lib/dialog/style'
Vue.use(Toast)
Vue.prototype.$api = api
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
