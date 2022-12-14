<template>
    <div>
        <el-card>
            <div slot="header">订单统计分析</div>
            <div class="pieChart" ref="pieChart"></div>
        </el-card>
    </div>
</template>

<script>
import * as echarts from 'echarts'
    export default {
        mounted(){
            this.drawCircle()
        },
        methods:{
            drawCircle(){
                //第一步创建容器
                var myChart = echarts.init(this.$refs.pieChart);
                //设置配置项
                const option = {
                    series: [
                        {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['50%', '90%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 8,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                        }
                    ]
                    };
                //第三步，调用方法生成视图
                myChart.setOption(option)
            }
        },
    }
</script>

<style lang="less" scoped>
.pieChart{
    height:240px
}
</style>