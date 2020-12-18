import LocalStorage from '@/utils/LocalStorage'
import CONSTANT from '@/config/Constant'

var state = {
  resetToken: '',
  isLoggedIn: LocalStorage.getItem(CONSTANT.IS_LOGGED) || !1,
  jwt: LocalStorage.getToken() || null,
  user: {}
}

var getters = {
  resetToken: state => state.resetToken,
  isLoggedIn: state => state.isLoggedIn,
  jwt: state => state.jwt,
  user: state => state.user
}

var mutations = {
  SET_RESET_TOKEN: (state, data) => { state.resetToken = data },
  SET_LOGGED_IN: (state, isLoggedIn) => { state.isLoggedIn = isLoggedIn },
  SET_JWT: (state, jwt) => { state.jwt = jwt },
  SET_USER: (state, data) => { state.user = data }
}

export default { state, getters, mutations }
