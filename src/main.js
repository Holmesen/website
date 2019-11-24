import Vue from 'vue'
import App from './App'
import router from './router'
// import echarts from 'echarts'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/el-global.css'
import 'imagehover.css/css/imagehover.min.css'
import './assets/css/iconfont/iconfont.css'

Vue.config.productionTip = false

// Vue.use(echarts)
Vue.use(elementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
