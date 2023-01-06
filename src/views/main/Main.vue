<script setup>
import { gsap } from "gsap";

import Prologue from './components/Prologue.vue';
import PersonalInfo from './components/PersonalInfo.vue'
import Skill from './components/Skill.vue'
import Experience from "./components/Experience.vue";
import OpenSourceProject from "./components/OpenSourceProject.vue";
import Blog from './components/Blog.vue'
import SelfEvaluation from "./components/SelfEvaluation.vue";

import { ref } from 'vue';

const isOpen = ref(false)

function move(e) {
  gsap.to('.cursor', 1, {
    top: e.clientY,
    left: e.clientX
  })
}

function contactMe() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}
</script>

<template>
  <div class="main-container">
    <Prologue />

    <div class="cursor-wrap" @mousemove="move">
      <PersonalInfo />
      <Skill />
      <Experience />
      <div class="cursor"></div>
    </div>
    <OpenSourceProject />
    <Blog />
    <SelfEvaluation />

    <!-- 弹窗按钮 -->
    <div class="floating-btn" @click="contactMe">
      <img src="@/assets/images/floating_btn.png" alt="">
      <span class="contact">联系我~</span>
    </div>

    <!-- 弹窗  -->
    <Teleport to="body">
      <div v-if="isOpen" class="modal"></div>
      <div v-if="isOpen" class="popup">
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
  .cursor-wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .cursor {
    z-index: -1;
    position: absolute;
    top: 20%;
    left: 85%;
    width: 800px;
    height: 1300px;
    margin: 0 0 0.1px;
    object-fit: contain;
    border-radius: 100%;
    filter: blur(200px);
    background-image: radial-gradient(circle at 50% 50%, #00ff91, rgba(0, 214, 122, 0));
    will-change: left, top;
    transition: all 0.5s;
  }
  .floating-btn {
    z-index: 100;
    position: fixed;
    bottom: 10px;
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
  0%, 100% {
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
  background: #394047;
  opacity: .5;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%,-50%);
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