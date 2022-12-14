<template>
    <div>
        <el-row :gutter="24" class="mb">
            <el-col :span="6" v-for="item in alltotal" :key="item.class">
                <el-card shadow="always" :class="item.class">
                    <div class="fl">
                        <p>{{item.title}}</p>
                        <p class="num">{{item.num}}</p>
                        <p>{{item.percentage}}<span class="compare">与上月同比</span></p>
                    </div>
                    <i :class="`el-icon-${item.ico} ico`"></i>
                    <div class="clear"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {get} from "@/utils/http"
    export default {
        data(){
            return {
                alltotal:[
                    {title:"本月订单",class:"in",ico:"tickets",num:"",percentage:""},
                    {title:"本月运单",class:"out",ico:"money",num:"",percentage:""},
                    {title:"累计订单",class:"allin",ico:"date",num:"",percentage:""},
                    {title:"累计运单",class:"allout",ico:"coin",num:"",percentage:""}
                ]
            }
        },
        created(){
            //获取统计数据
            this.total()
        },
        methods:{
            //获取统计数据
            async total(){
                let {data} = await get("/total");
                for( let i=0; i<data.length; i++){
                    this.alltotal[i].num= data[i].num
                    this.alltotal[i].percentage= data[i].percentage
                }

            }
        }
    }
</script>

<style lang="less" scoped>
.ico{
    float: right;
    font-size: 90px;
    color: rgba(255, 255, 255, 0.3);
}
.in{
    background: #4f88ff;
}
p{
    line-height: 30px;
    color: #fff;
    font-size: 16px;
}
.allin{
    background: #5050ff;
}
.allout{
    background: #f49b3b;
}
.out{
    background: #f26075;
}
.time p{
    color: #666;
}
.num{
    font-weight:bold
}
.compare{
    font-size:12px
}
</style>