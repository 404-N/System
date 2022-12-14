export function timeFormat(date){
    let newDate = ""
    if(typeof(date) == "object"){
        newDate= date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    }else{
        newDate =new Date(date)
    }
    return newDate
}