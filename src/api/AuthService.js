
import CONFIG from '@/config/Config'
import { Get, Post, Delete } from '@/utils/RequestService'

var apiUrl = CONFIG.API_POINT
var service = {
  login: data => Post(`${apiUrl}/login`, data),
  getUserInfo: () => Get(`${apiUrl}/get-current-user`)
}

export default service
