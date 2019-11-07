<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!--Tabs 标签页 分隔内容上有关联但属于不同类别的数据集合。 -->
    <el-tabs v-model="activeName" >
      <el-tab-pane label="全部图片" name="first">全部图片</el-tab-pane>
      <el-tab-pane label="收藏图片" name="second">收藏图片</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style>
</style>
