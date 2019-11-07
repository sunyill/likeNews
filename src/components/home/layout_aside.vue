<template>
  <div class="layout-aside">
    <div class="login">
      <img src="../../assets/img/home_logo.png" alt />
    </div>
    <el-menu background-color="#bfd5d9" text-color="#fff" active-text-color="#ffd04b" router>
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="content">
        <template slot="title">
          <i class="el-icon-message"></i>内容摘要
        </template>
        <el-menu-item-group>
          <el-menu-item style="color:green" index="/home/publish">发表文章</el-menu-item>
          <el-menu-item style="color:green" index="/home/list">内容列表</el-menu-item>
          <el-menu-item style="color:green" index="/home/material">素材管理</el-menu-item>
          <el-menu-item style="color:green" index="/home/comment">评论列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="fans">
        <template slot="title">
          <i class="el-icon-menu"></i>乐友管理
        </template>
        <el-menu-item-group >
          <el-menu-item style="color:green" index="/home/fansdata">图文数据</el-menu-item>
          <el-menu-item style="color:green" index="/home/fansinfo">乐友概况</el-menu-item>
          <el-menu-item style="color:green" index="/home/fansimg">乐友画像</el-menu-item>
          <el-menu-item style="color:green" index="/home/fanslist">乐友列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/home/account">
        <i class="el-icon-s-tools"></i>
        <span>我的账户</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.layout-aside {
  background: #ff0;
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
