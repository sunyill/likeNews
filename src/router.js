/*
 * @Description: 配置路由
 * @Author: your name
 * @Date: 2019-09-18 20:06:10
 * @LastEditTime: 2019-09-18 21:09:10
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import Main from './views/Home/main.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // 添加的二级路由Main区域显示界面
      children: [{
        path: '',
        component: Main
      },
      { // 评论列表页面
        path: '/home/comment',
        name: 'Comment',
        component: () => import(/* webpackChunkName: "Comment" */ './views/Comment')
      },
      { // 素材列表
        path: '/home/material',
        name: 'Material',
        component: () => import(/* webpackChunkName:"Material" */ './views/Material')
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
