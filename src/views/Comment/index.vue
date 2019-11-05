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
        <!-- 作用域插槽 -->
        <template slot-scope="obj">
          <el-button type="text">修改评论</el-button>
          <el-button
            type="text"
            @click="closeOrOpen(obj.row)"
            :style="{color:obj.row.comment_status?'#E6A23C' : '#409EFF'}"
          >{{obj.row.comment_status?'关闭评论':"打开评论"}}</el-button>
        </template>
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
    closeOrOpen (row) {
      let msg = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您确定要${msg}评论吗?`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: {
            article_id: row.id
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(() => {
          // 如果走到then, 说明上面已通过
          this.getComment()
        })
      })
    },
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
