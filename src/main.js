import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'
import 'mint-ui/lib/style.css'

Vue.use(VueRouter)
import Mint from 'mint-ui'
Vue.use(Mint)
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
