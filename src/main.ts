import Vue from 'vue'
import App from './App.vue'
import '@/utils/rem'
import '@/assets/css/globle.css'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 2000 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
