<template>
    <el-container >
        <el-aside width="200px" class="aside" >
            <Nav-left></Nav-left>
        </el-aside>
        <el-container class="rightContent">
            <el-header ><Top-header></Top-header></el-header>
            <el-main >
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavLeft from '../components/NavLeft.vue'
import TopHeader from '../components/TopHeader.vue'
    export default {
        components:{NavLeft,TopHeader},
    }
</script>

<style lang="less" scoped>
.aside {
    background: #001529;
}
.rightContent{
    height:100vh;
    .el-header{padding: 0;}
    .el-main{background: #e9eef3;}
}
</style>