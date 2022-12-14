<template>
    <div>
        <el-row class="wrap" type="flex" justify="center" align="middle">
            <el-col :span="6" >
                <el-card shadow="always">
                    <h2 slot="header" class="tc">邦达物流管理系统</h2>
                    <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="ruleForm.password" placeholder="请输入密码"  show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="login()" :loading="loading">登录</el-button>
                        </el-form-item>
                        <el-form-item>
                            <p>username：admin</p>
                            <p>password：123456</p>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {post} from '@/utils/http'
import {setToken} from '@/utils/auth'
    export default {
        data(){
            return{
                loading: false,
                ruleForm:{
                    username:'',
                    password:'',
                },
                rules:{
                    username:[
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {pattern:/^\w{4,8}$/, message: '用户名要求4-8位数字字母组合', trigger: 'blur'}
                    ],
                    password:[
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {pattern:/^\d{6}$/, message: '密码要求是6位纯数字', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            login(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.loading=true;
                        post("/login",this.ruleForm).then(res=>{
                            this.loading=false;
                            setToken(res.token)
                            sessionStorage.setItem("nickname",res.nickname)
                            this.$router.push("/")
                        }).catch((error)=>{
                            this.loading=false;
                            console.log(error)
                        })
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
.wrap {
    height: 100vh;
    .el-buttom{
        width:100%
    }
}
</style>