import service  from "./service";
//封装get请求
export function get(url,params){
    const config={
        method:"get",
        url
    }
    if(params){
        config.params=params
    }
    return service(config)
}
//封装Post请求
export function post(url,params){
    const config={
        method:"post",
        url
    }
    if(params){
        config.data=params
    }
    return service(config)
}