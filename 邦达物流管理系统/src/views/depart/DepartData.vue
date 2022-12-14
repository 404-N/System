<template>
    <div>
        <Bread-Crumb  />
        <el-card>
            <el-row>
                <el-col :span="18">
                    <el-row :gutter="24">
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" v-show="show">
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="2">                    
                        <span class="el-dropdown-link" @click="expand">
                            {{show? "收起" :  "展开"}}<i :class="`el-icon-arrow-${show? 'up' : 'down'} wl-icon--right`"></i>
                        </span>                    
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">重置</el-button>
                </el-col>
            </el-row>
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
        </el-card>
    </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb"
    export default {
        data(){
            return{
                show:false,
            }
        },
        components:{
            BreadCrumb
        },
        methods:{
            expand(){
                this.show = !this.show
            },
        }
    }
</script>

<style lang="less" scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

</style>