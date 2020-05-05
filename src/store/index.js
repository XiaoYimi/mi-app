import Vue from 'vue'
import Vuex from 'vuex'

import addressStore from './modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'xiaoyimi',
      age: 25,
      gander: 2,
      token: '46gh4ert1g5b34rs8h46ty1n6td.h46tr1srth45rt'
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    address: addressStore
  }
})
