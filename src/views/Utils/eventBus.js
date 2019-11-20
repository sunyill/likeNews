import Vue from 'vue'
export default new Vue()
// new Vue() 实例化了一个Vue实例
// a 引入了这个实例
// a. 通过$emit('事件',参数)
// b 引入了这个实例,是同一个实例, 是同一个文件
// b. 通过$on('事件',) 监听事件, 因为a和b使用eventBus 就是同一个vue实例
