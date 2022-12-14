<template>
    <div>
        <el-card>
            <div slot="header">订单统计分析</div>
            <div class="analysis" ref="analysis"></div>
        </el-card>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import {get} from "@/utils/http"
    export default {
        mounted(){
            this.drawLine()
        },
        methods:{
            async drawLine(){
                //第一步创建容器
                var myChart = echarts.init(this.$refs.analysis);
                //获取数据
                let {data} = await get("/line");
                let keys=[];
                let values=[];
                for(let key in data){
                    keys.push(key);
                    values.push(data[key])
                }
                //设置配置项
                const option = {
                    tooltip:{
                        trigger:"axis"
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: keys
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                        data: values,
                        type: 'line',
                        smooth: true,
                        areaStyle: {
                            color:{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#4f88ff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                                }
                            }
                        }
                    ]
                };
                //第三步，调用方法生成视图
                myChart.setOption(option)
            },
        }
    }
</script>

<style lang="less" scoped>
.analysis{
    height:240px
}
</style>