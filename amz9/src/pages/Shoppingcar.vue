<template>
        <Shopinghead :list="list" :dataName="'login'"></Shopinghead>
</template>
<script>
import store from  '../plugins/store'
import Shopinghead from '../components/Shopinghead';
export default {
    data(){
      return {
        list:[]
      }
    },
    components:{Shopinghead},
    beforeRouteEnter(to,from,next){
      if(store.state.user.error==0){
           next()
         }else{
           next('/login')
           }
    },
    async mounted(){
      this.list = store.state.user;
      console.log(this.list)
    }
}
</script>

