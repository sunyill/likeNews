import axios from 'axios'
// 获取message
import { Message } from 'element-ui'
// 统一处理大数字
import JSONBig from 'json-bigint'
/**
 * 封装axios拦截器
 */
// 配置axios的默认url
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 大数字做的处理
axios.defaults.transformResponse = [
  function (data) {
    return data ? JSONBig.parse(data) : {}
  }
]
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
  let code = error.response ? error.response.state : ''
  let message = ''
  switch (code) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名用户'
      break
    case 404:
      message = '手机号码有误'
      break
    case 401:
      // 针对token进行处理
      message = 'token未传或过期'
      window.localStorage.clear()
      window.location.hash('/login')
      break
    case 507:
      message = '服务器数据库异常'
      break
    default:
      message = '未知错误'
      break
  }
  Message({ message, type: 'warning' })
  // return Promise.reject(error)
  return new Promise(function () {})
})
export default axios
