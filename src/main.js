/*
入口JS
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el:'#app',
  render:h => h(App),
  // render:function (h){
  //   return h(App);
  // },
  router
})
