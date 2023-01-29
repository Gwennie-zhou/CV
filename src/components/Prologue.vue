<script setup>
// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.fn-top', {
    scrollTrigger: '.fn-top',
    y: -500,
    duration: 0.8
  })
  gsap.from('.fn-bottom', {
    scrollTrigger: '.fn-top',
    y: window.innerHeight,
    duration: 0.8
  })
})

</script>

<template>
  <div class="prologue-container">
    <div class="center">
      <div class="fn-top"><span class="theme-color">function</span> Welcome ( ) {
      </div>
      <div class="text-wrap">
        <div class="inline-block">
          <div class="text theme-color">alert('Welcome to my world.')</div>
        </div>
        <br/>
        <div class="inline-block">
          <div class="text theme-color">if (you know me) {</div>
        </div>
        <br/>
        <div class="inline-block">
          <div class="text theme-color indent">console.log('you know my world.')</div>
        </div>
        <br/>
        <div class="inline-block">
          <div class="text theme-color">}</div>
        </div>
      </div>
      <div class="fn-bottom">}</div>
    </div>
    <div class="down">
      <img src="@/assets/images/arrow_down.png" alt="" class="arrow-down">
    </div>
  </div>
</template>

<style lang="less" scoped>

.center {
  margin-top: 60px;
  margin-left: 50px;
  font-size: 30px;
  height: 73vh;
  .text-wrap {
    margin: 30px;
  }
  .inline-block {
    display: inline-block;
  }
  .text {
    visibility: hidden;
    font-size: 60px;
    padding: 4px;
    margin-bottom: 20px;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid transparent;
  }
  .inline-block:nth-child(1) .text {
    animation: typing 2s steps(15, end) forwards, flicker .5s 4;
    animation-delay: 0.8s;
  }
  .inline-block:nth-child(3) .text {
    animation: typing 1s steps(15, end) forwards, flicker .5s 2;
    animation-delay: 2.8s;
  }
 .inline-block:nth-child(5) .text {
    animation: typing 2s steps(15, end) forwards, flicker .5s 4;
    animation-delay: 3.8s;
  }
  .inline-block:nth-child(7) .text {
    animation: typing .5s steps(15, end) forwards, flicker 1s infinite;
    animation-delay: 5.8s;
  }
  .indent {
    padding-left: 24px;
  }

}

.down {
  font-size: 23px;
  margin-left: 60px;
  .arrow-down {
    width: 60px;
    vertical-align: middle;
    height: 60px;
    animation: shake 1s linear infinite alternate;
  }
}
@keyframes typing {
  from {
    visibility: visible;
    width: 0;
  }
  to {
    visibility: visible;
    width: 100%;
  }
}
@keyframes flicker {
  0% {
    border-right: 3px solid transparent;
  }
  50% {
    border-right: 3px solid #fff;
  }
  100% {
    border-right: 3px solid transparent;
  }
}
@keyframes shake {
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(13px)
  }
}
</style>