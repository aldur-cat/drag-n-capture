import Vue from 'vue'
import App from './App.vue'

import '@/style/common.scss'
import 'jquery'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
