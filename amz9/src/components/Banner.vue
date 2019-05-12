<template>
    <swipe 
    class="my-swipe"
    :speed="500"
    :auto="1000"
  >
      <swipe-item @click.native="goDetail(1)" class="slide1"><img src="../assets/default/bing-1.jpg"></swipe-item>
    
      <swipe-item @click.native="goDetail(2)" class="slide2"><img src="../assets/default/bing-1.jpg"></swipe-item>

      <swipe-item @click.native="goDetail(3)" class="slide3"><img src="../assets/default/bing-1.jpg"></swipe-item>

  </swipe>
</template>
<script>

import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
import Swiper from '../assets/js/swipe.js'
export default {
  components: {
    Swipe,SwipeItem
  },
  methods:{
    goDetail(id){
      this.$router.push({name:'detail',params:{id:id}})
    }
  }
};
</script>
<style scoped>
   .my-swipe {
  height: 88px;
  color: #fff;
  font-size: 30px;
  
  text-align: center;
}
img{width:100%;height:100%}
</style>


