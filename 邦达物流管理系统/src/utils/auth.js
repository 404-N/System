//设置Token
export function setToken(token){
    sessionStorage.setItem("token",token)
}
//获取Token
export function getToken(){
    return sessionStorage.getItem("token")
}
//清空sessionStorage
export function removeToken(){
    sessionStorage.clear()
}