<script setup></script>

<template>
  <div class="open-source-pro-container">
    <div class="title">个人项目</div>
    <div class="project">
      <div class="name">lucky</div>
      <div class="desc">使用原生JS开发的表白程序，因为之前是做营销相关产品的开发，因此融合了一点营销的思维。程序一共分为3关小游戏，第一关是结合了营销中红包雨思想做的爱心雨闯关小游戏，第二关是石头剪刀布游戏，第三关是我画你猜游戏，最后采用营销中刮刮乐的方式表白，成功追到我男朋友了哈哈。</div>
      <div>项目地址：<a href="https://github.com/Gwennie-zhou/lucky"  target="_blank">https://github.com/Gwennie-zhou/lucky</a></div>
    </div>
    <div class="project">
      <div class="name">CDNLoader</div>
      <div class="desc">使用原生JS技术，基于原先工作中“营销微组件一期拆分项目”开发的简化版CDN加载器。</div>
      <div>项目地址：<a href="https://github.com/Gwennie-zhou/CDNLoader"  target="_blank">https://github.com/Gwennie-zhou/CDNLoader</a></div>
      <div>中文说明文档：<a href="https://medium.com/@gwennie.io/%E5%BE%AE%E7%BB%84%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%99%A8%E5%8E%9F%E7%90%86%E4%B8%8E%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0-c4cee176e0e8" target="_blank">微组件加载器原理与代码实现</a></div>
      <div>英文说明文档：<a href="https://medium.com/@gwennie.io/cdnloader-principle-and-code-implementation-b792318f59d4" target="_blank">CDNLoader Principle and Code Implementation</a></div>
    </div>
    <div class="project">
      <div class="name">CV</div>
      <div class="desc">使用Vue3框架开发的个人在线简历网站</div>
      <div>项目地址：<a href="xxx"  target="_blank">xxx（待补充）</a></div>
    </div>
    <div class="project">
      <div class="name">BingDwenDwen</div>
      <div class="desc">使用纯CSS绘制的冰墩墩图案</div>
      <div>项目地址：<a href="https://github.com/Gwennie-zhou/BingDwenDwen"  target="_blank">https://github.com/Gwennie-zhou/BingDwenDwen</a></div>
      <div>英文说明文档：<a href="https://medium.com/@gwennie.io/send-you-a-bingdwendwen-drawn-with-css-acc063dc7558" target="_blank">https://medium.com/@gwennie.io/send-you-a-bingdwendwen-drawn-with-css-acc063dc7558</a></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.open-source-pro-container {
  display: flex;
  width: 120%;
  height: 80vh;
  padding: 40px;
  .title {
    font-weight: 700;
    font-size: 28px;
    margin-top: 40px;
    margin-right: 40px;
    writing-mode: tb-rl;
    letter-spacing: 110px;
  }
  .project {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 400px;
    height: 450px;
    background: white;
    transform: skewX(355deg);
    border-radius: 5%;
    box-shadow: 0 0 10px 3px #00ff91;
    color: black;
    font-size: 18px;
    padding: 20px;
    margin: 0 20px;
    .name {
      font-size: 24px;
    }
    .desc {
      color: #787878;
    }
    a {
      color: #64d1a2;
    }
  }
  .project:nth-child(odd) {
    margin-top: 120px;
  }
}
</style>