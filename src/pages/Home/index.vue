<template>
  <div>
    <!-- 商品分类导航 三级联动组件 全局 -->
    <TypeNav />
    <!-- 轮播图 -->
    <ListContainer />
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';

export default {
  components: {
    ListContainer
  }
}
</script>