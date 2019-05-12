<template>
    <div :class="['am-cf','am-g']">
    	<ul :class="['am-avg-sm-2','my-shop-product-list']">
          <li  v-for="(item) of list"
              :key="item._id">
            	<div :class="['am-panel','am-panel-default']">
                    <div class="am-panel-bd">
                        <router-link  :to="{name:'product',params:{id:item._id},query:{dataName:dataName}}">
                            <img class="am-img-responsive" :src="baseUrl+item.url"/>
                            <h3><a href="#">{{item.title}}</a></h3>
                            <div>
                                <span class="list-product-price-span">￥{{item.price}}</span>
                            </div>
                         </router-link>
                        <hr data-am-widget="divider" style="" :class="['am-divider','am-divider-default','am-cf']"/>
                        <ol :class="['am-avg-sm-3','product-list-share']">
                        	<li><a href="#"><img src="../assets/default/icon1.png" class="am-img-responsive" /></a></li>
                            <li><a href="#"><img src="../assets/default/icon2.png" class="am-img-responsive" /></a></li>
                            <li><a href="#"><img src="../assets/default/icon3.png" class="am-img-responsive" /></a></li>
                        </ol>
                    </div>
                </div>
        	</li>
        </ul>
    </div>
</template>
<script>
export default{
  props:['list','dataName'],
  data(){
      return {
          baseUrl:'http://47.100.253.62:3000'
      }
  }
}
</script>
