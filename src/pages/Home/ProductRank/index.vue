<template>
  <div class="rank">
    <!-- 导航 -->
    <div class="tab">
      <div class="tab-title">
        <a
          href="######todo"
          class="on"
        >
          <p class="img">
            <i />
          </p>
          <p class="text">热卖排行</p>
        </a>
        <a
          href="######todo"
        >
          <p class="img">
            <i />
          </p>
          <p class="text">特价排行</p>
        </a>
        <a
          href="######todo"
        >
          <p class="img">
            <i />
          </p>
          <p class="text">新品排行</p>
        </a>
      </div>
    </div>
    <!-- 排名 -->
    <div class="content clearfix">
      <ul>
        <!-- 行 -->
        <li>
          <!-- 项 -->
          <div class="img-item">
            <!-- 图片 -->
            <p class="tab-picture">
              <a href="###todo">
                <img src="https://s2.loli.net/2022/11/21/CbFz8Y9qmvQPBGx.png">
              </a>
            </p>
            <!-- 信息 -->
            <div class="tab-info">
              <div class="info-title">
                <a href="###todo">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
              </div>
              <p class="info-price">
                定金：¥100.00
              </p>
            </div>
          </div>
          <div class="img-item">
            <!-- 图片 -->
            <p class="tab-picture">
              <a href="###todo">
                <img src="https://s2.loli.net/2022/11/21/CbFz8Y9qmvQPBGx.png">
              </a>
            </p>
            <!-- 信息 -->
            <div class="tab-info">
              <div class="info-title">
                <a href="###todo">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
              </div>
              <p class="info-price">
                定金：¥100.00
              </p>
            </div>
          </div>
          <div class="img-item">
            <!-- 图片 -->
            <p class="tab-picture">
              <a href="###todo">
                <img src="https://s2.loli.net/2022/11/21/CbFz8Y9qmvQPBGx.png">
              </a>
            </p>
            <!-- 信息 -->
            <div class="tab-info">
              <div class="info-title">
                <a href="###todo">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
              </div>
              <p class="info-price">
                定金：¥100.00
              </p>
            </div>
          </div>
          <div class="img-item">
            <!-- 图片 -->
            <p class="tab-picture">
              <a href="###todo">
                <img src="https://s2.loli.net/2022/11/21/CbFz8Y9qmvQPBGx.png">
              </a>
            </p>
            <!-- 信息 -->
            <div class="tab-info">
              <div class="info-title">
                <a href="###todo">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
              </div>
              <p class="info-price">
                定金：¥100.00
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@width: 1200px;
@main_back_color: #41B883;
@main_front_color: #fff;

.rank {
  width: @width;
  margin: 0 auto;
  .tab {
    margin: 0 auto;
    width: 312px;
    overflow: hidden; // 撑开
    .tab-title {
      text-align: center;
      a {
        float: left;
        display: block;
        padding: 0 18px;
        font-size: 16px;
        color: #999;
        p {
          margin: 5px 0;
        }
        .img {
          i {
            width: 35px;
            height: 35px;
            display: block;
            // margin-left: 10px;
            margin: 0 auto;
            background: url(https://s2.loli.net/2022/11/21/wYotHnDW5jsuV7l.png);
          }
        }
        .text {
          line-height: 28px;
        }
        &.on {
          color: #e60012;
          .img {
            i {
              background-position: -35px 0;
            }
          }
        }
      }
    }
  }
  .content {
    padding: 10px;
    // overflow: hidden;
    ul {
      li {
        overflow: hidden; // 撑开
        line-height: 18px;
        .img-item {
          float: left;
          width: 270px;
          overflow: hidden; // 隐藏
          margin: 0 12px 10px;
          border: 1px solid @main_back_color;
          background-color: #fff;
          box-sizing: border-box;
          .tab-picture {
            width: 230px;
            height: 210px;
            text-align: center;
            margin: 5px auto 18px;
            overflow: hidden;
            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }
          .tab-info {
            background-color: #fafafa;
            .info-title {
              height: 50px;
              line-height: 28px;
              padding-left: 10px;
              // margin: 0 auto;
              // overflow: hidden;
            }
            .info-price {
              color: #e1251b;
              font-size: 20px;
              margin: 10px auto 0;
              padding-left: 10px;
              line-height: 24px;
              height: 35px;
              // display: block;
            }
          }
        }
      }
    }
  }
}
</style>