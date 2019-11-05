<template>
<!-- 面包屑封装的意义 -->
<!-- 显示当前页面的路径,可以直观的查看页面 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}"></el-breadcrumb-item>
        <el-breadcrumb-item>
            <!-- 定义具名插槽 -->
            <slot name="title"></slot>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
