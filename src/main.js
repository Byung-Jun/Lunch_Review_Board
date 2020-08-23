// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { rtdbPlugin } from 'vuefire'
import vuex from "vuex"
import '../static/reset.css'
import BootstrapVue from "bootstrap-vue"
import VueAnalytics from "vue-analytics"

// https://bootstrap-vue.js.org/
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(VueAnalytics,{
  id: 'UA-154243090-1',
  router,
  autoTracking : {
    pageviewOnLoad:false,
    screenview : true
  }
})

Vue.use(rtdbPlugin)
Vue.use(vuex)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  components: { App },
  template: '<App/>'
})
