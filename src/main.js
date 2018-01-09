import Vue from 'vue'
import App from './App'
import router from './router'
import lodash from 'lodash'
import vueLodash from 'vue-lodash'

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(vueSwiper)
Vue.use(vueLodash, lodash)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
