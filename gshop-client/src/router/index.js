// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入模块
import MSite from "../pages/MSite/MSite"
import Order from "../pages/Order/Order"
import Profile from "../pages/Profile/Profile"
import Search from "../pages/Search/Search"
import Login from "../pages/Login/Login"

Vue.use(VueRouter)

export default new VueRouter({
  // 设置路由
  routes: [
    {
      path:'/',
      redirect:'/msite',
    },
    {
      path:'/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
  ]
})
