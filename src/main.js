// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import PostDetail from './components/PostDetail.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/iletisim', component: Contact},
    {path: '/yazi-detay/:id', component: PostDetail}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router: router,
  template: '<App/>'
})
