import router from '../../router'
// 路由首页, 进行鉴权
router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/home')) {
    // 从内存中取token
    var result = window.localStorage.getItem('user-info')

    if (result) {
      // 转换为json对象
      var userInfo = JSON.parse(result)
      // 满足token存在情况
      if (userInfo && userInfo.token) {
        next()
      } else {
        next('/login')
      }
    } else {
      next('/login')
    }
  } else { // 不是以home页进行登录查看, 直接放行
    next()
  }
})
export default router
