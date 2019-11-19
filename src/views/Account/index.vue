<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">账号信息</template>
    </bread-crumb>
    <!-- 表单 -->
    <el-form ref="myForm" label-width="100px">
      <el-form-item label="用户名称">
        <el-input v-model="formData.name" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="用户简介">
        <el-input style="width:300px" v-model="formData.intro"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input style="width:300px" v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号">
        <el-input style="width:300px" v-model="formData.mobile" disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存信息</el-button>
      </el-form-item>
      <img class="head-img" :src="formData.photo?formData.photo:imgUrl" alt />
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: require('../../assets/img/title_info.png'),
      formData: {
        name: '',
        intro: '',
        email: '',
        mobile: '',
        photo: ''
      }
    }
  },
  methods: {
    getPersonInfo () {
      this.$axios({
        url: '/user/profile'
      }).then((res) => {
        this.formData = res.data
      })
    }
  },
  created () {
    this.getPersonInfo()
  }
}
</script>

<style lang='less' scoped>
.head-img {
  position: absolute;
  left: 700px;
  top: 150px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
</style>
