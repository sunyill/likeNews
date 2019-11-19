/**
 * 注册全局统一布局样式
 */
import layoutAside from './home/layout_aside.vue'
import layoutHeader from './home/layout_header.vue'
import breadCrumb from './common/bread_crumb.vue'
// 注册富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

import coverdisplay from '../views/Publish/image_display.vue' // 封面页组件
import coverImage from '../views/Publish/cover_image.vue' // 选择图片组件
// elementUI中导出的一个对象,并提供一个方法 install
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    Vue.component('bread-crumb', breadCrumb) // 注册面包屑组件
    Vue.component('quill-editor', quillEditor)
    Vue.component('cover-display', coverdisplay)
    Vue.component('cover-image', coverImage)
  }
}
