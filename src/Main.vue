<script setup>
import Header from './components/Header.vue';
import Prologue from './components/Prologue.vue';
import PersonalInfo from './components/PersonalInfo.vue'
import Skill from './components/Skill.vue'
import Experience from "./components/Experience.vue";
import OpenSourceProject from "./components/OpenSourceProject.vue";
import Blog from './components/Blog.vue'
// import SelfEvaluation from "./components/SelfEvaluation.vue";

import { onMounted, ref, reactive } from 'vue';

// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const isOpen = ref(false)

let sections = undefined

onMounted(() => {
  sections = gsap.utils.toArray('.hidden-float')
  hiddenFloat()
})

function contactMe() {
  isOpen.value = true
  document.body.style.overflow = 'hidden' // 禁止页面滚动
}

function close() {
  isOpen.value = false
  document.body.style.overflow = ''
}

const hiddenFloat = () => {
  sections.forEach(item => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 40%',
      toggleClass: {
        targets: '.floating-btn',
        className: 'hidden'
      }
    })
  })
}
</script>

<template>
  <div class="main-container">
    <Header />
    <Prologue />

    <PersonalInfo class="hidden-float" />
    <div class="hr"></div>
    <Skill />
    <div class="hr"></div>
    <Experience />
    <div class="hr"></div>

    <Blog />
    <OpenSourceProject class="hidden-float" />

    <!-- <SelfEvaluation /> -->

    <!-- 弹窗按钮 -->
    <div class="floating-btn" @click="contactMe">
      <img src="@/assets/images/floating_btn.png" alt="">
      <span class="contact">联系我~</span>
    </div>

    <!-- 弹窗  -->
    <Teleport to="body">
      <div v-show="isOpen" class="modal"></div>
      <div v-show="isOpen" class="popup">
        <img src="@/assets/images/envelope.png" alt="">
        <div class="way">
          <div class="wechat">微信ID：RH_MissZhou</div>
          <div>邮箱：Gwennie_zhou@126.com</div>
        </div>
        <div class="close" @click="close">x</div>
      </div>
    </Teleport>
  </div>
</template>

<style lang="less" scoped>
.main-container {
  width: 100%;

  .floating-btn {
    z-index: 100;
    position: fixed;
    bottom: 27px;
    right: 50px;
    cursor: pointer;

    .contact {
      position: absolute;
      top: 30%;
      left: 27%;
      transform: skew(-15deg, 2deg);
      z-index: 10;
      color: #00ff91;
      animation: blink 1s linear infinite;
    }
  }
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  30% {
    opacity: 0.5;
  }

  60% {
    opacity: 0;
  }
}
</style>

<style lang="less">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 199;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 7%, .65);
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
  width: 560px;
  height: 420px;

  .way {
    position: absolute;
    top: 30%;
    left: 20%;
    color: black;
    font-size: 22px;

    .wechat {
      padding-bottom: 5px;
    }
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid white;
    font-size: 45px;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
  }
}
</style>