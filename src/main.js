/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 20:06:10
 * @LastEditTime: 2019-09-18 21:05:35
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 重置全局样式
import './styles/index.less'
// 注册elementUi
import ElementUi from 'element-ui'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// 配置axios的默认url
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 将axios的插件给Vue的原型
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// 注册全局组件
Vue.use(ElementUi)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
