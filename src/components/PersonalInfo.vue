<script setup>
// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { onMounted, ref } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.create({
    trigger: '.per-info-container',
    start: 'top 20%',
    toggleClass: {
      targets: ".rectangle", 
      className: "extend",
    },
    markers: true
  })

  gsap.from('.headline', {
    y: '-50%',
    duration: 0.5,
    delay: 0.3,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: '.per-info-container',
      start: 'top 20%',
      toggleActions: 'restart none none none'
    },
  })
}) 

</script>

<template>
  <div class="per-info-container">
    <div class="headline-wrap">
      <div class="headline">Welcome to the personal information module!</div>
      <div class="rectangle"></div>
    </div>

    <!-- <div class="card-wrap">
      <img src="@/assets/images/card.jpg" alt="" class="card-img">
      <div class="info">
        <div class="left">
          <div class="name">周蓉欢</div>
          <div>前端开发工程师</div>
        </div>
        <ul class="right">
          <li>出生年月：1998.06</li>
          <li>目前居住地：深圳</li>
          <li>学历：本科（全日制）</li>
          <li>就读于：韩山师范学院</li>
          <li>入学年份：2017-2021</li>
          <li>专业：信息管理与信息系统</li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<style lang="less" scoped>
.per-info-container {
  position: relative;
  border-top: 1px solid #707070;
  background: url('../assets/images/hacker_bg.webp') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  .headline-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .headline {
      color: white;
      font-size: 60px;
      text-align: center;
      margin-bottom: 10px;
    }
    .rectangle {
      width: 60vw;
      height: 15px;
      background: white;
      transform: scaleX(0);
      transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .extend {
      transform: scaleX(1); //scaleX将会从原点向两边扭曲一定程度
    }
  }
  .card-wrap {
    position: relative;
    box-shadow: 0 0 20px 0px #00d67a;
    width: 650px;
    height: 400px;
    .info {
      position: absolute;
      top: 30%;
      left: 15%;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      .left {
        margin-right: 50px;
        border-right: 1px solid white;
        padding-right: 40px;
        .name {
          font-size: 30px;
          padding-bottom: 10px;
        }
      }
      .right {
        font-size: 22px;
        li {
          padding-bottom: 8px;
        }
      }
    }
  }
  
}
.active {
  transform: scale(5) !important;
  filter: blur(3px);
}
</style>