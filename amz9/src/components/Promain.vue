<template>
    <div class="gray-panel">
    	<div class="paoduct-title-panel">
        	<h1 class="product-h1">{{detail.title}}</h1>
            <p><span :class="['am-fr','product-title-gray-text']"><i class="am-icon-star"></i>收藏</span><span class="bold">价格：</span><span class="red2">￥{{detail.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="product-title-gray-text">积分：300积分</span></p>
        </div>
        <div class="my-search-title-panel">
        	<ul :class="['am-avg-sm-4','am-text-center','am-text-sm']">
            	<li class="am-text-center">销量<br />{{detail.xiaoliang}}件</li>
                <li class="am-text-center">库存<br />{{detail.kucun}}件</li>
                <li class="am-text-center">订单<br />{{detail.dingdan}}个</li>
                <li class="am-text-center">评价<br />0条</li>
            </ul>
    	</div>
        <div class="my-search-title-panel">
        	<p :class="['my-search-titp-p','am-text-sm','bold']">尺码</p>
            <p class="size-p" id="sizep"><span data-size="S">S</span><span data-size="M">M</span><span data-size="L">L</span><span data-size="XL">XL</span><span data-size="XXL">XXL</span><input type="hidden" id="size" name="size" value="" /></p>
            <hr data-am-widget="divider" style="" :class="['am-divider-default','am-margin-bottom-sm']"/>
            <p :class="['my-search-titp-p','am-text-sm','bold']">颜色分类</p>
            <p class="size-p" id="colorp">
            	<span data-color="酒红色">酒红色</span><span data-color="黑色">黑色</span><input type="hidden" id="color" name="color" value="" />
            </p>
            <hr data-am-widget="divider" style="" :class="['am-divider-default','am-margin-bottom-sm']"/>
            <p :class="['my-search-titp-p','am-text-sm bold']">数量</p>
            <div style="overflow:hidden">
            <form class="am-form-inline" role="form">
            	<button type="button" :class="['am-btn','am-btn-default']" style="float:left" onClick="subtractQty();" ><i class="am-icon-minus"></i></button>
                <input type="number" name="txtQty" id="txtQty" :class="['am-form-field','txt-qty','am-text-center','am-text-sm']" value="1" style=" width:60px; margin-right:0px; height:37px; display:inline; float:left">
                <button type="button" :class="['am-btn','am-btn-default']" style="float:left" onClick="addQty();"><i class="am-icon-plus"></i></button>
            </form>
            </div>
            <hr data-am-widget="divider" style="" :class="['am-divider-default','am-margin-bottom-sm']"/>
            <div>
            	<ul :class="['am-avg-sm-2','am-text-center']">
                	<li :class="['am-text-center','am-padding-sm']"><button type="button" :class="['am-btn','am-btn-success','am-btn-block','am-radius']">加入购物车</button></li>
                    <li :class="['am-text-center','am-padding-sm']"><button type="button" :class="['am-btn','am-btn-danger','am-btn-block','am-radius']">立即购买</button></li>
                </ul>
            </div>
        </div>
        <div class="paoduct-title-panel">
        	<h2 class="product-h1">商家信息</h2>
            <p><span class="am-fr product-title-gray-text"><a href="tel:88888888" class=" am-text-success"><i class="am-icon-phone"></i> 电话联系</a></span><span class="product-title-gray-text"><i class="am-icon-crosshairs"></i> 平区回笼观黄平路19号</span></p>
            <hr data-am-widget="divider" style="" class="am-divider-default am-margin-bottom-sm"/>
            <div style="overflow:hidden">
            <ul class="am-avg-sm-2 am-text-center am-padding-bottom-sm">
            	<li class="am-text-center"><a href="#"><i class="am-icon-bank"></i> 进店逛逛</a></li>
                <li class="am-text-center"><a href="#"><i class=" am-icon-comments"></i> 联系卖家</a></li>
            </ul>
            </div>
        </div>
    </div>     
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  methods:{
    goback(){
      this.$router.go(-1)
    }
  },
  computed:mapGetters(['detail']),
  async mounted(){
    let dataName = this.$route.query.dataName;
    let id = this.$route.params.id;
    
    this.$store.dispatch('UPDATE_DETAIL',{dataName,id});
    console.log(this.$store.state.detail)
  }
}
</script>