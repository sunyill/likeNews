<template>
  <div class="cover_image">
      <div class="cover_item" v-for="(item,index) in images" :key="index">
          <img :src="item?item:defaultImg" alt>
      </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'images'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png')
    }
  }
}
</script>

<style lang='less' scoped>
.cover_image {
    display: flex;
    .cover_item {
        width:200px;
        height:200px;
        border: 1px solid #ccc;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
            width:100%;
            height:100%;
        }
    }
}
</style>
