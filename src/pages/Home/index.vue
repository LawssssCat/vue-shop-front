<template>
  <div>
    <!-- 商品分类导航 三级联动组件 全局 -->
    <TypeNav />
    <!-- 轮播图 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <TodyRecommend />
    <!-- 商品排行 -->
    <ProductRank />
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import TodyRecommend from '@/pages/Home/TodyRecommend';
import ProductRank from '@/pages/Home/ProductRank';

export default {
  components: {
    ListContainer,
    TodyRecommend,
    ProductRank,
  }
}
</script>