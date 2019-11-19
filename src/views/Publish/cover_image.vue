/*
封面图片
 */
 <template>
  <el-card>
    <el-tabs v-model="activeName">
      <el-tab-pane label="素材库" name="material">
        <div class="material-list">
          <el-card class="material-item" v-for="(item) in list" :key="item.id">
            <img :src="item.url" @click="selectImage(item)" />
          </el-card>
        </div>
        <el-row type="flex" style="margin:10px 0" justify="center">
          <el-pagination
            background
            layout="prev,pager,next"
            :total="page.total"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            @current-change="changePage"
          ></el-pagination>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="上传照片" name="upload">上传照片</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'material',
      list: [],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 8
      }
    }
  },
  methods: {
    // 分页切换
    changePage (nowPage) {
      // 将新页码数赋值
      this.page.currentPage = nowPage
      this.getMaterial()
    },
    selectImage (item) {
      // 将url传出去  子==>父 $emit
      this.$emit('selectImage', item.url)
    },
    getMaterial () {
      let pageParams = { page: this.page.currentPage, per_page: this.page.pageSize }
      this.$axios({
        url: '/user/images',
        params: { collect: false, ...pageParams }
      }).then((res) => {
        console.log(res)
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

 <style scoped lang='less'>
.material-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .material-item {
    margin: 5px 0;
    width: 150px;
    height: 150px;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
