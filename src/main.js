// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.use(VueAwesomeSwiper)

import loading from './assets/image/20150210104951657.gif'

Vue.use(VueLazyload,{
  loading
})

import './mock/MockServer'
import Split from './components/Split/Split.vue'
import '../static/css/swiper.min.css'

Vue.component('Split',Split)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
