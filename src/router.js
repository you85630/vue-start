import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookies'
Vue.use(Router)

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
  let login = VueCookie.get('token')
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
