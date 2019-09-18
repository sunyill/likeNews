/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 20:06:10
 * @LastEditTime: 2019-09-18 20:48:25
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 注册elementUi
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 注册全局组件
Vue.use(ElementUi)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
