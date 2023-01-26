<template>
  <div class="warp">
    <div class="header">
      <div class="left">
        <img src="@/assets/images/profile.jpg" alt="" />
        <div class="me">
          <div class="name">周蓉欢</div>
          <div class="job">前端开发工程师</div>
        </div>
      </div>
      <ul class="tag">
        <li v-for="(item, i) in tags" :key="i" @click="jump(item.className)">
          {{ item.tag }}
        </li>
      </ul>
    </div>

    <Prologue />

    <PersonallInfoTemp />

    <div class="hr"></div>

    <Skill />

    <div class="hr"></div>

    <WorkExperience />

    <div class="hr"></div>

    <ProjectExperience />
    
    <Blog />

    <OpenSourceProject class="hidden-float" />

    <SelfEvaluation />
  </div>
</template>

<script setup>
// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { onMounted, reactive } from "vue";
import Prologue from "./components/Prologue.vue";
import PersonallInfoTemp from "./components/PersonallInfoTemp.vue";
import Skill from "./components/Skill.vue";
import WorkExperience from "./components/WorkExperience.vue";
import ProjectExperience from "./components/ProjectExperience.vue";
import Blog from './components/Blog.vue'
import OpenSourceProject from "./components/OpenSourceProject.vue";
import SelfEvaluation from "./components/SelfEvaluation.vue";
gsap.registerPlugin(ScrollTrigger);

// 横向滚动
const triggerHrScroll1 = () => {
  gsap.to(".red", {
    x: -document.querySelector(".red").offsetWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".red", //触发滚动的元素
      start: "top top", // 当触发器的顶部碰到视口的顶部时
      end: () => "+=" + document.querySelector(".red").offsetWidth, // 滚动条结束的位置
      pin: true, // 在执行滚动动画时固定触发器元素
      scrub: true, // 触发器与滚动条绑定
      markers: true, // 开发时的便于查看的标记
    },
  });
};
const triggerHrScroll2 = () => {
  gsap.to(".green1", {
    x: -document.querySelector(".green1").offsetWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".green1", //触发滚动的元素
      start: document.querySelector(".red").offsetWidt, // 当触发器的顶部碰到视口的顶部时
      end: () => "+=" + document.querySelector(".green1").offsetWidth, // 滚动条结束的位置
      pin: true, // 在执行滚动动画时固定触发器元素
      scrub: true, // 触发器与滚动条绑定
      markers: true, // 开发时的便于查看的标记
    },
  });
};

const triggerHrScroll3 = () => {
  gsap.to(".red", {
    x: -document.querySelector(".red").offsetWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".red", //触发滚动的元素
      start: "top top", // 当触发器的顶部碰到视口的顶部时
      end: () => "+=" + document.querySelector(".red").offsetWidth, // 滚动条结束的位置
      pin: true, // 在执行滚动动画时固定触发器元素
      scrub: true, // 触发器与滚动条绑定
      markers: true, // 开发时的便于查看的标记
    },
  });
};

const tags = reactive([
  {
    tag: "个人信息",
    className: "per-info-container",
  },
  {
    tag: "专业技能",
    className: "skill-container",
  },
  {
    tag: "工作经历",
    className: "work-container",
  },
  {
    tag: "项目经验",
    className: "project-container",
  },
  {
    tag: "个人项目",
    className: "open-source-pro-container",
  },
  {
    tag: "博客文章",
    className: "blog-container",
  },
  {
    tag: "个人评价",
    className: "evaluation-container",
  },
]);

function jump(className) {
  document.querySelector(`.${className}`).scrollIntoView();
}

onMounted(() => {});
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.warp {
  width: 100vw;
  overflow: hidden;
}

.scroll-box {
  height: 100vh;
  width: 300vw;
}

.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
.black {
  background-color: black;
}
.yellow {
  background-color: yellow;
}

.container {
  display: flex;
  width: 400vw;
}
.box {
  width: 100vw;
  height: 100vh;
}

.header {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #707070;
  padding: 0 40px;
  background: black;

  .left {
    display: flex;
    align-items: center;
    width: 400px;
    color: #00d67a;

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 2px solid #00d67a;
    }

    .me {
      margin-left: 10px;

      .name {
        font-size: 20px;
        margin-bottom: 3px;
      }
    }
  }

  .tag {
    display: flex;
    font-size: 20px;

    li {
      padding: 0 15px;
      border-right: 1px solid white;
      cursor: pointer;

      &:last-child {
        border: none;
      }
    }
  }
}
</style>
