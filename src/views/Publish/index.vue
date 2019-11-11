<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">文章发布</template>
    </bread-crumb>
    <el-form label-width="80px" class="publish-form">
      <el-form-item label="标题">
        <el-input style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input placeholder="请输入内容" type="textarea" :rows="4" v-model="textarea"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group>
          <el-radio>单图</el-radio>
          <el-radio>三图</el-radio>
          <el-radio>无图</el-radio>
          <el-radio>自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
        <el-select>
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">发布</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: []
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then((res) => {
        console.log(res.data.channels)
        this.channels = res.data.channels
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
