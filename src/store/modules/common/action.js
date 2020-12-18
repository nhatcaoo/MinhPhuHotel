import LocalStorage from '@/utils/LocalStorage'
// import CONSTANT from '@/config/Constant'
import Router from '@/router/index'
import ConfigService from '@/api/ConfigService'

const actions = {
  showSuccessMsg (__, message) {
    this._vm.$notify.success({ message: message, duration: 1800 })
  },
  showErrorMsg (__, message) {
    this._vm.$notify.error({ message: message, duration: 1800 })
  },
  checkLoggedIn (__) {
    return new Promise(resolve => {
      var token = LocalStorage.getToken() || ''
      token ? resolve(true) : (Router.push({ name: 'Login' }), resolve(false))
    })
  },
  uploadFile(_, data) {
    return new Promise(async resolve => {
      var res = await ConfigService.uploadFile(data)
      resolve(res.data)
    })
  }
}

export default { actions }
