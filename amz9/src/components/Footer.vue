<template>
    <div data-am-widget="navbar" :class="['am-navbar','am-cf','my-nav-footer']" id="footer">
      <ul :class="['am-navbar-nav','am-cf','am-avg-sm-4','my-footer-ul']" id="ul-footer">
        <router-link
          tag="li"   
          to="/index"      
        >
          <a href="/wap/" class="">
            <span class="am-icon-home"></span>
            <span class="am-navbar-label">首页</span>
          </a>
        </router-link>
        <router-link
          tag="li"    
           to="/reg"      
        >
          <a href="###" class="">
            <img src="../assets/default/reg.png" />
            <span class="am-navbar-label">注册</span>
          </a>
         </router-link>
         <router-link
          tag="li"     
           to="/login"     
        >
          <a href="###" class="">
            <img src="../assets/default/login.png" />
            <span class="am-navbar-label">登录</span>
          </a>
         </router-link>
         <router-link
          tag="li"        
           to="/index"  
        >
          <a href="#" class="">
             <img src="../assets/default/ditu.png"/>
            <span class="am-navbar-label">地图</span>
          </a>
         </router-link>
        <router-link 
           tag="li"
           to="/shoppingcar"
            >
          <a href="javascript:;" class="user">
            <img src="../assets/default/gouwuche.png"/>
            <span class="am-navbar-label">购物车</span>
          </a>
        </router-link>
      </ul>
    </div>
</template>
<style scoped>
   #ul-footer{display:flex;width:100%;justify-content: space-between;}
</style>
