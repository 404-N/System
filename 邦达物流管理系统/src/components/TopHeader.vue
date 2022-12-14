<template>
<el-card style="line-height: 60px;" shadow="always" :body-style="{ padding: '0' }">
    <div class="fr">
        <el-dropdown @command="handleCommand">
            <span class="ml mr">
                欢迎您，{{info}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
    <p class="date fr">今天是你在阿里的第<span>{{days}}</span>天</p>
</el-card>
</template>

<script>
import { removeToken } from '@/utils/auth';
import { get } from '@/utils/http';
    export default {
        data(){
            return{
                info:sessionStorage.getItem("nickname"),
                time:"",
            }
        },
        created(){
            //获取入职时间
            this.joining()
        },
        methods:{
            //退出登录
            handleCommand(item){
                if(item=="logout"){
                    removeToken();
                    this.$router.push("/login")
                }
            },
            //获取入职时间，并存入本地浏览器
            async joining(){
                this.time = sessionStorage.getItem("days")
                if( !this.time){
                    let {time} = await get("/in");
                    sessionStorage.setItem("days",time)
                    this.time = sessionStorage.getItem("days")
                }
            },          
        },
        computed:{   
            //计算入职天数         
            days(){
                let now=new Date();
                let target = this.time? new Date(this.time):now;         
                return Math.floor((now-target)/1000/60/60/24)
            }
        },
    }
</script>

<style lang="less" scoped>

</style>