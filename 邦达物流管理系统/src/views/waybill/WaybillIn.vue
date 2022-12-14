<template>
    <div>
        <Bread-Crumb  />
        <el-card>
            <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="客户名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="客户单号" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="货物数量" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="货物单位" prop="name">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="下单时间" prop="name">
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                    <span> - </span>
                    <el-time-picker v-model="time" placeholder="选择时间"></el-time-picker>
                </el-form-item>
                <el-form-item label="即时配送" prop="name">
                    <el-switch v-model="value3" ></el-switch>
                </el-form-item>
                <el-form-item label="发货地址" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="收货地址" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="承运方式" prop="name">
                    <el-radio v-model="radio" label="1">个人</el-radio>
                    <el-radio v-model="radio" label="2">公司</el-radio>
                </el-form-item>
                <el-form-item label="活动形式" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>   
            </el-form>
        </el-card>
    </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb"
    export default {
        data(){
            return{
                ruleForm:{
                    name:"",
                },
                rules:{},
                options: [
                    {
                        value: '1',
                        label: '日用品'
                    }, 
                    {
                        value: '2',
                        label: '纺织品'
                    }, 
                    {
                        value: '3',
                        label: '生鲜'
                    }, 
                    {
                        value: '4',
                        label: '建材'
                    }, 
                    {
                        value: '5',
                        label: '电器'
                    }
                ],
                value: '',
                time:"",
                value3: false,
                radio:'',
            }
        },
        components:{BreadCrumb},
    }
</script>

<style lang="less" scoped>

</style>