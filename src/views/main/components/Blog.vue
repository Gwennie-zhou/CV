<script setup></script>

<template>
  <div class="blog-container">
    <div class="left">
      <div class="title">&lt;blog</div>
      <div class="platform">medium平台</div>
      <div class="vpn">需VPN</div>
    </div>
    <div class="right">
      <ul>
        <li>
          <div>
            <div class="theme-color">文章1</div>
            <div class="name">中国区用户如何使用ChatGPT？</div>
            <div class="time">2022.12</div>
          </div>
          <div class="arrow">/&gt;</div>
        </li>
        <li>
          <div>
            <div class="theme-color">文章2</div>
            <div class="name">CDNLoader Principle and Code Implementation</div>
            <div class="time">2022.11</div>
          </div>
          <div class="arrow">/&gt;</div>
        </li>
        <li>
          <div>
            <div class="theme-color">文章3</div>
            <div class="name">Pure JS Coding Challenge01 — Double-color-ball Lottery</div>
            <div class="time">2022.9</div>
          </div>
          <div class="arrow">/&gt;</div>
        </li>
      </ul>
      <div class="more">更多+</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.blog-container {
  display: flex;
  width: 100%;
  height: 60vh;
  padding: 40px;
  .left {
    width: 40%;
    margin-top: 40px;
    padding-left: 20px;
    .title {
      font-weight: 700;
      font-size: 50px;
    }
    .platform {
      margin-top: 24px;
      color: #00d67a;
      font-size: 26px;
    }
    .vpn {
      font-size: 22px;
      color: #999999;
      margin-top: 10px;
    }
  }
  .right {
    flex: 1;
    margin-left: 40px;
    ul>li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 0;
      border-bottom: 1px solid #d5d5d5;
      .name {
        margin-top: 10px;
        font-size: 20px;
        font-weight: 700;
      }
      .time {
        font-size: 16px;
        margin-top: 16px;
        color: #999999;
      }
      .arrow {
        font-size: 24px;
        font-weight: 700;
      }
    }
    .more {
      width: 100%;
      margin-top: 22px;
      text-align: center;
      font-size: 16px;
    }
  }
}
</style>