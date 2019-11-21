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
      path: '*', // 通配符
      component: () => import('@/views/UnDefined')
    },
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
      }, {// 内容列表
        path: '/home/contentList',
        name: 'ContentList',
        component: () => import(/* webpackChunkName:'ContentList' */ './views/Articles')
      },
      { // 发布文章
        path: '/home/publish',
        name: 'Publish',
        component: () => import(/* webpackChunk:'Publish' */ './views/Publish')
      },
      { // 编辑文章 传递id值
        path: '/home/publish/:articleId',
        name: 'Edit',
        component: () => import(/* webpackChunk:'Edit' */ './views/Publish')
      },
      { // 个人信息
        path: '/home/account',
        name: 'Account',
        component: () => import(/* webpackChunk:'Account' */ './views/Account')
      },
      { // 粉丝列表
        path: '/home/fansdata',
        name: 'FansData',
        component: () => import(/* webpackChunk:'Account' */ './views/Fans')
      }
      ]
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
