<script setup>
import { onMounted, reactive, ref } from 'vue';

// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

// 项目
const projects = reactive([
  {
    name: 'lucky',
    techStack: '原生JS',
    desc: '表白程序，因为之前是做营销相关产品的开发，因此融合了一点营销的思维。程序一共分为3关小游戏，第一关是结合了营销中红包雨思想做的爱心雨闯关小游戏，第二关是石头剪刀布游戏，第三关是我画你猜游戏，最后采用营销中刮刮乐的方式表白，成功追到我男朋友了哈哈。',
    githubLink: 'https://github.com/Gwennie-zhou/lucky',
    CnTitle: '',
    CnDocLink: '',
    EnTitle: '',
    EnDocLink: ''
  },
  {
    name: 'CDNLoader',
    techStack: '原生JS',
    desc: '基于原先工作中“营销微组件一期拆分项目”开发的简化版CDN加载器。',
    githubLink: 'https://github.com/Gwennie-zhou/CDNLoader',
    CnTitle: '微组件加载器原理与代码实现',
    CnDocLink: 'https://medium.com/@gwennie.io/%E5%BE%AE%E7%BB%84%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%99%A8%E5%8E%9F%E7%90%86%E4%B8%8E%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0-c4cee176e0e8',
    EnTitle: 'CDNLoader Principle and Code Implementation',
    EnDocLink: 'https://medium.com/@gwennie.io/cdnloader-principle-and-code-implementation-b792318f59d4'
  },
  {
    name: 'CV',
    techStack: 'Vue3+gsap',
    desc: '个人在线简历网站。',
    githubLink: 'https://github.com/Gwennie-zhou/CV',
    CnTitle: '',
    CnDocLink: '',
    EnTitle: '',
    EnDocLink: ''
  },
  {
    name: 'BingDwenDwen',
    techStack: '纯CSS',
    desc: '纯CSS绘制的冰墩墩图案。',
    githubLink: 'https://github.com/Gwennie-zhou/BingDwenDwen',
    CnTitle: '',
    CnDocLink: '',
    EnTitle: 'Send you a BingDwenDwen Drawn with CSS',
    EnDocLink: 'https://medium.com/@gwennie.io/send-you-a-bingdwendwen-drawn-with-css-acc063dc7558'
  }
])

// 横向滚动
const hrScroll = () => {
  const sections = gsap.utils.toArray(".panel");

  let scrollTween = gsap.to(sections, {
    x: -600 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.open-source-pro-container', //触发滚动的元素
      start: "top top", // 当触发器的顶部碰到视口的顶部时
      pin: true, // 在执行滚动动画时固定触发器元素
      scrub: 0.1, // 触发器0.1s后跟上滚动条进度
    }
  })
}

onMounted(() => {
  hrScroll()
})

</script>

<template>
  <div class="open-source-pro-container">
    <div class="title">个人项目</div>
    <div class="projects-wrap">
      <div class="panel" v-for="(item, index) in projects" :key="index">
        <div class="name">{{ item.name }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="tech-stack">技术栈：{{ item.techStack }}</div>
        <div v-if="item.githubLink">github地址：<a :href="item.githubLink" target="_blank">{{ item.githubLink }}</a>
        </div>
        <div v-if="item.CnDocLink">中文说明文档：<a :href="item.CnDocLink" target="_blank">{{ item.CnTitle }}</a></div>
        <div v-if="item.EnDocLink">英文说明文档：<a :href="item.EnDocLink" target="_blank">{{ item.EnTitle }}</a></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.open-source-pro-container {
  display: flex;
  align-items: center;
  width: 200%;
  height: 100vh;
  padding: 40px;

  .title {
    font-weight: 700;
    font-size: 28px;
    margin-top: 40px;
    margin-right: 40px;
    writing-mode: tb-rl;
    letter-spacing: 90px;
    text-align: center;
    background: #52d600;
    padding: 10px;
  }
  .projects-wrap {
    display: flex;

    .panel {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 600px;
      height: 500px;
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
  }


 
}
</style>