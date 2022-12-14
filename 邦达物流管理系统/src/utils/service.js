import axios from "axios";
import { Message } from 'element-ui';
import { getToken } from "./auth";
const service=axios.create({
    //请求地址
    baseURL:"http://localhost:8080",
    //请求超时时间
    timeout:5000
})

//请求拦截
service.interceptors.request.use((config)=>{
    //请求头添加token
    if(getToken()){
        config.headers.token=getToken()
    }
    return config
},()=>{
    Message({
        type:"error",
        message:"请求错误"
    })
    return Promise.reject(new Error("请求错误"))
})
//响应拦截
service.interceptors.response.use((res)=>{
    const result=res.data;
    if(result.success){
        return result
    }else{
        //请求成功，但后端验证等出错
        Message({
            type:"error",
            message:result.message || "请求错误"
        })
        return Promise.reject(new Error(result.message || "请求错误"))
    }
},()=>{
    //请求失败
    Message({
        type:"error",
        message:"请求错误"
    })
    return Promise.reject(new Error("请求错误"))
})
export default service