<template>
  <div class="layout-aside">
    <div class="login">
      <img src="../../assets/img/home_logo.png" alt />
    </div>
    <el-menu background-color="#bfd5d9" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>内容摘要
        </template>
        <el-menu-item-group>
          <el-menu-item style="color:green" index="1-1">发表文章</el-menu-item>
          <el-menu-item style="color:green" index="1-2">内容列表</el-menu-item>
          <el-menu-item style="color:green" index="1-3">素材管理</el-menu-item>
          <el-menu-item style="color:green" index="1-4">评论列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>乐友管理
        </template>
        <el-menu-item-group >
          <el-menu-item style="color:green" index="1-1">图文数据</el-menu-item>
          <el-menu-item style="color:green" index="1-2">乐友概况</el-menu-item>
          <el-menu-item style="color:green" index="1-3">乐友画像</el-menu-item>
          <el-menu-item style="color:green" index="1-4">乐友列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-s-tools"></i>
        <span>我的账户</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-aside {
  .login {
    text-align: center;
    background-color: #bfd;

    img {
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
  }
}
</style>
