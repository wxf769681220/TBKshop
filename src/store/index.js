import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  //重载页面时，state 的值从 sessionStorage 中获取
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    goods: {}
  },
  actions,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
