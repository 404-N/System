import router from "./index"
import { getToken } from "@/utils/auth"
import asyncRoutes from "./asyncRouterMap"
import {post} from "@/utils/http"
//全局路由守卫（登录情况）
router.beforeEach((to,from,next)=>{
    //获取Token，当前模拟有Token代表已登录

    const hasToken= getToken()
    if(hasToken){
        if(to.path=="/login"){
            next("/")
        }else{
            if(to.name == null ){
                //调用获取动态路由方法
                getAsyncRouter(hasToken,to,next);
            }
            else{
                next();
            }     
        }
    }else{
        if(to.path=="/login"){
            next()
        }else{
            next("/login")
        }
    }
})

async function getAsyncRouter(Token,to,next){
    //通过Token获取role
    const {role} = await post("/nav",Token)
    //循环需要权限的路由
    for(let i=0; i<asyncRoutes.length; i++){
        //判断是不是404配置对象
        if(i<asyncRoutes.length-1){
            //获取对象中的auth
            const auth = asyncRoutes[i].meta.auth
            for(let item=0; item<auth.length; item++){
                //获取到的role与对象中的auth的值匹配
                if(role == auth[item]){
                    router.addRoute(asyncRoutes[i])
                }
            }
        }else{
            router.addRoute(asyncRoutes[i])
        }
    }
    //防止路由没添加好就next，加好to.name不为空走else的next，
    next({...to,replace:true})
}
