<script setup>
// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { onMounted, ref, nextTick } from "vue";
gsap.registerPlugin(ScrollTrigger);

const keywords = ['前端开发', '本科学历', '韩山师范学院', '毕业:2021年', '计算机学院', '好奇心', '努力', '上进', '认真', '负责', '团结协作', '细心', '贴心', '求知欲', '1998年出生', '英语六级']

let keywordsInfo = ref({
  info: []
})

let keywordDomList = undefined

/* 个人信息模块动画入场顺序：
1、当个人信息模块开始出现在视口30%时，出现引导语 -- Welcome to ...
2、引导语动画结束后，个人照片滚动入场
3、当个人照片全部显示完整后，再滚动后，个人照片和引导语消失
4、随即进度条显示，关键字显示
5、关键字动画完成后，再一滚动，卡片出现，字体云出现

*/

onMounted(async () => {

  guideAnimate()
  imgAnimate()
  running()

  createKeywordInfo()
  await nextTick()

  keywordDomList = document.querySelectorAll('.keywords-wrap .keyword')
  keywordAnimate()

  entranceAnimate()
})

// 1、引导语入场动画
const guideAnimate = () => {
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.per-info-container',
      start: 'top 20%',
      toggleActions: 'restart none none none',
      pin: true,
      markers: true,
      onComplete: imgAnimate
    }
  })
  // 白色条形框弹跳入场
  t1.to('.rectangle', {
    scale: 1,
    duration: 0.3,
    ease: 'ease: "back.out(1.7)"'
  })
  // 引导语由上往下入场
  t1.from('.headline', {
    y: '-50%',
    duration: 0.5,
    ease: "power2.out",
    autoAlpha: 0
  })
}

// 2、个人照片滚动入场动画
const imgAnimate = () => {
  const sections = document.querySelectorAll('.self-img')
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.self-img-wrap',
      start: 'top top',
      pin: '.per-info-container',
      scrub: 0.3,
    }
  })
  sections.forEach((item, index) => {
    t1.from(item, {
      yPercent: index % 2 === 0 ? 100: -100, //变换百分比，相对于自身高度的值
      opacity: 0
    }, '<')   // "<" 表示与上个补间动画同时进行
  })
}


// 4、进度条显示
const running = () => {
  gsap.to('.keywords-wrap .bar', {
    width: '100%',
    duration: 11,
    ease: 'linear',
    onComplete: () => {
      document.querySelector('.keywords-wrap').style.display = 'none'
    }
  })
}

// 关键字信息生成
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

// 4、关键字出现动画效果 
const keywordAnimate = () => {
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


// 5、字体云出场方式 先中间出现，再移向左边，然后卡片和段落再由下往上入场
const entranceAnimate = () => {
  console.log("entranceAnimate");
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.conclusion',
      start: 'top top',
      scrub: 0.1,
      pin: '.per-info-container',
      markers: true
    }
  })
  t1.to('.wordcloud-wrap', {
    scale: 1,
    duration: 2
  })
  t1.to('.wordcloud-wrap', {
    x: '-100%',
    duration: 2,
    ease: "power2.out"
  })
  t1.from('.conclusion-right', {
    y: '110%',
    duration: 3
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

    <div class="self-img-wrap">
      <img src="@/assets/images/self_left.jpg" alt="" class="self-img">
      <img src="@/assets/images/self_center.jpg" alt="" class="self-img">
      <img src="@/assets/images/self_right.jpg" alt="" class="self-img">
    </div>
    <div class="keywords-wrap">
      <div class="progress-wrap">
        <div class="progress">程序执行中，请稍候...</div>
        <div class="bar"></div>
      </div>
      <div class="keywords">
        <span v-for="item in keywordsInfo.info" :key="item.id" class="keyword"
          :style="{ 'top': `${item.top}px`, 'left': `${item.left}px`, 'transform': `scale(${item.scale})`, 'filter': `blur(${item.blur}px)` }">{{
            item.keyword
          }}</span>
      </div>
    </div>

    <div class="conclusion">
      <div class="wordcloud-wrap">
        <img src="@/assets/images/wordcloud.png" alt="字体云">
      </div>
      <div class="conclusion-right">
        <div class="text">
          <p>Do you know me </p>
          <p style="margin-left: 80px">a bit now ?</p>
        </div>
        <div class="card-wrap">
          <img src="@/assets/images/card.jpg" alt="卡片背景" class="card-img">
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
        </div>
      </div>


    </div>
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
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 60%;

    .scroll {
      width: 90px;
      height: 90px;
      border: 2px solid white;
      border-radius: 50%;
      text-align: center;
      line-height: 90px;
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
    }
  }

  .self-img-wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 100%;

    .self-img {
      width: 33.33%;
      object-fit: cover;
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
      display: none;

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

  .conclusion {
    position: relative;
    width: 100%;
    height: 100%;

    .wordcloud-wrap {
      position: absolute;
      bottom: 0%;
      left: 40%;
      width: 550px;
      height: 800px;
      transform: scale(0);

      img {
        width: 100%;
        height: 100%;
      }
    }

    .conclusion-right {
      position: absolute;
      top: 15%;
      right: 10%;
      width: 700px;
      height: 700px;

      .text {
        font-size: 80px;
        text-shadow: 10px 10px 10px black;
        margin-bottom: 100px;
      }


      .card-wrap {
        position: absolute;
        bottom: 10%;
        right: 25%;
        box-shadow: 0 0 20px 0px #00d67a;
        width: 500px;
        height: 300px;

        .card-img {
          width: 100%;
          height: 100%;
        }

        .info {
          position: absolute;
          top: 22%;
          left: 10%;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;

          .left {
            margin-right: 40px;
            border-right: 1px solid white;
            padding-right: 30px;

            .name {
              font-size: 30px;
              padding-bottom: 10px;
            }
          }

          .right {
            font-size: 18px;

            li {
              padding-bottom: 8px;
            }
          }
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