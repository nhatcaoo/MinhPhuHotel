import Vue from 'vue'
import Vuex from 'vuex'

import CommonModule from './modules/common/index'
import AuthModule from './modules/auth/index'
import UserModule from './modules/user/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    CommonModule,
    AuthModule,
    UserModule,
  }
})

export default store
