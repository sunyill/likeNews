<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">账号信息</template>
    </bread-crumb>
    <!-- 表单 -->
    <el-form ref="myForm" :model="formData" :rules="rules" label-width="100px">
      <el-form-item label="用户名称" prop="name">
        <el-input v-model="formData.name" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="用户简介">
        <el-input style="width:300px" v-model="formData.intro"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱" prop="email">
        <el-input style="width:300px" v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号">
        <el-input style="width:300px" v-model="formData.mobile" disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveUserInfo">保存信息</el-button>
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
      },
      rules: {
        name: [{ required: true, message: '用户名称不能为空' },
          { min: 2, max: 10, message: '用户名称必须控制在2到10个字符' }
        ],
        email: [{
          required: true, message: '邮箱不能为空'
        },
        { pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/, message: '邮箱格式不正确' }
        ]
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
    },
    // 保存用户信息
    saveUserInfo () {
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          this.$axios({
            url: '/user/profile',
            method: 'patch',
            data: this.formData
          }).then(() => {
            this.$message({ message: '用户名保存成功', type: 'success' })
          })
        }
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
