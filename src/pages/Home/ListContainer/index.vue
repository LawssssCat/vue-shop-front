<template>
  <div class="list-container">
    <div class="sortList">
      <div class="center">
        <!-- banner轮播图 -->
        <div class="swiper-container">
          <div class="swiper-slide">
            <img src="https://s2.loli.net/2022/11/21/HIKiDJ2XUx6L85C.png" />
          </div>
          <!-- <div class="swiper-slide">
            <img src="https://s2.loli.net/2022/11/21/9p5hN4eOAg8GSly.png">
          </div>
          <div class="swiper-slide">
            <img src="https://s2.loli.net/2022/11/21/J5CK1u6LoW9ldtz.png">
          </div> -->
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" />
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" />
          <div class="swiper-button-next" />
        </div>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">todo？？？快报</em>
            <span class="fr">更多 ></span>
          </h4>
          <div class="clearfix" />
          <ul class="news-list">
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item" />
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="https://s2.loli.net/2022/11/21/eqVANkD4FYcEPOl.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@width: 1200px;
@height: 464px;
@left: 210px;
@center_width: 740px;
@padding_top: 5px;
@border_color: #e4e4e4;

.list-container {
  width: @width;
  margin: 0 auto; // 居中

  .sortList {
    height: @height;
    padding-left: @left;
    .center {
      float: left;
      box-sizing: border-box;
      width: @center_width;
      height: 100%;
      padding: @padding_top;
    }
    .right {
      float: left;
      width: (@width - @left - @center_width); // 250px
      .news {
        @margin_x: 5px;
        @padding_x: 10px;
        border: 1px solid @border_color;
        margin-top: @padding_top;
        h4 {
          border-bottom: 1px solid @border_color;
          margin: 5px @margin_x 0;
          padding: 5px @padding_x;
          line-height: 22px;
          font-size: 14px;
          overflow: hidden;
          .fl {
            float: left;
          }
          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }
        .news-list {
          padding: 5px (@padding_x + @margin_x);
          line-height: 26px;
          .bold {
            font-weight: 700;
          }
        }
      }
      .lifeservices {
        display: flex;
        flex-wrap: wrap;
        border-left: 1px solid @border_color;
        // overflow: hidden;
        .life-item {
          @item_url: "https://s2.loli.net/2022/11/21/dwyO4BtDx7kCaQP.png";
          border-bottom: 1px solid @border_color;
          border-right: 1px solid @border_color;
          cursor: pointer;
          width: 25%;
          height: 65px;
          box-sizing: border-box;
          text-align: center;
          .list-item {
            background-image: url(@item_url);
            display: block;
            // width: 61px;
            height: 40px;
          }
          .service-intro {
            line-height: 22px;
            // width: 60px;
            // display: block;
          }
          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }
      .ads {
        margin-top: 5px;
        img {
          opacity: 0.8;
          transition: all 400ms;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
