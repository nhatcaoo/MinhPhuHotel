import axios from 'axios'
import LocalStorage from '@/utils/LocalStorage'
import store from '@/store/index'
import CONSTANT from '@/config/Constant'

// create an axios instance
const http = axios.create({
})
export default http

http.interceptors.request.use(
  async config => {
    // Do something before request is sent
    let token = LocalStorage.getToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    if (config.url.indexOf('uploadFile') !== -1) {
      config.headers['accept'] = '*/*'
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  },
  error => {
    console.log(error)
    // Do something with request error
    Promise.resolve(false)
  }
)
http.interceptors.response.use(
  response => {
    var data = response.data
    if (data.status.toLowerCase() === CONSTANT.SUCCESS.toLowerCase()) {
      var storeAction = data.status && data.status.toLowerCase() === CONSTANT.SUCCESS.toLowerCase() ? 'showSuccessMsg' : 'showErrorMsg'
      data && data.message && store.dispatch(storeAction, data.message)
    } else {
      if (data.status.toLowerCase() === CONSTANT.ERROR.toLowerCase()) {
        data && data.message && store.dispatch('showErrorMsg', data.message)
      }
    }
    if(data.data && data.data.size && data.data.totalPages && data.data.totalElements) {
      data.pagination = {
        page: data.data.number + 1,
        size: data.data.size,
        total: data.data.totalPages,
        totalRecords: data.data.totalElements
      }
    }
    return data
  },
  error => {
    // Refresh token
    let rs = error.response
    let message = rs.data && rs.data.message
    if (rs && rs.status === CONSTANT.UNAUTHORIZED_CODE) {
      store.dispatch('logOut')
    } else if (rs && rs.status === CONSTANT.INVALID_TOKEN) {
      store.dispatch('logOut')
    } else if (rs && rs.status === CONSTANT.INVALID_ROLE) {
      store.dispatch('showErrorMsg', 'You have not permission')
    }
    rs.data.message &&
      store.dispatch('showErrorMsg', rs.data.message)
    return Promise.resolve(false)
  }
)
