import Vue from 'vue'
import Vuex from 'vuex'

import addressStore from './modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: true, // 默认 false
    secretState: false, // 默认 false
    user: {
      avatar: 'https://dss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/3c6d55fbb2fb431619c5f9ad2da4462308f7d30b.jpg',
      motto: 'xiaoyimi',
      age: 25,
      gander: 2,
      token: '46gh4ert1g5b34rs8h46ty1n6td.h46tr1srth45rt'
    }
  },
  mutations: {
    open_loginstate (state) { state.loginState = true },
    open_secretstate (state) { state.secretState = true },
    close_loginstate (state) { state.loginState = false },
    close_secretstate (state) { state.secretState = false }
  },
  actions: {
    exec_open_loginstate ({ commit }) { commit('open_loginstate') },
    exec_open_secretstate ({ commit }) { commit('open_secretstate') },
    exec_close_loginstate ({ commit }) { commit('close_loginstate') },
    exec_close_secretstate ({ commit }) { commit('close_secretstate') }
  },
  modules: {
    address: addressStore
  }
})
