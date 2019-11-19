<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">账号信息</template>
    </bread-crumb>
    <!-- 表单 -->
    <el-form ref="myForm" label-width="100px">
      <el-form-item label="用户名称">
        <el-input style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="用户简介">
        <el-input style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号">
        <el-input style="width:300px" disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存信息</el-button>
      </el-form-item>
      <img class="head-img" src="../../assets/img/title_info.png" alt />
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
.head-img {
     position: absolute;
     left: 700px;
     top:150px;
     height: 200px;
     width: 200px;
     border-radius: 50%;
 }
</style>
