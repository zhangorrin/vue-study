import Vue from 'vue'
import App from './index.vue'
import store from '@/store/'
import router from './router/index'
import common from '../../common/common'

common(Vue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
