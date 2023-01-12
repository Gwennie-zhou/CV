<script setup>
import { onMounted, reactive, ref } from 'vue';

const dom = ref('')
const deltaY = ref(0)  //滚轮垂直方向上的滚动值

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

onMounted(() => {
  dom.value = document.querySelector('.open-source-pro-container')
})

/*  
函数作用：纵向滚动变成横向滚动
监听容器的滚轮事件
如果是到最左边然后向上滚动，那就向上滚，否则就横向滚动
如果是到最右边然后向下滚动，那就向下滚，否则就横向滚动

*/
const handleWheel = (event) => {
  // 当在视口窗度才允许滚动
  if (dom.value.offsetTop < window.scrollY || dom.value.offsetTop + dom.value.offsetHeight / 2 < window.scrollY) {
    event.returnValue = true; //设为true即为允许默认事件，即页面滚动
    return;
  }

  deltaY.value = event.deltaY;
  const domScrollLeft = dom.value.scrollLeft + event.deltaY;

  // 判断是否在最左边
  const _isLeftEdge = domScrollLeft <= 0;

  /* 判断是否滚动到最右边思路
    滚动条可滚动的距离，是容器本身可滚动宽度（可能包括容器内部内容宽度、padding等）与容器本身的宽度的差值，
    滚动条滚动到最右边，说明此时滚动条可滚动的距离达到最大。
    元素的clientWidth是包括内容、padding值，不包括border和margin。
  */
  const _isRightEdge = dom.value.scrollLeft === (dom.value.scrollWidth - dom.value.clientWidth);

  // 判断滚轮是向上滚动（deltaY为负值）还是向下滚动（deltaY为正值）
  const _isDownRoll = event.deltaY > 0;


  if ((_isLeftEdge && !_isDownRoll) || (_isRightEdge && _isDownRoll)) {
    event.returnValue = true; // 设为true即为允许默认事件
  }
  // 让元素横向滚动
  if ((_isLeftEdge && _isDownRoll) || (_isRightEdge && !_isDownRoll) || (!_isRightEdge && !_isLeftEdge)) {
    event.returnValue = false; // 手动设置为false表示阻止默认事件，相当于调用event.preventDefault()
    dom.value.scrollLeft = domScrollLeft
  }
}

</script>

<template>
  <div class="open-source-pro-container" @wheel="handleWheel">
    <div class="open-source-pro-container__box">
      <div class="title">个人项目</div>
      <div class="projects-wrap">
        <div class="project" v-for="(item, index) in projects" :key="index">
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
  </div>
</template>

<style lang="less" scoped>
.open-source-pro-container {
  width: 100%;
  height: 100vh;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 8px;
    background-clip: content-box;
    border: 6px solid transparent;
  }

  &__box {
    display: flex;
    width: 1850px;
    height: 80vh;
    padding: 40px;

    .title {
      font-weight: 700;
      font-size: 28px;
      margin-top: 40px;
      margin-right: 40px;
      writing-mode: tb-rl;
      letter-spacing: 90px;
      text-align: center;
      background: #00d67a;
      padding: 10px;
    }

    .projects-wrap {
      display: flex;
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
    }


    .project:nth-child(odd) {
      margin-top: 120px;
    }
  }
}
</style>