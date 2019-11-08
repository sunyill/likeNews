<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <el-form style="margin-left:30px">
      <el-form-item label="文章状态">
        <el-radio-group v-model="formData.status" @change="changeArticleStatus">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核成功</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="频道列表" @change="changeArticleStatus">
        <el-select placeholder="请输入你喜爱的频道" v-model="formData.channel_id">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="时间选择">
        <!-- 使用format指定输入框的格式；使用value-format指定绑定值的格式 -->
        <el-date-picker
          @change="changeArticleStatus"
          v-model="formData.dateRange"
          type="daterange"
          value-format="yyyy-MM-dd"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>

    <div class="total_title">共找到{{page.total}}条数据</div>
    <!-- 内容列表 -->
    <div class="content-list">
      <div class="content-item" v-for="(item,index) in list" :key="index">
        <!-- 左侧内容 -->
        <div class="left">
          <img :src="item.cover.images[0]" alt />
          <!-- 内容信息 -->
          <div class="info">
            <span>{{item.title}}</span>
            <el-tag
              style="width:60px"
              :type="item.status | textStatus"
            >{{item.status | textTypeInfo}}</el-tag>
            <span class="date">{{item.pubdate}}</span>
          </div>
        </div>
        <div class="right">
          <span>
            <i class="el-icon-edit-outline"></i>修改
            <i class="el-icon-delete"></i>删除
          </span>
        </div>
      </div>
    </div>
    <el-row type="flex" justify="center" style="margin-top:20px">
      <el-pagination
        background
        layout="prev,pager,next"
        :page-size="page.pageSize"
        :current-page="page.currentPage"
        :total="page.total"

        @current-change="pageChange"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      radio: 1,
      value: '',
      value1: '',
      formData: {
        status: 5, // 默认选择是5-->全部
        channel_id: null, // 定义频道ID, 当前选择的ID
        dateRange: null // 定义的时间范围
      },
      channels: [], // 频道数组
      list: [], // 内容列表
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      }
    }
  },
  methods: {
    // 分页事件
    pageChange (newPage) {
      this.page.currentPage = newPage
      this.getArticles(this.getCondition()) // 查询数据
    },
    // 文章列表
    getArticles (params) {
      this.$axios({
        url: '/articles',
        params: { ...params }
      }).then(res => {
        console.log(res)
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    },
    //  频道列表
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        console.log(res)
        this.channels = res.data.channels
      })
    },
    // 获取条件 A状态改变 + B频道切换 + C日期改变
    getCondition () {
      let { status, channel_id: cid, dateRange } = this.formData // 解构赋值
      let params = {
        status: status === 5 ? '' : status, // status默认是5, 如果是5的话,不能传
        channel_id: cid,
        begin_pubdate: dateRange && dateRange.length ? dateRange[0] : null,
        end_pubdate: dateRange && dateRange.length > 1 ? dateRange[1] : null
      }
      params.page = this.page.currentPage
      params.per_page = this.page.pageSize
      return params
    //   this.getArticles(params) // 调用查询接口, 传入参数
    },
    // 刷新列表数据 状态改变/频道切换/日期改变 都会触发
    changeArticleStatus () {
      // 当筛选条件改变时, 应将页面回置第一页
      this.page.currentPage = 1
      this.getArticles(this.getCondition())
    }
  },
  // 过滤器
  filters: {
    //   文章标签type的过滤器
    textStatus (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'success'
        case 2:
          return 'danger'
        case 3:
          return 'info'
      }
    },
    textTypeInfo (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        case 4:
          return '已删除'
      }
    }
  },
  created () {
    this.getArticles({ page: 1, per_page: 10 })
    this.getChannels()
  }
}
</script>

<style lang='less' scoped>
.total_title {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px dashed #ccc;
}
.content-list {
  .content-item {
    padding: 10px;
    border-bottom: 1px solid #f2f3f5;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 150px;
        height: 100px;
        border-radius: 4px;
      }
      .info {
        margin-left: 10px;
        display: flex;
        height: 100px;
        padding: 5px 0;
        flex-direction: column;
        justify-content: space-between;
        .date {
          color: #999;
          font-size: 12px;
        }
      }
    }
    .right {
      span,
      span i {
        font-size: 12px;
        color: #333;
      }
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
