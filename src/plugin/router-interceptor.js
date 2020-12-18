import router from '@/router'
import LocalStorage from '@/utils/LocalStorage'
const RouterInterceptor = {
  async install () {
    router.beforeEach(async (to, from, next) => {
      // Hide Popup
      // Check page is required authenticated
      let routeRole = to.matched.find(record => record.meta.requiresAuth)
      if (to.matched.some(record => record.meta.requiresAuth)) {
        let token = LocalStorage.getToken()
        // If token is empty, redirect to login page
        if (!token) {
          next({
            name: 'Login',
            query: { nextUrl: to.fullPath }
          })
        } else { // Next if token exist
          next()
        }
      } else { // Page is not required authenticated
        next()
      }
    })
  }
}
export default RouterInterceptor
