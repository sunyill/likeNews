import axios from 'axios'
/**
 * 封装axios拦截器
 */
// 配置axios的默认url
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 在发起请求时 做的一些处理
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 从localstorage获取数据
  let userinfo = window.localStorage.getItem('user-info')
  let token = userinfo ? JSON.parse(userinfo).token : null
  // 直接将token注册到请求参数中
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 从response.data取数据
  return response.data ? response.data : {}
}, function (error) {
  // 响应的错误数据做的处理
  return Promise.reject(error)
})
export default axios
