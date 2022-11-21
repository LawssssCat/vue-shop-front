<template>
  <div class="today-recommend">
    <div class="container">
      <ul class="recommend">
        <li class="clock">
          <div class="time">
            <img src="https://s2.loli.net/2022/11/21/S9BzQgCxZ3YG4t5.png">
            <h3>今日推荐</h3>
          </div>
        </li>
        <li class="banner">
          <img src="https://s2.loli.net/2022/11/21/juWYgLscyOZpC56.png">
        </li>
        <li class="banner">
          <img src="https://s2.loli.net/2022/11/21/kWa2sKd5RLABQoe.png">
        </li>
        <li class="banner">
          <img src="https://s2.loli.net/2022/11/21/aytAnjT3OY4S6rh.png">
        </li>
        <li class="banner">
          <img src="https://s2.loli.net/2022/11/21/CoKN71MARf2IW5l.png">
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@width: 1200px;
@back_color: #eaeaea;
@clock_back_color: #5c5251;
@clock_front_color: #fff;

.today-recommend {
  .container {
    width: @width;
    margin: 0 auto;
    .recommend {
      display: flex;
      height: 165px;
      margin: 10px 0;
      background-color: @back_color;
      .clock {
        width: 16.67%;
        background-color: @clock_back_color;
        color: @clock_front_color;
        // font-size: 18px;
        text-align: center;
        .time {
          padding: 30px 0;
        }
        h3 {
          margin: 9px 0;
          font-weight: 700;
          font-size: 18px;
          line-height: 30px;
        }
      }
      .banner {
        img {
          transition: all 400ms;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>