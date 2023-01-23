<script setup>
// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { onMounted, reactive, ref, nextTick } from "vue";
gsap.registerPlugin(ScrollTrigger);

const keywords = ['前端开发', '本科学历', '韩山师范学院', '毕业:2021年', '计算机学院', '好奇心', '努力', '上进', '认真', '负责', '团结协作', '细心', '贴心', '求知欲', '1998年出生', '英语六级']

let keywordsInfo = ref({
  info: []
})

const createKeywordInfo = () => {
  keywordsInfo.value.info = keywords.map((item, index) => ({
    id: index,
    keyword: item,
    top: ~~(Math.random() * document.querySelector('.keywords-wrap').clientHeight),
    left: ~~(Math.random() * document.querySelector('.keywords-wrap').clientWidth),
    scale: 0,
    blur: 0
  }))
}

let keywordsWrapDom = ''
let showList = []
let keywordDomList = undefined

onMounted(async () => {
  createKeywordInfo()
  await nextTick()
  keywordDomList = document.querySelectorAll('.keywords-wrap .keyword')
  console.log("keywordDomList", keywordDomList);
  animate()
  running()
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
    autoAlpha: 0, //相当于opacity透明度
    scrollTrigger: {
      trigger: '.per-info-container',
      start: 'top 20%',
      toggleActions: 'restart none none none'
    },
  })

}) 

// 关键字出现动画效果 
const animate = () => {
  requestAnimationFrame(() => {
    keywordsInfo.value.info.forEach((item, index) => {
      setTimeout(() => {
        item.scale += 0.05
        if (item.scale > 3) {
          item.blur += 0.01
        }
        if (item.scale > 7) {
          keywordDomList[item.id].remove()
        }
      }, 1 * 500 * index)
    })

    document.querySelectorAll('.keywords-wrap .keyword').length && animate()
  })
}

// 进度条
const running = () => {
  setTimeout(() => {
    gsap.to('.keywords-wrap .bar', {
      width: '100%',
      duration: 11,
      ease: 'linear',
      onComplete: () => {
        document.querySelector('.keywords-wrap').style.display = 'none'
      }
    })
  })
}
</script>

<template>
  <div class="per-info-container">
    <div class="guide">
      <div class="headline-wrap">
        <div class="headline">Welcome to the personal information module!</div>
        <div class="rectangle"></div>
      </div>
      <div class="scroll">scroll</div>
    </div>

    <div class="keywords-wrap">
      <div class="progress-wrap">
        <div class="progress">程序执行中，请稍候...</div>
        <div class="bar"></div>
      </div>
      <div class="keywords">
        <span v-for="item in keywordsInfo.info" 
          :key="item.id" 
          class="keyword"
          :style="{'top': `${item.top}px`, 'left': `${item.left}px`, 'transform': `scale(${item.scale})`, 'filter': `blur(${item.blur}px)`}"
          >{{ item.keyword }}</span>
      </div>
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
  .guide {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 60%;
    .scroll {
      width: 100px;
      height: 100px;
      border: 1px solid white;
      border-radius: 50%;
      text-align: center;
      line-height: 100px;
      color: #00d67a;
      font-size: 24px;
      margin-top: 200px;
    }
  }
  .headline-wrap {
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
  .keywords-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .progress-wrap {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
      width: 800px;
      height: 25px;
      border-radius: 15px;
      overflow: hidden;
      .progress {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        border: 1px solid red;
        border-radius: 15px;
        text-align: center;
      }
      .bar {
        position: absolute;
        z-index: 1;
        width: 0%;
        height: 100%;
        border-start-start-radius: 15px;
        border-end-start-radius: 15px;
        background: red;
      }
    }
    .keyword {
      position: absolute;
      color: #00d67a;
      transform: scale(0);
      width: 100px;
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