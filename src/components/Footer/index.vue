<template>
  <!-- 底部 -->
  <footer class="footer">
    <div class="container">
      <!-- 底部列表 -->
      <div v-show="isShowFooterList" class="footerList">
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>配送方式</h4>
          <ul class="footerItemCon">
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付方式</h4>
          <ul class="footerItemCon">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>售后服务</h4>
          <ul class="footerItemCon">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>特色服务</h4>
          <ul class="footerItemCon">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          <img
            src="../../assets/logo.png"
            alt="helpCenter"
          >
        </div>
      </div>
      <!-- 底部声明 -->
      <div class="copyright">
        <ul class="helpLink">
          <li>
            关于我们
            <span class="space" />
          </li>
          <li>
            关于我们
            <span class="space" />
          </li>
          <li>
            关于我们
            <span class="space" />
          </li>
          <li>
            关于我们
            <span class="space" />
          </li>
          <li>
            关于我们
            <span class="space" />
          </li>
          <li>
            关于我们
            <span class="space" />
          </li>
          <li>
            关于我们
            <span class="space" />
          </li>
          <li>
            关于我们
            <span class="space" />
          </li>
          <li>
            关于我们
          </li>
        </ul>
        <p>地址：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>？AAAA备00000000号</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    isShowFooterList() {
      // 可以根据组件身上的$route获取当前路由的信息，但是不好！
      // return this.$route.path==='/home' || this.$route.path==='/search' 
      // 通过路由元信息进行判断更好
      return this.$route.meta.isShowFooterList;
    }
  }
}
</script>

<style lang="less" scoped>
@background_color: #eaeaea;
@width: 1200px;

.footer {
  background-color: @background_color;
  .container {
    margin: 0 auto; // 居中
    width: @width;
    padding: 0 15px;
    .footerList {
      padding: 20px;
      overflow: hidden; // 撑开
      .footerItem {
        width: 16.6666%;
        float: left;
        h4 {
          font-size: 14px;
        }
        .footerItemCon {
          li {
            line-height: 18px;
          }
        }
        &:last-child img {
          width: 100px;
        }
      }
    }
    .copyright {
      padding: 20px;
      .helpLink {
        text-align: center;
        li {
          display: inline;
          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            margin: 8px 10px;
          }
        }
      }
      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>
