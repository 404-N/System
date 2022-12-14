<template>
    <div>
        <Bread-Crumb  />
        <el-card>
            <el-row type="">
                <el-col :span="12">
                    <span>运单编号 </span>
                    <span> 创建时间 </span>
                    <span> 审核员</span>
                </el-col>
                <el-col :span="12" style="text-align: right;">
                    <el-button type="primary" @click="back" >返回</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card>
            <el-steps align-center :active="1" finish-status="finish">
                <el-step title="未发货"></el-step>
                <el-step title="运输中"></el-step>
                <el-step title="已收货"></el-step>
                <el-step title="已完成"></el-step>
            </el-steps>
        </el-card>
        <el-card>
            <div class="a">
                <p>基础信息</p>
                <el-row>
                    <el-col :span="6">客户名称</el-col>
                    <el-col :span="6">是否是易燃易爆物品</el-col>
                    <el-col :span="6">发货单据</el-col>
                    <el-col :span="6">客户下单时间</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">货物名称</el-col>
                    <el-col :span="6">结算方式</el-col>
                    <el-col :span="6">接货单据</el-col>
                    <el-col :span="6">是否需要接货</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">数量</el-col>
                    <el-col :span="6">运费</el-col>
                    <el-col :span="6">所属业务员</el-col>
                </el-row>
            </div>
            <div class="a">
                <p>运输信息</p>
                <el-row>
                    <el-col :span="6">车牌号</el-col>
                    <el-col :span="6">司机电话</el-col>
                    <el-col :span="6">司机身份证号</el-col>
                    <el-col :span="6">预计运输时间</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">司机姓名</el-col>
                    <el-col :span="6">司机地址</el-col>
                    <el-col :span="6">所属公司</el-col>
                    <el-col :span="6">违约金</el-col>
                </el-row>
            </div>
            <div>
                <p>经办人信息</p>
                <el-row>
                    <el-col :span="6">业务员</el-col>
                    <el-col :span="6">审核员</el-col>
                    <el-col :span="6">制单员</el-col>
                    <el-col :span="6">备注</el-col>
                </el-row>
            </div>
        </el-card>
    </div>
    
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb"
import { mapMutations, } from 'vuex';
    export default {
        components:{BreadCrumb},
        //组件路由离开守卫
        beforeRouteLeave(to,from,next){
            if(to.path!="/waybill/list"){
                //不是去列表页，把store的标记改为true
                this.changeIsFromDetail(true)
            }
            next()
        },
        methods:{
            ...mapMutations(["changeIsFromDetail"]),
            back(){
                this.$router.push("/waybill/list");
            }
        },
    }
</script>

<style lang="less" scoped>
.a{
    border-bottom: 2px solid #f3f3f3
}
</style>