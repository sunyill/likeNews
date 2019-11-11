<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">文章发布</template>
    </bread-crumb>
    <el-form ref="myForm" :rules="rules" :model="formData" label-width="80px" class="publish-form">
      <el-form-item label="标题" prop="title">
        <el-input style="width:400px" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input placeholder="请输入内容" v-model="formData.content" type="textarea" :rows="4"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group prop="formData.cover">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="formData.channel_id">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="publish">发布</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      formData: {
        title: '',
        content: '',
        cover: 0, // 默认无图
        channel_id: null
      },
      rules: {
        title: [{ required: true, message: '标题不能为空' }],
        content: [{ required: true, message: '内容不能为空' }],
        channel_id: [{ required: true, message: '频道不能为空' }]
      }
    }
  },
  methods: {
    // 频道列表
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        // console.log(res.data.channels)
        this.channels = res.data.channels
      })
    },
    // 发布文章
    publish () {
      this.$refs.myForm.validate(isOK => {
        if (isOK) {
          console.log('ok')
        }
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style lang='less' scoped>
.publish-form {
  margin-left: 50px;
}
</style>
