<template>
  <div>
    <!-- <Header/> -->
    <main>
      <div class="left-menu">
        <div class="item logoMenu">
          <img src="/images/logo.svg" alt="">
        </div>
        <div class="item" v-for="(route, index) in filterredRoutes" :key="index">
          <label v-if="route.children.length > 1"  class="dropdown">
            <router-link :to="{ path: route.path }">
               {{route.meta.title}}
            </router-link>
            <input type="checkbox" class="dd-input">
            <ul class="dd-menu list">
              <li v-for="(link, index) in route.children" :key="index">
              <router-link v-if="!link.hidden"
                :to="{ name: link.name }">{{ link.meta.title }}
              </router-link>
            </li>
            </ul>
          </label>
          <label v-else>
            <router-link :to="{ path: route.path }" >{{route.meta.title}}</router-link>
          </label>
        </div>
      </div>
      <DashboardContent/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import DashboardContent from './DashboardContent'
import _ from 'lodash'
import UtilService from '@/utils/UtilService'
export default {
  components: {
    Header,
    Footer,
    DashboardContent
  },
  computed: {
    routes () {
      return this.$router.options.routes
    },
    filterredRoutes () {
      let result = this.routes.filter(temp => {
        if (temp.children && temp.children.length && temp.children.length > 1) {
          temp.children = _.filter(temp.children, item => {
            return !item.hidden
          })
        }
        return !temp.hidden && UtilService.checkRole(this.user, temp)
      })
      // result.map(temp => {
      //   temp.children = temp.children.filter(link => this.isUserHasRole(link) && !link.hidden)
      // })
      return result
    },
    user () {
      return this.$store.getters.user.user
    },
  },
  created () {
    this.$store.dispatch('getUserInfo')
  },
  methods: {
    isUserHasRole (router) {
      if (router.meta && router.meta.roles) {
        return UtilService.isUserHasRole(this.user, router.meta.roles)
      }
      return  true
    }
  }
}
</script>
