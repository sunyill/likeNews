<template>
  <!-- 属性gutter 表示每一栏之间的间隔 -->
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="6" class="left-header">
      <i class="el-icon-s-unfold"></i>
      <span>ElementUi工作室</span>
    </el-col>

    <el-col :span="4" class="right-header">
      <img src="../../assets/img/avatar.jpg" alt />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          我是56123
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
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
