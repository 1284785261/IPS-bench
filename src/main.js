import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Element from 'element-ui'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Element);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
