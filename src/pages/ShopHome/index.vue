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
    <!-- 猜你喜欢 -->
    <GuessLike />
    <!-- 楼层 -->
    <TypeFloor />
    <TypeFloor />
    <!-- 商标 -->
    <MerchantBrand />
  </div>
</template>

<script>
import ListContainer from '@/pages/ShopHome/ListContainer';
import TodyRecommend from '@/pages/ShopHome/TodyRecommend';
import ProductRank from '@/pages/ShopHome/ProductRank';
import GuessLike from '@/pages/ShopHome/GuessLike';
import TypeFloor from '@/pages/ShopHome/TypeFloor';
import MerchantBrand from '@/pages/ShopHome/MerchantBrand';

export default {
  name: 'ShopHome',
  components: {
    ListContainer,
    TodyRecommend,
    ProductRank,
    GuessLike,
    TypeFloor,
    MerchantBrand,
  }
}
</script>