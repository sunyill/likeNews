<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">文章发布</template>
    </bread-crumb>
    <el-form ref="myForm" :rules="rules" :model="formData" label-width="60px" class="publish-form">
      <el-form-item label="标题" prop="title">
        <el-input style="width:400px" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <quill-editor  style='width:800px;height:400px;margin-bottom:100px' placeholder="请输入内容" v-model="formData.content" type="textarea" :rows="4"></quill-editor>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group prop="formData.cover.type">
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
        <el-button type="primary" @click="publish(false)">发布</el-button>
        <el-button @click="publish(true)">存入草稿</el-button>
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
        title: [
          { required: true, message: '标题不能为空' },
          { min: 5, max: 30, message: '请控制标题字数' }
        ],
        content: [{ required: true, message: '内容不能为空' }],
        channel_id: [{ required: true, message: '频道不能为空' }]
      }
    }
  },
  methods: {
    // 通过文字ID 获取页面内容
    getArticleByID () {
      let { articleId } = this.$route.params
      this.$axios({
        url: `/articles/${articleId}`
      }).then(res => {
        console.log(res.data)
        // 将文章数据给列表formdata
        this.formData = res.data
      })
    },
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
    publish (draft) {
      this.$refs.myForm.validate(isOK => {
        if (isOK) {
          // console.log('ok')
          /**
           * 根据传值的不同, 显示是编辑  还是新增发布
           */
          let { articleId } = this.$route.params
          let method = articleId ? 'put' : 'get'
          let url = articleId ? `/articles/${articleId}` : '/articles'
          this.$axios({
            // url: '/articles',
            // method: 'post',
            url,
            method,
            params: { draft },
            data: this.formData
          }).then(() => {
            this.$router.push('/home/contentList')
          })
        }
      })
    }
  },
  created () {
    this.getChannels()
    let { articleId } = this.$route.params
    // 如果id存在 就认为是新增,  如果不存在就是发布
    articleId && this.getArticleByID()
  }
}
</script>

<style lang='less' scoped>
.publish-form {
  margin-left: 50px;
}
</style>
