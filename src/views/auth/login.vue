<template>
  <form class="login-form" @submit.prevent="submit()" :class="{'loading' : loading}">
    <div class="box-form-login">
      <div class="inner-form-login">
        <a href="#" class="logo text-center">
          <img src="/images/logo.jpg" alt="Best Life">
        </a>
        <div class="login-form-inner">
          <h2>Xin chào!</h2>
          <h6>Chào mừng bạn đến với <h7>Minh Phú Diamond Place</h7></h6>
          <div class="field">
            <input
              id="username"
              name="username"
              v-model="loginForm.username"
              type="text"
              maxlength="50"
              placeholder="Username"
              required
            >
          </div>
          <div class="field">
            <input
              id="password"
              name="password"
              v-model="loginForm.password"
              placeholder="Password"
              maxlength="40"
              type="password"
              required
            >
          </div>
          <div class="field">
            <button class="btn btn-submit">Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

import Config from '@/config/Config'
import { Message, MessageBox } from 'element-ui'
import Constant from '@/config/Constant'
import Router from 'vue-router'
import router from '@/router'
import CONSTANT from '@/config/Constant'
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loading: false,
      pwdType: 'password',
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    routes () {
      return this.$store.getters.routes
    },
    filterredRoutes () {
      return this.routes.filter(temp => {
        return !temp.hidden && temp.children
      })
    }
  },
  mounted() {
    this.isLoggedIn && this.$router.push({ name: 'Overview' })

  },
  methods: {
    async handleAfterLogin (result) {
      let user = await this.$store.dispatch('getUserInfo')
      let role = user.data.user.role.name
      if (!result) return
      else {
        if (role === 'System Admin') {
          console.log(1121)
          this.$router.push({ name: 'Overview' })
        } else if (role === 'Branch') {
          this.$router.push({ name: 'Employee' })
        } else if (role === 'Employee') {
          this.$router.push({ path: '/investor' })
        }
      }
    },
    async submit () {
      this.loading = true
      await this.$store.dispatch('login', this.loginForm).then(rs => {
        if (rs.status.toLowerCase() === CONSTANT.SUCCESS.toLowerCase()) {
          this.handleAfterLogin(rs)
        }
      })
      this.loading = false
    },
  }
}
</script>
