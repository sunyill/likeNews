/**
选择一图,三图时,显示的边框样式
 */
<template>
  <div class="cover_image">
    <!-- 循环生成封面 -->
    <div class="cover_item" @click="clickImg(index)" v-for="(item,index) in images" :key="index">
      <img :src="item?item:defaultImg" alt />
    </div>

    <el-dialog :visible="showDialog" @close="showDialog=false">
      <!-- 监听图片事件 -->
      <cover-image @selectImage="chooseImg"></cover-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['type', 'images'],
  data () {
    return {
      selectIndex: -1, // 默认为-1
      showDialog: false,
      defaultImg: require('../../assets/img/pic_bg.png')
    }
  },
  methods: {
    clickImg (index) {
      this.selectIndex = index // 赋值给当前点击的索引
      this.showDialog = true
    },
    /**
     * 在弹出框中去选择图片素材: 子父传递参数
     */
    chooseImg (url) {
      // 显示图片  => 图片来源 =>上层 => props只能读取 不能更改 只能上层去改
      // 显示图片 => 获取图片 => 通过 再次传递 传给上层组件 => 只传图片 => 因为images是个数组 只传一个值 不足以修改Î
      // url  index
      this.$emit('updateImages', url, this.selectIndex) // 再次将事件抛出
      this.showDialog = false
    }
  }
}
</script>

<style lang='less' scoped>
.cover_image {
  display: flex;
  .cover_item {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
