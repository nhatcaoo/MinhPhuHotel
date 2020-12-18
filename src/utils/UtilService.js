import Vue from 'vue'
export default new Vue({
  methods: {
    checkRole (user, route) {
      if (!route.meta || !route.meta.requiresAuth || !route.meta.roles || !route.meta.roles.length){
        return true
      } else {
        return this.isUserHasRole(user, route.meta.roles)
      }
    },
    isUserHasRole (user, roles) {
      if (!user || !user.role) return true
      const isRoleInRoute = (roles.indexOf(user.role.name) >=0)
      return isRoleInRoute
    },
    checkValidateEmail (email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },
    checkValidatePhone (phone) {
      var re = /^[0][3,7,8,9]\(?\d{2}\)?\d{3}?\d{3}$/
      return re.test(phone)
    }
  }
})