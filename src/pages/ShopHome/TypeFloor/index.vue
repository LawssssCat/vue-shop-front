<template>
  <div class="floor">
    <div class="container">
      <!-- title -->
      <div class="title clearfix">
        <h3 class="fl">
          家用电器
        </h3>
        <div class="fr">
          <ul class="nav-tabs">
            <li class="active">
              <a href="#tab1">热门</a>
            </li>
            <li>
              <a href="#tab2">大家电</a>
            </li>
            <li>
              <a href="#tab3">生活电器</a>
            </li>
            <li>
              <a href="#tab4">厨房电器</a>
            </li>
            <li>
              <a href="#tab5">应季电器</a>
            </li>
            <li>
              <a href="#tab6">空气/净水</a>
            </li>
            <li>
              <a href="#tab7">高端电器</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- content -->
      <div class="tab-content">
        <div class="tab-panel">
          <!-- panel item -->
          <div class="blockgary">
            <ul class="jd-list">
              <li>节能补贴</li>
              <li>4K电视</li>
              <li>空气净化器</li>
              <li>IH电饭煲</li>
              <li>滚筒洗衣机</li>
              <li>电热水器</li>
            </ul>
            <img src="https://s2.loli.net/2022/11/22/8cdzyFKVq7LsHOT.png">
          </div>
          <!-- panel item -->
          <div class="floorBanner">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://s2.loli.net/2022/11/22/HdYxcM5PWqLSye6.png">
                </div>
                <!-- <div class="swiper-slide">
                  <img src="https://s2.loli.net/2022/11/22/vRMcDiWzxfblBPK.png">
                </div>
                <div class="swiper-slide">
                  <img src="https://s2.loli.net/2022/11/22/9IfKZNLGQUasXpR.png">
                </div> -->
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination" />
              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev" />
              <div class="swiper-button-next" />
            </div>
          </div>
          <!-- panel item -->
          <div class="split">
            <div class="floor-conver-pit">
              <img src="https://s2.loli.net/2022/11/22/cjEO8RuF6BsgQab.png">
            </div>
            <div class="floor-conver-pit">
              <img src="https://s2.loli.net/2022/11/22/DhpPzAYTeS8IkGw.png">
            </div>
          </div>
          <div class="split center">
            <img src="https://s2.loli.net/2022/11/22/CtUnv1hGrus379M.png">
          </div>
          <div class="split">
            <div class="floor-conver-pit">
              <img src="https://s2.loli.net/2022/11/22/fjFvEs2kxzr9QCi.png">
            </div>
            <div class="floor-conver-pit">
              <img src="https://s2.loli.net/2022/11/22/XoTO1yLCHfN7Rz2.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeFloor'
}
</script>

<style lang="less" scoped>
@width: 1200px;
@main_back_color: #41B883;
@main_front_color: #fff;
@border_color: #e4e4e4;

.floor {
  margin-top: 15px;
  .container {
    width: @width;
    margin: 0 auto; // 居中
    .title { // 标题
      .fl {
        float: left;
        color: @main_back_color;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        margin: 9px 0;
      }
      .fr {
        float: right;
        .nav-tabs {
          margin: 10px 0 0;
          // display: inline-block;
          li {
            float: left;
            line-height: 18px;
            a {
              padding-top: 1px;
              // font-weight: 400;
              background-color: #fff;
              &::after {
                content: "|";
                padding: 0 10px;
              }
            }
            &.active {
              a {
                color: @main_back_color;
              }
            }
          }
        }
      }
    }
    .tab-content {
      border-top: 2px solid @main_back_color;
      border-bottom: 1px solid @border_color;
      .tab-panel {
        height: 360px;
        display: flex;
        .blockgary {
          width: 210px;
          // height: 100%;
          background-color: #f7f7f7;
          .jd-list {
            padding: 15px 0;
            overflow: hidden; // 撑开
            li {
              box-sizing: border-box;
              float: left;
              padding: 0 10px;
              width: 50%;
              text-align: center;
              line-height: 26px;
              border-bottom: 1px solid @border_color;
            }
          }
          img {
            width: 100%;
          }
        }
        .floorBanner {
          width: 330px;
          height: 100%;
        }
        .split {
          width: 220px;
          height: 100%;
          // box-sizing: border-box;
          .floor-conver-pit {
            width: 100%;
            height: 50%;
            img {
              width: 100%;
              height: 100%;
              transition: all 400ms;
              &:hover {
                opacity: 0.8;
              }
            }
            &:last-child {
              border-top: 1px solid @border_color;
            }
          }
          &.center {
            border-left: 1px solid @border_color;
            border-right: 1px solid @border_color;
          }
        }
      }
    }
  }
}
</style>