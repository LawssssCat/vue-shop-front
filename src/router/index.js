// 配置路由文件
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 引入路由组件 
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Error404 from '@/pages/404';

// 重写push方法，避免重复处理错误： Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/search?kw="
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, resolve, reject) {
  return originPush.call(this, location, resolve, reject || function(error) {
    if(error.message.indexOf('Avoided redundant navigation to current location:')>-1) {
      // ignore
    } else {
      throw error;
    }
  });
}

// 构建路由实例
export default new VueRouter({
  // 配置路由地址
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        isShowFooterList: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      name: 'search',
      path: '/search/:kw?',
      component: Search,
      meta: {
        isShowFooterList: true
      }
    },
    // 重定向，默认跳到首页
    {
      path: '*',
      component: Error404
    }
  ]
});
