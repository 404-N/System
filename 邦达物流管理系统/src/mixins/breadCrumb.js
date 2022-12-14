export default{
    data(){
        return{
            breadList:[]
        }
    },
    created(){
        this.getBreadCrumb()
    },
    watch:{
        //data 计算属性 props  $route(params,query变了，路由页面没变，只是数据变了)
        $route(){
            this.getBreadCrumb()
        }
    },
    methods:{
        getBreadCrumb(){
            this.breadList = this.$route.meta.bread || []
        }
    }
}