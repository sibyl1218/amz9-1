<template>
  <div id="app">
   <div class="container">   
      <Header v-show="bNav"></Header>
      <router-view></router-view>
      <Footer></Footer>
</div>
  </div>
</template>
<script>
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  watch:{
    $route:{
      handler:function(route){
        let path = route.path;
        this.checkPath(path);
      },
      immediate:true
    }
  },
   methods:{
    checkPath(path){
      if(/index|product/.test(path)){
        this.$store.dispatch('UPDATE_NAV',true)
      }
      if(/login|reg|shoppingcar/.test(path)){
        this.$store.dispatch('UPDATE_NAV',false)
      }
    }
  },
  components: {
    Header,Footer
  },
  computed:mapGetters([
    'bNav'
  ])
}
</script>

