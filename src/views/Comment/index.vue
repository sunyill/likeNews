<template>
    <el-card>
        <!-- 面包屑 -->
        <bread-crumb slot="header">
            <template slot="title">评论列表</template>
        </bread-crumb>

        <!-- 使用table展示页面 -->
        <el-table :data="list" stripe>
            <el-table-column width="500" label="标题" prop="title"></el-table-column>
            <el-table-column label="评论状态" :formatter="formatter" prop="comment_status"></el-table-column>
            <el-table-column label="总评论数" prop="total_comment_count"></el-table-column>
            <el-table-column label="粉丝评论数" prop="fans_comment_count"></el-table-column>
            <el-table-column label="操作" prop="fans_operate">
                <el-button type="text">修改</el-button>
                <el-button type="text">关闭评论</el-button>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(res => {
        console.log(res.data.results)
        this.list = res.data.results
      })
    },
    // row 当条数据对象
    // column 当前列的属性
    // cellValue当前单元格属性值
    // index索引
    // formatter需要返回结果 需要根据当前值 进行返回
    // 类似过滤器
    // formatter 是elementUI提供的 ,过滤器是Vue自身特性
    formatter (row, column, cellValue, index) {
      return cellValue ? '打开' : '关闭'
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>

</style>
