<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>todo？？？欢迎您!</p>
          <p>
            <span>请</span>
            <router-link
              to="/login"
              class="login"
            >
              <!-- 路由 声明式导航 -->
              登录
            </router-link>
            <router-link
              to="/register"
              class="register"
            >
              免费注册
            </router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###todo">我的订单</a>
          <a href="###todo">我的购物车</a>
          <a href="###todo">我的todo？？？</a>
          <a href="###todo">todo？？？会员</a>
          <a href="###todo">企业采购</a>
          <a href="###todo">关注todo？？？</a>
          <a href="###todo">合作招商</a>
          <a href="###todo">商家后台</a>
        </div>
      </div>
    </div>
    <!-- 头部第二行 搜索区域 -->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link
          class="logo"
          title="todo??????"
          to="/home"
          target="_blank"
        >
          <img
            src="../../assets/logo.png"
            alt="logo"
          >
        </router-link>
      </h1>
      <div class="searchArea">
        <form
          action="###todo"
          class="searchForm"
          @keyup.enter="getSearch"
        >
          <input
            id="autocomplete"
            v-model="searchPattern"
            type="text"
            class="input-error input-xxlarge"
          >
          <button
            type="button"
            class="sui-btn btn-xlarge btn-danger"
            @click="getSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ShopHeader',
  data() {
    return {
      searchPattern: ''
    }
  },
  methods: {
    getSearch(event) {
      // 路由传递参数：
      // 1. 字符串形式
      // this.$router.push('/search/'+this.searchPattern+'?kw='+this.searchPattern.toUpperCase());
      // 2. 对象形式
      this.$router.push({
        name: 'search',
        params: {
          kw: this.searchPattern || undefined
        },
        query: {
          kw: this.searchPattern.toUpperCase()
        },
      });
    }
  }
}
</script>

<style lang="less" scoped>
@background_color: #eaeaea;
@border_color: #b3aeae;
@main_back_color: #41B883;
@main_front_color: #fff;
@height: 30px;
@width: 1200px;

.header {
  & > .top {
    background-color: @background_color;
    height: @height;
    line-height: @height;
    .container {
      margin: 0 auto;
      overflow: hidden;
      width: @width;
      .loginList {
        float: left;
        p {
          float: left;
          margin-right: 10px;
          .register {
            padding: 0 5px;
            margin-left: 5px;
            border-left: 1px solid @border_color;
          }
        }
      }
      .typeList {
        float: right;
        a {
          padding: 0 10px;
          &+a {
            border-left: 1px solid @border_color;
          }
        }
      }
    }
  }

  & > .bottom {
    width: @width;
    margin: 0 auto;
    overflow: hidden; // 撑开
    .logoArea {
      float: left;
      .logo {
        img {
          width: 100px;
          margin: 25px 45px;
        }
      }
    }
    .searchArea {
      float: right;
      margin-top: 35px;
      .searchForm {
        @height: 32px;
        overflow: hidden; // 撑开
        input {
          box-sizing: border-box; // css中width和height设置的是盒子的最终的宽高
          width: 490px;
          height: @height;
          padding: 0px 4px;
          border: 2px solid @main_back_color;
          float: left;
          &:focus {
            outline: none;
          }
        }
        button {
          background-color: @main_back_color;
          color: @main_front_color;
          height: @height;
          width: 68px;
          border: none;
          float: left;
          cursor: pointer;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
