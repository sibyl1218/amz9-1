import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Index from '@/pages/Index'
import Product from '@/pages/Product'
import Shoppingcar from '@/pages/Shoppingcar'
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import Error from '@/components/Error'

var routes=[
  {path:'/index',name:'index',component:Index},
  {path:'/product',name:'product',component:Product},
  {path:'/shoppingcar',name:'shoppingcar',component:Shoppingcar},
  {path:'/login',name:'login',component:Login},
  {path:'/reg',name:'reg',component:Reg},
  {path:'/',redirect:'/index'},
  {path:'*',component:Error}
];

let router = new VueRouter({
  // routes:数组
  // routes:routes
  routes
})

export default router;