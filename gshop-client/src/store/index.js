// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from "../pages/Profile/Profile"
import Search from "../pages/Search/Search"

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite
    }
  ]
})
