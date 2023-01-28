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

let outputConsoleDom = ''
let outputWrapperDom = ''


let commandStart = ['Performing DNS Lookups for',
  'Searching ',
  'Analyzing ',
  'Estimating Approximate Location of ',
  'Compressing ',
  'Requesting Authorization From : ',
  'wget -a -t ',
  'tar -xzf ',
  'Entering Location ',
  'Compilation Started of ',
  'Downloading ']
let commandParts = ['Data Structure',
  'https://gwennie-zhou.github.io',
  'Texture',
  'TPS Reports',
  ' .... Searching ... ',
  'https://medium.com/@gwennie.io',
  'https://github.com/Gwennie-zhou?tab=repositories']
let commandResponses = ['Authorizing ',
  'Authorized...',
  'Access Granted..',
  'Going Deeper....',
  'Compression Complete.',
  'Compilation of Data Structures Complete..',
  'Entering Security Console...',
  'Encryption Unsuccesful Attempting Retry...',
  'Waiting for response...',
  '....Searching...',
  'Calculating Space Requirements '
]

let isProcessing = false // 判断程序是否进行中以用来区别不同语句标签元素的生成
let processTime = 0 // 程序正在执行的时间，在这个时间内，创建的都是span标签
let lastProcess = 0 // 上一次p标签创建完（即命令行语句生成后）的时间戳
let timerID = undefined;
let scrollWidth = 0 // 可滚动的宽度
let scrollX = 0 // 水平滚动的距离

// 横向滚动
const triggerHrScroll = () => {
  gsap.to('.projects-wrap', {
    x: -scrollX,
    ease: 'none',
    scrollTrigger: {
      trigger: '.open-source-pro-container', //触发滚动的元素
      start: 'top top', // 当触发器的顶部碰到视口的顶部时
      end: `+=${scrollWidth}`, // 滚动条结束的位置
      pin: true, // 在执行滚动动画时固定触发器元素
      scrub: 1, // 触发器与滚动条绑定
      markers: true // 开发时的便于查看的标记
    }
  })
}

onMounted(() => {
  outputConsoleDom = document.querySelector('.output-console')
  outputWrapperDom = document.querySelector('.output-wrapper')

  scrollWidth = document.querySelector('.projects-wrap').scrollWidth
  scrollX = scrollWidth - window.innerWidth;

  animate()
  // triggerHrScroll()
  // triggerConsoleOutput()
})

// 当滚动到可视区时才出现打印输出效果
const triggerConsoleOutput = () => {
  ScrollTrigger.create({
    trigger: '.open-source-pro-container',
    start: 'top top',
    end: `+=${scrollWidth}`,
    
  })
}

const animate = () => {
  const animation = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: '.open-source-pro-container', //触发滚动的元素
      start: 'top top', // 当触发器的顶部碰到视口的顶部时
      end: `+=${scrollWidth}`, // 滚动条结束的位置
      pin: true, // 在执行滚动动画时固定触发器元素
      scrub: 1, // 触发器与滚动条绑定
      markers: true, // 开发时的便于查看的标记
      onToggle: self => self.isActive ? consoleOutput() : removeTimer() // 当前元素滚动到可视窗口的时候触发，否则就将定时器移除
    }
  })
  animation.to('.projects-wrap', { x: -scrollX })
}


/* 
  函数作用：就是输出打印一句语句，制造黑客编程的效果。
  语句分为两种： 
  1、命令行语句（输入的命令、程序执行完成后的反馈）--应占一行，用p标签
  2、程序正在执行语句（可用随机数代替）--用span标签包裹随机数

  使用一个变量来判断程序是否正在执行中，即用来区分两种语句

  注意：
  1、新创建的元素追加到文档前，应该将文档往上滚动一定值（滚动的高度应该是一行的高度）
  2、当已创建的元素已经滚动到视口之外时，将元素销毁掉
*/
const consoleOutput = () => {
  let textEl = document.createElement('p')
  if (!isProcessing) {
    const commandType = ~~(Math.random() * 4) // 当次数没有足够多时，首位数字随机出现的概率可能会更小点
    switch (commandType) {
      case 0: // 命令输入
        textEl.textContent = commandStart[~~(Math.random() * commandStart.length)] + commandParts[~~(Math.random() * commandParts.length)]
        break;
      case 3:
        isProcessing = true
        processTime = ~~(Math.random() * 5000) // 每次程序执行的时间不等
        lastProcess = Date.now()
      default: // 程序响应
        textEl.textContent = commandResponses[~~(Math.random() * commandResponses.length)]
    }
  } else {
    textEl = document.createElement('span')
    textEl.textContent = Math.random() + ' '
    if (Date.now() > lastProcess + processTime) {
      isProcessing = false
    }
  }
  // 滚动容器到底部再插入新元素
  outputWrapperDom.scrollBy(0, 100)
  outputConsoleDom.appendChild(textEl)

  const wrapperDomHeight = outputWrapperDom.clientHeight;
  const wrapperDomScrollHeight = outputWrapperDom.scrollHeight;
  if (wrapperDomScrollHeight > wrapperDomHeight * 1.5) { //设置阈值为1.5一屏半
    const removeNodes = outputConsoleDom.querySelectorAll('*')
    for (let n = 0; n < ~~(removeNodes.length / 3); n++) {
      outputConsoleDom.removeChild(removeNodes[n])
    }
  }

  timerID = setTimeout(consoleOutput, ~~(Math.random() * 200))
}

const removeTimer = () => {
  clearTimeout(timerID)
}

</script>

<template>
  <div class="open-source-pro-container">
    <div class="open-source-pro-box">
      <div class="projects-wrap">
        <div class="introduction panel">
          <div class="title">Are you ready? </div>
          <p>My personal project exhibition </p>
          <p>starts here<span class="underline">_</span></p>
          <div class="scroll">scroll</div>
        </div>
        <div class="project panel" v-for="(item, index) in projects" :key="index">
          <div class="name">{{ item.name }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="tech-stack">技术栈：{{ item.techStack }}</div>
          <div v-if="item.githubLink">github地址：<a :href="item.githubLink" target="_blank">{{ item.githubLink }}</a>
          </div>
          <div v-if="item.CnDocLink">中文说明文档：<a :href="item.CnDocLink" target="_blank">{{ item.CnTitle }}</a></div>
          <div v-if="item.EnDocLink">英文说明文档：<a :href="item.EnDocLink" target="_blank">{{ item.EnTitle }}</a></div>
        </div>
      </div>
      <div class="output-wrapper">
        <div class="output-console"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.open-source-pro-container {
  width: 6000px;
  height: 100vh;
}
.open-source-pro-box {
  position: relative;
  overflow-y: hidden;
  width: 100%;
  height: 100%;

  .projects-wrap {
    width: auto;
    height: 100%;
    padding: 15vh 20vh 0 80vh;
    display: flex;

    .panel {
      margin-right: 300px;
    }

    .introduction {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 700px;
      height: 600px;
      border: 4px solid white;
      font-size: 30px;

      .title {
        font-size: 55px;
        padding-bottom: 20px;
      }

      .underline {
        visibility: visible;
        animation: twinkle 1s infinite ease;
      }

      .scroll {
        width: 80px;
        height: 80px;
        border: 1px solid #00ff91;
        border-radius: 50%;
        line-height: 80px;
        text-align: center;
        font-size: 20px;
        margin-top: 80px;
      }
    }

    .project {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 700px;
      height: 600px;
      background: white;
      border-radius: 5%;
      box-shadow: 0 0 10px 3px #00ff91;
      color: black;
      font-size: 18px;
      padding: 20px;

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

  .output-wrapper {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    // width: 20%;
    // height: 100vh;
    color: #00ff91;
    overflow-y: hidden;
  }

  .output-console {
    width: 66.666vw;
    height: auto;
  }


}

@keyframes twinkle {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>