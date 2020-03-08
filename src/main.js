import Vue from 'vue'
import App from './App.vue'

import Routes from './routes.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false
//Vue.component('CustCounter', CustCounter)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
