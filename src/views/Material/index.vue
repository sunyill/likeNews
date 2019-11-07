<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!--Tabs 标签页 分隔内容上有关联但属于不同类别的数据集合。 -->
    <el-tabs v-model="activeName" @tab-click="tabChange">
      <el-tab-pane label="全部图片" name="all">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" />
            <el-row align="middle" class="operate" type="flex" justify="space-around">
              <i class="el-icon-delete-solid" />
              <i class="el-icon-star-on" />
            </el-row>
          </el-card>
        </div>
        <el-row type="flex" justify="center" style="margin-top:20px">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="page.pageSize"
            :current-page="page.currentPage"
            :total="page.total"
            @current-change="pageChange"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" />
          </el-card>
        </div>
        <el-row type="flex" justify="center" style="margin-top:20px">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="page.pageSize"
            :current-page="page.currentPage"
            :total="page.total"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      activeName: 'all',
      page: {
        pageSize: 15,
        currentPage: 1,
        total: 0
      }
    }
  },
  methods: {
    // 切换分页时触发
    pageChange (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // 切换tab页时触发
    tabChange () {
      this.page.currentPage = 1 // 切换完应该回到第一页
      this.getMaterial()
    },
    // 获取用户图片素材
    getMaterial () {
      let materialParams = {
        page: this.page.currentPage, // 页数
        per_page: this.page.pageSize // 每页数量
      }
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          ...materialParams
        }
      }).then(result => {
        console.log(result.data)
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped>
    .img-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .img-card {
    width: 200px;
    height: 200px;
    margin: 20px 10px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .operate {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 30px;
      width: 100%;
      background-color: #f4f5f6;
      i {
        font-size: 22px;
      }
    }
  }
    }
</style>
