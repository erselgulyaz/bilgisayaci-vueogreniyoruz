// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
// import { store } from './store'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: 'bilgisayaci.org'
  },
  getters: {
    firstMessage: state => {
      return state.message
    }
  },
  mutations: {
    changeMessage: (state, value) => {
      state.message = value
    }
  },
  actions: {
    triggerChangeMessage: (context, value) => {
      context.commit('changeMessage', value)
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>'
})
