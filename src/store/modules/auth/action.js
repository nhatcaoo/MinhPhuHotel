/* eslint-disable no-unused-expressions */
import API from '@/api/AuthService'
import LocalStorage from '@/utils/LocalStorage'
import router from '@/router'
import store from '@/store'
var actions = {
  login (ctx, loginForm) {
    return new Promise(async resolve => {
      var res = await API.login(loginForm)
      var data = res.data || {}
      data && data.accessToken && ctx.dispatch('setJwt', data.accessToken) && ctx.dispatch('setLoggedIn', true)
      resolve(res)
    })
  },
  getUserInfo (ctx) {
    return new Promise(async resolve => {
      var res = await API.getUserInfo()
      var data = res.data || {}
      ctx.dispatch('setUser', data)
      resolve(res)
    })
  },
  logOut (ctx) {
    // ctx.dispatch('setUser', {}),
    ctx.dispatch('setJwt', null),
    ctx.dispatch('setLoggedIn', false),
    LocalStorage.removeToken(),
    LocalStorage.removeRemember(),
    router.push({ name: 'Login' })
  },
  forceLogout (ctx) {
    ctx.dispatch('setUser', {})
    ctx.dispatch('setJwt', null)
    ctx.dispatch('setLoggedIn', false)
    LocalStorage.removeToken()
    LocalStorage.removeRemember()
    router.push({ name: 'Login' })
  }
}

export default { actions }
