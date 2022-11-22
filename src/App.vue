<template>
  <div id="app">
    <ShopHeader />
    <!-- 路由组件出口 -->
    <router-view />
    <ShopFooter />
  </div>
</template>

<script>
import ShopHeader from './components/ShopHeader';
import ShopFooter from './components/ShopFooter';

export default {
  name: 'App',
  components: {
    ShopHeader,
    ShopFooter,
  }
}
</script>

<style lang="less">
</style>
