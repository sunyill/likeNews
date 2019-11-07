<template>
  <el-card>
    <el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page="currentPage"
        :total="total"
        @current-change = pageChange
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      pageSize: 10,
      currentPage: 1,
      total: 100
    }
  },
  methods: {
    pageChange (newpage) {
      this.currentPage = newpage
      this.getArticles()
    },
    getArticles () {
      this.$axios({
        url: '/test',
        params: {
          page: this.currentPage,
          per_page: this.pageSize
        }
      })
    }
  },
  created () {
    // 首次加载页面时, 需加载的页码数
    this.getArticles()
  }
}
</script>

<style>
</style>
