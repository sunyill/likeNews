<!--
 @Description: 登录页面
 * @Author: your name
 * @Date: 2019-09-18 21:08:00
 * @LastEditTime: 2019-09-18 22:13:51
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="backImg">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- <img src="../../assets/img/logo_index.png" alt="login图片" /> -->
      </div>
      <el-form label-width="70px" :rules="rules" ref="loginForm" :model="formData">
        <el-form-item label="手机号" prop="mobile">
          <el-input placeholder="请输入手机号" v-model="formData.mobile"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input style="width:230px" placeholder="请输入验证码" v-model="formData.code"></el-input>
          <el-button type="primary" style="float:right;width:100px" >发送验证码</el-button>
        </el-form-item>

        <el-form-item  prop="check">
          <el-checkbox v-model="formData.check">我已阅读并同意<span> 用户协议</span>和<span> 隐私条款</span></el-checkbox>
        </el-form-item>
        <el-button type="primary" style="width:100%" @click="loginPass">立即登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { LoginByUser } from '../../Api/login'
export default {
  data () {
    // 定义一个自定义函数
    var checkJudge = function (rule, value, callBack) {
      // value表示校验通过
      if (value) {
        callBack()
      } else {
        callBack(new Error('你必须同意勾选上述协议'))
      }
    }
    return {
      formData: {
        mobile: '13911111112',
        code: '246810',
        check: false
      },
      rules: {
        mobile: [
          {
            required: true, message: '登录手机号不能为空', trigger: 'blur'
          },
          {
            pattern: /^1[3456789]\d{9}$/, message: '手机号格式错误'
          }
        ],
        code: [{
          required: true, message: '验证码不能为空', trigger: 'blur'
        }, {
          pattern: /^\d{6}$/, message: '验证码不能为空'
        }],
        check: [{
          validator: checkJudge
        }]
      }
    }
  },
  methods: {
    loginPass () {
      this.$refs.loginForm.validate(async isOk => {
        if (isOk) {
          // console.log('this is pass homePage')
          // let res = await this.$axios({
          //   url: '/authorizations',
          //   method: 'post',
          //   data: this.formData
          // })
          let res = await LoginByUser(this.formData)

          window.localStorage.setItem('user-info', JSON.stringify(res.data))
          this.$router.push('./home')
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.backImg {
  background-image: url("../../assets/img/log_bg.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 450px;
    img {
      height: 30px;
      width: 200px;
      display: block;
      margin: 10px auto;
    }
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  span{
      font-size: 14px;
      color:blueviolet;
  }
}
</style>
