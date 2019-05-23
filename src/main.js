import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store/index.js'
// 全局事件
import utils from 'assets/js/utils.js'
// 全局引用自定义模板
import vueModules from 'components/common'
// 引入echarts
import echarts from 'echarts'
// 引入存储组件
import VueCookies from 'vue-cookies'
// 引入UI
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// 全局使用
Vue.prototype.$echarts = echarts
Vue.prototype.utils = utils
Vue.prototype.VueCookie = VueCookies

// 全局使用
Vue.use(iView)
Vue.use(vueModules)

// 全局加载进度条
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
