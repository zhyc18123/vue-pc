import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/common.css'
import 'assets/stylus/index.styl'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
