import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入路由
import router from '@/router';

new Vue({
  render: h => h(App),
  // 注册路由： 注册后，不管是路由组件还是非路由组件都有$route、$router属性
  router,
}).$mount('#app')
