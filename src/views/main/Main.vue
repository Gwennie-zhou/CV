<script setup>
import { gsap } from "gsap";

import Prologue from './components/Prologue.vue';
import PersonalInfo from './components/PersonalInfo.vue'
import Skill from './components/Skill.vue'
import Experience from "./components/Experience.vue";
import OpenSourceProject from "./components/OpenSourceProject.vue";
import Blog from './components/Blog.vue'

import { ref } from 'vue';

function move(e) {
  gsap.to('.cursor', 1, {
    top: e.clientY,
    left: e.clientX
  })
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
}
</style>