<template>
  <!-- 属性gutter 表示每一栏之间的间隔 -->
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="16" class="left-header">
      <i :class="currentClass" @click="OpenOrClose"></i>
      <span>ElementUi工作室</span>
    </el-col>

    <el-col :span="4" class="right-header">
      <img :src="user.photo?user.photo:defaultImg" alt />
      <el-dropdown trigger="click" @command="hanlderInfo">
        <span class="el-dropdown-link">
          {{ user.name }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personInfo">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import Eventbus from '@/views/Utils/eventBus.js'
export default {
  data () {
    return {
      currentClass: 'el-icon-s-fold',
      user: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    // 处理下拉事件
    hanlderInfo (command) {
      if (command === 'personInfo') {
        this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/sunyill/likeNews'
      } else if (command === 'exit') {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    },
    // 获取用户信息
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        this.user = res.data
      })
    },
    // 折叠或者关闭
    OpenOrClose () {
      // 触发了一个事件,打开或者关闭
      Eventbus.$emit('collapseOrClose')
      this.currentClass = this.currentClass === 'el-icon-s-fold' ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  },
  created () {
    this.getUserInfo()
    // 监听获取的别人更新数据的消息
    Eventbus.$on('updateUserInfoSuccess', () => {
      this.getUserInfo() // 重新获取一遍信息
    })
  }
}
</script>

<style lang='less' scoped>
.layout-header {
  padding: 12px 0;
  .left-header {
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
      margin-right: 4px;
    }
  }
  .right-header {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
