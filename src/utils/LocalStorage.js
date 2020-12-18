import Vue from 'vue'
import CONSTANT from '@/config/Constant'
export default new Vue({
  methods: {
    getItem (name) {
      return localStorage.getItem(name)
    },
    setItem (name, value) {
      return localStorage.setItem(name, value)
    },
    removeItem (name) {
      return localStorage.removeItem(name)
    },
    getToken () {
      return localStorage.getItem(CONSTANT.JWT)
    },
    setToken (token) {
      return localStorage.setItem(CONSTANT.JWT, token)
    },
    removeToken () {
      return this.removeItem(CONSTANT.JWT)
    },
    removeRemember () {
      return this.removeItem(CONSTANT.REMEMBER)
    }
  }
})
