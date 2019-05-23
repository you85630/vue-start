import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookies'
Vue.use(Router)

// keepAlive: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('views/Home')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let login = JSON.parse(VueCookie.get('token'))
  if (to.meta.requireAuth) {
    if (!login) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router
