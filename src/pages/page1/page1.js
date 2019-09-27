import Vue from 'vue'
import App from './page1.vue'
import store from '@/store/'
import router from './router/page1'

import common from '../../common/common'

common(Vue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
