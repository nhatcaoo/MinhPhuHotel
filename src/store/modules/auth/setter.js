import LocalStorage from '@/utils/LocalStorage'
import CONSTANT from '@/config/Constant'

var actions = {
  setResetToken ({ commit }, token) {
    commit('SET_RESET_TOKEN', token)
  },
  setJwt ({ commit }, jwt) {
    LocalStorage.setToken(jwt)
    commit('SET_JWT', jwt)
  },
  setUser ({ commit }, data) {
    commit('SET_USER', data)
  },
  // setUserInfo ({ commit }, data) {
  //   commit('SET_USER_INFO', data)
  // },
  setLoggedIn ({ commit }, isLoggedIn) {
    LocalStorage.setItem(CONSTANT.IS_LOGGED, isLoggedIn)
    commit('SET_LOGGED_IN', isLoggedIn)
  },
}

export default { actions }
