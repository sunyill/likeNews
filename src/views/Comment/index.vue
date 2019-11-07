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
      <el-table-column label="操作">
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
    <el-row type="flex" justify="center" style="margin:20px 0">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="page.pageSize"
        :total="page.total"
        :current-page="page.currentPage"
        @current-change = changePage
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      }
    }
  },
  methods: {
    // 页面改变事件    页面改变时触发
    changePage (newPage) {
      this.page.currentPage = newPage // 将当前最新的页面赋值给page中的页面
      this.getComment() // 获取当前newPage页面
    },
    closeOrOpen (row) {
      let msg = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您确定要${msg}评论吗?`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: {
            article_id: row.id.toString()
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
      let pageParams = {
        page: this.page.currentPage,
        per_page: this.page.pageSize // 页面参数
      }
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment', // 查询评论相关的数据
          ...pageParams
        }
      }).then(result => {
        console.log(result)
        this.list = result.data.results // 取到列表数据 给 当前的数据对象
        this.page.total = result.data.total_count // 文章评论列表总数 赋值给当前页面总数
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
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
