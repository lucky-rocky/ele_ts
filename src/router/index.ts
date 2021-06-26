import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/home',
    component: () => import('@/views/Home/index.vue')
  }
]

// 跳转当前路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location: any) {
  return (originalPush as any).call(this, location).catch((err: any) => err)
}

const router = new VueRouter({
  routes
})

export default router
