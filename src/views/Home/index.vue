<!--
 @Description: 首页
 * @Author: your name
 * @Date: 2019-09-18 20:11:39
 * @LastEditTime: 2019-09-18 20:25:52
 * @LastEditors: Please set LastEditors
 -->
<template>
  <el-container>
    <el-aside style="width:200px;height:100vh;background-color:#bfd5d9">
      <layout-aside></layout-aside>
    </el-aside>
  <el-container>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  </el-container>
</template>

<script>
// import layoutAside from '@/components/home/layout_aside.vue'
// import layoutHeader from '@/components/home/layout_header.vue'
export default {
  components: {
    // layoutAside,
    // layoutHeader
  }
}
</script>

<style>

</style>
