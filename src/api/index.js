import store from '../store/index'

const APIUser = {
  // 检测用户是否登录(token 是否有效)
  getToken () {
    // 请求验证 token, 返回 boolean
    const res = store.state.user && store.state.user.token
    console.log(res) // undefined | value
    return res
  }

}

const api = {
  ...APIUser
}

export default api
