/**
 * 注册全局统一布局样式
 */
import layoutAside from './home/layout_aside.vue'
import layoutHeader from './home/layout_header.vue'
import breadCrumb from './common/bread_crumb.vue'

// elementUI中导出的一个对象,并提供一个方法 install
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    Vue.component('bread-crumb', breadCrumb) // 注册面包屑组件
  }
}
