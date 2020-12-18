import CONFIG from '@/config/Config'
import { Get, Post } from '@/utils/RequestService'

const apiUrl = CONFIG.API_POINT

var service = {
  getConfig: () => Get(`${apiUrl}/user-admin/system-config`),
  uploadFile: (data) => Post(`${apiUrl}/uploadFile?directory=${data.directory}`, data.formData)
}

export default service
