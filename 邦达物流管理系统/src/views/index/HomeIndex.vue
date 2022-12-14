<template>
    <div>
        <Statistical-data />
        <el-row :gutter="24" class="mb">
            <el-col :span="18">
                <Analysis-index />
            </el-col>
            <el-col :span="6">
                <Pie-chart />
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="12">
                <el-card class="box-card">
                    <div class="block" >
                        <el-timeline>
                            <el-timeline-item timestamp="2018/4/12" placement="top">
                                <el-card>
                                    <h4>更新 Github 模板</h4>
                                    <p>王小虎 提交于 2018/4/12 20:46</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/3" placement="top">
                                <el-card>
                                    <h4>更新 Github 模板</h4>
                                    <p>王小虎 提交于 2018/4/3 20:46</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top">
                                <el-card>
                                    <h4>更新 Github 模板</h4>
                                    <p>王小虎 提交于 2018/4/2 20:46</p>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <el-calendar v-model="value">
                    </el-calendar>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import AnalysisIndex from "./AnalysisIndex.vue"
import PieChart from "./PieChart.vue"
import StatisticalData from "./StatisticalData.vue"
    export default {
        data() {
            return {
                value: new Date(),
            }
        },
        components:{
            AnalysisIndex,PieChart,StatisticalData
        },
    }
</script>

<style lang="less" scoped>

</style>