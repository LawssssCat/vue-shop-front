<template>
  <div>
    todo搜索
    <h4>params kw: {{ $route.params.kw }}</h4>
    <h4>query kw: {{ $route.query.kw }}</h4>
  </div>
</template>

<script>
export default {
  name: 'ShopSearch'
}
</script>