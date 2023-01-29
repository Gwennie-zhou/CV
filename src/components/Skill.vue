<script setup>
import * as echarts from 'echarts';
import { onMounted, reactive } from 'vue';

// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const skills = reactive([
  '熟练使用 Vue2+Vue3 全家桶开发项目',
  '熟练掌握 HTML5+CSS3 模式的 HTML 代码编写，熟练手写标准 CSS 样式',
  '熟练掌握 JavaScript，能写原生 JS 代码，熟练掌握 JavaScript 中的原型对象、原型链、作用域链、闭包等',
  '熟练使用 git 版本控制工具进行项目管理与团队协助',
  '掌握 webpack 常用配置项的基本使用',
  '熟悉使用 react 全家桶开发项目',
  '熟悉运用 Vant、Element UI 等前端框架',
  '熟悉使用less、sass 预处理器',
  '熟悉使用eCharts开发图表',
  '具有优秀的英语读写能力（英语六级），在 medium（需翻墙）上面写技术博客'
])

const animate = () => {
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: '.skill-container',
      start: 'top top',
      toggleActions: 'restart none restart none'
    }
  })
  animation
    .to('.skill-container-box', { backgroundImage: 'linear-gradient(370deg, #00ff91 20%, black 20%)', duration: 1.5, ease: 'power4.out'})
    .from('.skill-container .text', { opacity: 0, duration: 0.5})
    .from('.skills ol li', {xPercent: 50, opacity: 0, duration: 0.5, stagger: 0.2}, "<")
}
onMounted(() => {
  animate()
})

</script>

<template>
  <div class="skill-container">
    <div class="skill-container-box">
      <div class="skills">
        <ol>
          <li v-for="(item, i) in skills" :key="i">
            <span class="check">✔</span>
            <span>{{ item }}</span>
          </li>
        </ol>
      </div>
      <div class="text">SKILL</div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.skill-container {
  width: 100%;
  height: 100vh;
  .skill-container-box {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .skills {
    font-size: 25px;
    margin-left: 150px;
    padding-top: 100px;
    ol li {
      padding-bottom: 10px;
    }

    .check {
      margin-right: 5px;
      color: #00d67a;
    }
  }

  .text {
    position: absolute;
    left: 50px;
    bottom: 50px;
    letter-spacing: 0.18em;
    font-size: 60px;
  }

}
</style>