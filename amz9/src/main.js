import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip=false;

//全局资源
import '../oldpage/amazeui/css/amazeui.min.css'
import './assets/default/style.css'
import '../oldpage/amazeui/js/jquery.min.js'
import router from './plugins/router'
import './plugins/axios';
//引入状态管理
import store from  './plugins/store'

//服务器资源指向
//全局 baseUrl
let config = require('../config/config')
window.baseUrl = config.baseUrl.localhost

//同步本地数据->状态仓库state
let user = localStorage.getItem('vue_user');
user && store.commit('UPDATE_USER',JSON.parse(user))


new Vue({
    router,
    store,
    render:h=>h(App),
}).$mount('#app')
