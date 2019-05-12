<template>
 <form :class="['am-form','loginform']">
            <img src="../assets/default/jiantou.png" class="jiantou" @click="goback"/>
            <div :class="['am-form-group','am-form-icon']">
                <i class="am-icon-user" style="color:#329cd9"></i>
                <input type="text" :class="['am-form-field','my-radius']" placeholder="请输入您的用户名" v-model="username">
            </div>
            <div :class="['am-form-group','am-form-icon']">
                <i class="am-icon-lock" style="color:#329cd9"></i>
                <input type="password" :class="['am-form-field','my-radius']" placeholder="请输入您的密码" v-model="password">
            </div>
            <div class="am-checkbox">
              <label>
                <input type="checkbox"> 记住密码
              </label>
            </div>
            <p class="am-text-center"><button :class="['am-btn','am-btn-danger','am-radius','am-btn-block']" @click="login">立即登录</button></p>
        </form>
</template>
<script>
// import { mapActions } from 'vuex';
// import { mapGetters } from 'vuex'
export default {
  name:'login',
  data(){
    return {
      username:'',
      password:'',
      error:false
    }
  },
  methods:{
     goback(){
      this.$router.go(-1)
    },
    login(){
      this.$store.dispatch(
        'UPDATE_USER',
        {
          username:this.username,
          password:this.password
        }
      ).then(
        data => {
          //同步一份到本地
          if(data.error==0){
            localStorage.setItem('vue_user',JSON.stringify(data));
            this.$router.push('/shoppingcar')
          }else{
            this.error = true
          }
        
        }
      )
    }
  }
}
</script>
<style scoped>
   .loginform{padding-top:59px;position: relative;}
   .loginform .jiantou{width:24px;height:24px;position:absolute;left:10px;top:15px;}
</style>