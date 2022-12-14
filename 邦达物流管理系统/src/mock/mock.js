import Mock from "mockjs"
import menuList from "./menuList"
//模拟请求延时
Mock.setup({
    timeout:500
})
//登录
Mock.mock("http://localhost:8080/login","post",(req)=>{
    const {username,password} = JSON.parse(req.body);
    if(username=="admin"&&password=="123456"){
        return{
            code:200,
            success:true,
            message:"登陆成功",
            token:"123456",
            nickname:"张三"
        }
    }else{
        return{
            code:100,
            success:false,
            message:"账号或密码有误"
        }
    }
})
//获取动态路由
Mock.mock("http://localhost:8080/nav","post",(req)=>{
    // const {body} = JSON.parse(req.body);
    if( req.body == "123456"){
        return{
            code:200,
            success:true,
            message:"验证成功",
            role:"boss"
        }
    }else{
        return{
            code:100,
            success:false,
            message:"tokken"
        }
    }
})

//入职日期
Mock.mock("http://localhost:8080/in","get",()=>{
    return{
        code:200,
        success:true,
        message:"请求成功",
        time:"2020-07-01"
    }
})
//菜单接口
Mock.mock("http://localhost:8080/menu","get",()=>{
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:menuList
    }
})
//数据统计
Mock.mock("http://localhost:8080/total","get",()=>{
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:[
            {title:"本月进件",num:"6588",percentage:"+20.12%"},
            {title:"本月放款",num:"1210000",percentage:"+1.12%"},
            {title:"累计进件",num:"6588",percentage:"+20.12%"},
            {title:"累计放款",num:"6588",percentage:"+20.12%"}
        ]
    }
})
//折线图
Mock.mock("http://localhost:8080/line","get",()=>{
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:{
            "22-01":30,
            "22-02":84,
            "22-03":56,
            "22-04":47,
            "22-05":84,
            "22-06":61,
            "22-07":90,
        }
    }
})

//所有人员
Mock.mock('http://localhost:8080/all', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'character|1': ["业务人员", "审核人员", "风控经理", "管理员"],
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进件进行风险审核", "对放款进行风险审核"],
                'status|1': [1, 2],

            }],
            "total|1": [10, 20, 30, 40, 50]
        })
    }
})
//产品管理--全部产品   
Mock.mock('http://localhost:8080/productList', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'type|1': ["汽车消费", "房产消费", "抵押贷款"],
                'name|1': ["巴贝拉贷款", "麦穗金融", "日借款", "爱猫借贷", "樱花分期", "小熊金融", "借乐花", "星星钱袋"],
                'limit|1': [100, 200, 300],
                'rate|1': [4.1, 4.3, 3.8, 3.9, 5, 3],
                'number': Mock.Random.integer(30, 200),
                'total': Mock.Random.integer(10000000, 500000000),
                'average': Mock.Random.integer(10000000, 250000000),
                'status|1': [1, 2],
                'highest|1': [36, 60, 24, 360],
                'date': Mock.Random.date()
            }],
            "total|1": [10, 20, 30, 40, 50]
        })
    }
})
//图表接口
Mock.mock('http://localhost:8080/salesRecord', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data:{
            "1月":4080,
            "2月":8560,
            "3月":3770,
            "4月":6980,
            "5月":3625,
            "6月":9654,
            "7月":3349,
        }
    }
})

//订单管理-订单列表
Mock.mock('http://localhost:8080/orderList', 'post', (req) => {
     const { page, pageSize } = JSON.parse(req.body);
     page
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                'id|+1': 10000,//订单号
                'status|1': [1,2,3,4],//订单状态 1待审核 2已审核 3审核通过 4审核拒绝
                'date': Mock.Random.date(),//下单时间
                'name|1': ["诺来科技有限公司","辉华股份有限公司","川聚物流有限公司","成越材料有限公司","聚博纺织有限公司"],//客户名称
                'start': Mock.Random.city(true),//起始城市
                'end': Mock.Random.city(true),//目的城市,
                'cargo|1': ["日用品","纺织品","生鲜","建材","电器"],//货物名称
                'count': Mock.Random.integer(10, 200),//件数
                'unit|1': ["方","吨"],//单位
                "price":Mock.Random.integer(5000,50000),//运费
                "from|1":["移动端","pc端"],
                "pay|1":[1,2],//是否支付 1 已支付 2未支付     
            }],
            "total": 47
        })
    }
})
//创建订单
Mock.mock("http://localhost:8080/addOrder","post",(req)=>{
    const { name,start,end,cargo,count,unit,price,from,pay} = JSON.parse(req.body);
    name,start,end,cargo,count,unit,price,from,pay
    return{
        code:200,
        success:true,
        message:"新建成功",
    }
})
//运单管理-运单列表
Mock.mock('http://localhost:8080/waybilllist', 'post',(req)=>{
    const {page,pageSize,waybillNo,name,startDate,endDate,status}= JSON.parse(req.body)
    console.log("服务器接到的参数",page,pageSize,waybillNo,name,startDate,endDate,status)
    return{
        code:200,
        success: true,
        message: "成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                'no|+1': 10000,//订单号
                'date': Mock.Random.date(),//下单时间
                'name|1': ["诺来科技有限公司","辉华股份有限公司","川聚物流有限公司","成越材料有限公司","聚博纺织有限公司"],//客户名称
                'cargo|1': ["日用品","纺织品","生鲜","建材","电器"],//货物名称
                'count': Mock.Random.integer(10, 200),//件数
                'start': Mock.Random.city(true),//起始城市
                'end': Mock.Random.city(true),//目的城市,
                "price":Mock.Random.integer(5000,50000),//运费
                "needRecive|1":[1,2],//1需要接货 2不需要接货
                "plateNumber":["京A123456","苏C66666","鲁B45678"],//车牌号
                "driver":Mock.Random.cname(),//cname随机生成人名
                'tel|1': [15020026703,13515338794,18561041278,1831509786],
                "percent|1":[23,45,77,89,90,87],  
            }],
            "total": 47
        })
    }
})