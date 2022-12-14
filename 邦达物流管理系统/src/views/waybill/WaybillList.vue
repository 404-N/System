<template>
    <div>
        <Bread-Crumb  />
        <el-card>
            <el-row :gutter="16">
                <el-col :span="6">
                    <el-input placeholder="请输入运单号" v-model="params.waybillNo"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入客户名称" v-model="params.name"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-date-picker
                       v-model="date"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-col>
                <el-col :span="6" style="text-align: right;">
                    <el-button type="primary" @click="loadData">查询</el-button>
                    <el-button type="primary">重置</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card>
            <el-radio-group v-model="params.status" @change="loadData">
                <el-radio-button label="1">全部运单(300)</el-radio-button>
                <el-radio-button label="2">装货中(120)</el-radio-button>
                <el-radio-button label="3">运输中(70)</el-radio-button>
                <el-radio-button label="4">已完成(100)</el-radio-button>
                <el-radio-button label="5">运单异常(10)</el-radio-button>
            </el-radio-group>
        </el-card>
        <el-card>
            <el-table 
                :data="tableData"
                style="width: 100%" 
                v-loading="loading"  
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
            >
                <el-table-column type="index" width="50" label="序号"></el-table-column>
                <el-table-column prop="no" label="运单号" width="180"></el-table-column>
                <el-table-column prop="date" label="下单时间" width="180"></el-table-column>
                <el-table-column prop="name" label="客户名称" width="180"></el-table-column>
                <el-table-column prop="cargo" label="货物名称" width="180"></el-table-column>
                <el-table-column prop="count" label="件数" width="180"></el-table-column>
                <el-table-column prop="start" label="起始地址" width="180"></el-table-column>
                <el-table-column prop="end" label="目的地" width="180"></el-table-column>
                <el-table-column prop="price" label="运费" width="180"></el-table-column>
                <el-table-column prop="needRecive" label="需要接货" width="180"></el-table-column>
                <el-table-column prop="plateNumber" label="车牌号" width="180"></el-table-column>
                <el-table-column prop="driver" label="司机" width="180"></el-table-column>
                <el-table-column prop="tel" label="司机电话" width="180"></el-table-column>
                <el-table-column prop="percent" label="运输进度" width="200">
                    <template slot-scope="scope">
                        <el-progress :percentage="scope.row.percent"></el-progress>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180" fixed="right">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="detail(scope.row.no)">详情</el-button>
                        <el-button size="mini" type="danger">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="fr mt mb"
                :current-page="pageData.page"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageData.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            >
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb"
import moment from "moment"
import {post} from "@/utils/http"
import { mapMutations, mapState } from 'vuex'
    export default {
        components:{BreadCrumb},
        data(){
            return{
                tableData:[],
                params:{
                    waybillNo:"",
                    name:"",
                    status:1,
                },
                date:[],
                pageData:{
                    page:1,
                    pageSize:10
                },
                loading: false,
                total:100,
            };
        },
        created(){
            this.loadData()
        },
        methods:{
            async loadData(){
                this.loading=true
                let startDate = this.date? moment(this.date[0]).format("YYYY-MM-DD") : ""
                let endDate = this.date? moment(this.date[1]).format("YYYY-MM-DD") : ""
                const res= await post('/waybilllist',{...this.pageData,...this.params,startDate,endDate});
                this.tableData=res.data.list
                this.loading=false
            },
            detail(no){
                this.$router.push("list/detail?no="+no+"&this="+this)
            },
            crearCache(){
                //在当前页面跳转到其他页面时，清除缓存方式
                let vnode = this.$vnode;
                let parentVnode = vnode && vnode.parent;
                if (
                    parentVnode &&
                    parentVnode.componentInstance &&
                    parentVnode.componentInstance.cache
                ) {
                    var key =
                    vnode.key == null
                        ? vnode.componentOptions.Ctor.cid +
                        (vnode.componentOptions.tag
                            ? `::${vnode.componentOptions.tag}`
                            : "")
                        : vnode.key;
                    var cache = parentVnode.componentInstance.cache;
                    var keys = parentVnode.componentInstance.keys;
                    if (cache[key]) {
                    this.$destroy();
                    // remove key
                    if (keys.length) {
                        var index = keys.indexOf(key);
                        if (index > -1) {
                        keys.splice(index, 1);
                        }
                    }
                    cache[key] = null;
                    }
                }
            },
            ...mapMutations(["changeIsFromDetail"]),
        },
        //组件离开守卫
        beforeRouteLeave(to,from,next){
            //去详情的时候，把路由配置项中的keepAlive改为true（默认也是true）
            if(to.path=="/waybill/list/detail"){
                from.meta.keepAlive=true;
            }else{
                // 去其他页面的，调用清除缓存方法
                this.crearCache()        
            }
            next()
        },
        //当前组件重新激活时执行
        activated(){
            //如果store中的isFromDetail是true就执行
            if(this.isFromDetail){
                //重新请求数据
                this.loadData();
                //调用store的方法把标记改为false
                this.changeIsFromDetail(false)
            }
        },
        computed:mapState(["isFromDetail"])
    }
</script>

<style lang="less" scoped>

</style>