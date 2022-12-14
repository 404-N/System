<template>
    <div>
        <h3 class="title">邦达物流管理系统</h3>
        <el-menu :router="true" background-color="#001529" text-color="#fff">
            <Menus-vue v-for="(item,index) in menuData" :key="index" :menu="item"></Menus-vue>
        </el-menu>
    </div>
</template>

<script>
import {get} from "@/utils/http"
import MenusVue from "./MenusVue.vue"
    export default {
        data(){
            return{
                menuData:[]
            }
        },
        components:{
            MenusVue
        },
        created(){
            //获取菜单
            this.getMenu()
        },
        methods:{
            //获取菜单
            getMenu(){
                get("/menu").then(({data})=>{
                    this.menuData = data
                })
            }
        }
    }
</script>

<style lang="less" scoped>
.title{
    text-align: center;
    line-height: 50px;
    color: #fff;
}
.el-menu{
    border-right: 0;
}
</style>