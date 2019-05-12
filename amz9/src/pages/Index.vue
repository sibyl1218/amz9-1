<template>
    <div class="Index">
        <Banner></Banner>
        <Nav></Nav>
        <Shoplist :list="list" :dataName="'banner'"></Shoplist>
    </div>
</template>
<script>
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Shoplist from '../components/Shoplist';
export default {
   data(){
       return {
           list:[]
       }
   },
    components:{
        Banner,Nav,Shoplist
        },
    async mounted(){
       axios({url:'http://47.100.253.62:3000/api/banner'}).then((res)=>{
                     this.list = res.data.data;
                         })
    }
}
</script>
<style scoped>
    .Index{padding:49px 0;}
</style>