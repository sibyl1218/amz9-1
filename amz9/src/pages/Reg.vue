<template>
 	<form :class="['am-form','regform']">
           <img src="../assets/default/jiantou.png" class="jiantou" @click="goback"/>
            <div :class="['am-form-group','am-form-icon']">
                <i class="am-icon-user" style="color:#329cd9"></i>
                <input v-validate="'max:4'" data-vv-as="field" name="max_field" type="text" :class="['am-form-field','my-radius']" v-model="username" placeholder="请输入您的用户名">
            </div>
            <div :class="['am-form-group','am-form-icon']">
                <i class="am-icon-lock" style="color:#329cd9"></i>
                <input v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password'),'am-form-field':true,'my-radius':true}" v-model="password" placeholder="请输入密码" ref="password">
                <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>

            </div>
            <div :class="['am-form-group','am-form-icon']">
                <i class="am-icon-lock" style="color:#e9c740"></i>
                <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation'),'am-form-field':true,'my-radius':true}" placeholder="请重复输入密码" data-vv-as="password">
                <span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>
            </div>          
            <div class="am-checkbox">
              <label>
                <input type="checkbox"> 我已阅读并同意<a href="#">《协议》</a>
              </label>
            </div>
            <p class="am-text-center"><button :class="['am-btn','am-btn-danger','am-radius','am-btn-block']" @click="reg">立即注册</button></p>
        </form>
</template>
<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
export default {
  // name:reg,
  data(){
    return{
       username:'',
       password:''
    }
   
  },
  mounted() {
    // window.onpopstate = function(event) {
  
    //   // location.href = "https://www.baidu.com";
    // };

  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
    goLogin() {
      history.pushState({ page: 1 }, "title 1", "login");
      history.back()
      history.go(2)
    },
    reg(){
      this.$store.dispatch(
        'UPDATE_REG',
        {
          username:this.username,
          password:this.password
        }
      ).then(  
          ()=>{  
            let formData=new FormData();
            formData.append("username",this.username);
            formData.append("password",this.password);
            let request = new XMLHttpRequest();
            request.open("POST", "http://localhost:3000/api/reg");
            request.send(formData);
            this.$router.push('/login');
          }
      )
    }
  }
};
</script>

<style scoped>
    .regform{padding-top:59px;position: relative;}
   .regform .jiantou{width:24px;height:24px;position:absolute;left:10px;top:15px;}
</style>
