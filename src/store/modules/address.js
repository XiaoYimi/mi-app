export default {
  namespaced: true,
  state: {
    index: null, // 防止冲突，自增 1
    list: []
  },
  mutations: {
    add (state, obj) {
      const id = state.index === null ? 0 : state.index + 1
      state.index = id
      obj.id = id
      state.list.push(obj)
    },
    remove (state, id) {
      const list = state.list
      state.list = list.filter(item => item.id !== id)
    },
    modify (state, obj) {
      state.list.map(item => {
        if (obj.id === item.id) { item = obj }
        return item
      })
    }
  },
  actions: {
    exec_add ({ commit }, obj) { commit('add', obj) },
    exec_remove ({ commit }, id) { commit('remove', id) },
    exec_modify ({ commit }, obj) { commit('modify', obj) }
  }
}
