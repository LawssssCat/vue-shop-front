<template>
  <div class="like">
    <div class="container">
      <!-- title -->
      <div class="title">
        <h3 class="fl">
          猜你喜欢
        </h3>
        <a
          href="#########todo"
          class="fr"
        >
          换一换
        </a>
      </div>
      <!-- favourate -->
      <div class="favourate">
        <ul class="favourate-list">
          <li>
            <img src="https://s2.loli.net/2022/11/21/czet1WAqM7kQIHX.png">
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="https://s2.loli.net/2022/11/21/FP4I1WXLUnh8OH5.png">
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="https://s2.loli.net/2022/11/21/quSERCP9glnmb2K.png">
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="https://s2.loli.net/2022/11/21/czet1WAqM7kQIHX.png">
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="https://s2.loli.net/2022/11/21/czet1WAqM7kQIHX.png">
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="https://s2.loli.net/2022/11/21/quSERCP9glnmb2K.png">
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuessLike'
}
</script>

<style lang="less" scoped>
@width: 1200px;
@text_front_color: #666;
@border_color: #e4e4e4;

.like {
  margin-top: 15px;
  .container {
    width: @width;
    margin: 0 auto;
    @line_height: 30px;
    .title {
      overflow: hidden; // 撑开
      .fl {
        float: left;
        font-size: 20px;
        line-height: @line_height;
      }
      .fr {
        float: right;
        background-image: url(https://s2.loli.net/2022/11/21/dwyO4BtDx7kCaQP.png);
        background-position: 182px -104px;
        width: 66px;
        height: 25px;
        line-height: @line_height;
        font-weight: 400;
        color: @text_front_color;
        // text-decoration: none;
      }
    }
    .favourate {
      .favourate-list {
        border: 1px solid @border_color;
        display: flex;
        padding: 0;
        li {
          height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          width: 16.667%;
          background-color: #fff;
          img {
            width: 142px;
            height: 142px;
            transition: all 400ms;
            &:hover {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }
          .like-text {
            padding: 0 10px;
            // width: 142px;
            border-right: 1px solid @border_color;
            p {
              margin: 5px 0;
            }
            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              // font-weight: 700;
            }
          }
          &:last-child {
            .like-text {
              border-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
