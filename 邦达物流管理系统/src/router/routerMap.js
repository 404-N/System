export default [
    {
      path: '/',
      name: 'LayOut',
      component: () => import( '../views/LayOut.vue'),
      //重定向
      redirect:"/index",
      children:[
        {
          path:"/index",
          name:"index",
          component:()=>import("../views/index/HomeIndex")
        },
        {
          path:"/orders/list",
          name:"orders_list",
          meta:{bread:["订单管理","订单列表"]},
          component:()=>import("../views/orders/OrdersList"),
        },
        {
          path:"/waybill/in",
          name:"waybill_in",
          meta:{bread:["运单管理","运单录入"]},
          component:()=>import("../views/waybill/WaybillIn"),
        },
        {
          path:"/waybill/list",
          name:"waybill_list",
          meta:{bread:["运单管理","运单列表"],keepAlive:true},
          component:()=>import("../views/waybill/WaybillList"),
        },
        {
          path:"/waybill/list/detail",
          name:"waybill_list_detail",
          meta:{bread:["运单管理","运单列表","运单详情"]},
          component:()=>import("../views/waybill/WaybillDetail"),
        },
        {
          path:"/depart/data",
          name:"waybill_list_in",
          meta:{bread:["发车管理","发车数据单"]},
          component:()=>import("../views/depart/DepartData.vue")
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( '../views/LoginPage.vue')
    },   
  ]