<template>
  <div>
    <!-- 商品分类导航 三级联动组件 全局 -->
    <TypeNav />
    <!-- 轮播图 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <TodyRecommend />
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import TodyRecommend from '@/pages/Home/TodyRecommend';

export default {
  components: {
    ListContainer,
    TodyRecommend
  }
}
</script>