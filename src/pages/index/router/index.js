import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue';

// 使用 require.ensure() 按需加载

Vue.use(Router)

export default new Router({
  mode: 'history', //默认路由模式是 hash 模式，会携带 # 标记，与真实 url 不符，可以改为 history 模式
  base: 'index',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
