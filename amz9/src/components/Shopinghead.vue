<template>
<div class="carlist">
    <div class="uchome-info">
    	<div class="uchome-info-uimg">
        	<img src="../assets/default/img1.jpg" />
        </div>
        <div class="uchome-info-uinfo">
        	<p>{{list.data.nikename}},欢迎光临![<a href="#" class="white">退出登录</a>]</p>
            <p>帐号：{{list.data.nikename}}，余额：<span class="red">￥{{list.data.yue}}</span></p>
            <p>积分：<span class="red">{{list.data.jifen}}</span>，消息：<a href="#" class="red">{{list.data.xiaoxi}}</a></p>
        </div>
 </div>
  <div :class="['am-cf','uchome-nav']">
        <ul class="am-avg-sm-5">
            <li><a href="#">今日签到</a></li>
            <li><a href="#">我的资料</a></li>
            <li><a href="#">我的二维码</a></li>
            <li><a href="#">升级为商家</a></li>
            <li><a href="#">我的伙伴</a></li>
        </ul>
    </div>
    <div :class="['am-cf','cart-panel']"> 
            <ul :class="['am-avg-sm-1','cart-panel-ul']">
                <li>
                	<div class="imgpanel"><a href="#"><img src="../assets/default/img3.jpg" class="am-img-responsive" /></a></div>
                	<div class="infopanel">
                    	<h3><a href="#">450ml柔顺丰盈护发素正品</a></h3>
                        <p>品牌：乔治卡罗尔</p>
                        <p>价格：<span :class="['red2','bold']">78.00</span> 元  X <input :class="['am-input-sm','txt-qty']" type="number" value="1" /></p>
                        <p>积分：<span :class="['red2','bold']">78.00</span></p>
                        <p><span class="am-fr"><a :class="['am-badge','am-badge-danger','am-round']">删除</a></span>库存：<span :class="['red2','bold']">100</span> 件</p>
                    </div>
                </li>
                <li>
                	<div class="imgpanel"><a href="#"><img src="../assets/default/img3.jpg" class="am-img-responsive" /></a></div>
                	<div class="infopanel">
                    	<h3><a href="#">450ml柔顺丰盈护发素正品</a></h3>
                        <p>品牌：乔治卡罗尔</p>
                        <p>价格：<span :class="['red2','bold']">78.00</span> 元  X <input :class="['am-input-sm','txt-qty']" type="number" value="1" /></p>
                        <p>积分：<span :class="['red2','bold']">78.00</span></p>
                        <p><span class="am-fr"><a :class="['am-badge','am-badge-danger','am-round']">删除</a></span>库存：<span :class="['red2','bold']">100</span> 件</p>
                    </div>
                </li>
                <li>
                	<div class="imgpanel"><a href="#"><img src="../assets/default/img3.jpg" class="am-img-responsive" /></a></div>
                	<div class="infopanel">
                    	<h3><a href="#">450ml柔顺丰盈护发素正品</a></h3>
                        <p>品牌：乔治卡罗尔</p>
                        <p>价格：<span :class="['red2','bold']">78.00</span> 元  X <input :class="['am-input-sm','txt-qty']" type="number" value="1" /></p>
                        <p>积分：<span :class="['red2','bold']">78.00</span></p>
                        <p><span class="am-fr"><a :class="['am-badge','am-badge-danger','am-round']">删除</a></span>库存：<span :class="['red2','bold']">100</span> 件</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['list','dataname'],
    data(){
      return {
          baseUrl:'http://localhost:3000',
      }
  }
}
</script>

<style scoped>
    .carlist{padding-bottom:49px;}
</style>
