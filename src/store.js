/* import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
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
 */