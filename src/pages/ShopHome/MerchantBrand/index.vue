<template>
  <div class="brand">
    <div class="container">
      <ul class="brand-list">
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/oHMRiSOsYfKqxdG.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/dTXHGwz4vVSMPc1.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/kxb2FdZ4DwMosui.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/RS8ewZPDW3axsFX.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/VC476Ow5uLx3tMq.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/ZtYJSIMNfbGs4zW.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/CQVWR1mEOBDu4Pi.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/lqaRD1SsgvFYOKe.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/pBdFNKDIqLez7C9.png">
        </li>
        <li class="brand-item">
          <img src="https://s2.loli.net/2022/11/22/crR6w3aE5FjsSTZ.png">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchantBrand'
}
</script>

<style lang="less" scoped>
@width: 1200px;

.brand {
  margin: 10px 0;
  .container {
    width: @width;
    margin: 0 auto;
    .brand-list {
      overflow: hidden;
      background: #f7f7f7;
      line-height: 18px;
      padding: 15px 0;
      .brand-item {
        float: left;
        width: 120px;
        height: 37px;
        img {
          padding: 0 10px;
          border-left: 1px dotted #ccc;
        }
        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>