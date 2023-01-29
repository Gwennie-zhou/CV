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

onMounted(async () => {
  createKeywordInfo()
  await nextTick()
  animate()
})


// 关键字信息生成
const createKeywordInfo = () => {
  keywordsInfo.value.info = keywords.map((item, index) => ({
    id: index,
    keyword: item,
    top: ~~(Math.random() * document.querySelector('.keywords-wrap').clientHeight),
    left: ~~(Math.random() * document.querySelector('.keywords-wrap').clientWidth),
  }))
}

/* 个人信息模块动画入场顺序：
1、当个人信息模块开始出现在视口30%时，出现引导语 -- Welcome to ...
2、引导语动画结束后，个人照片滚动入场
3、当个人照片全部显示完整后，再滚动后，个人照片和引导语消失
4、随即进度条显示，关键字显示
5、关键字动画完成后，再一滚动，卡片出现，字体云出现

*/
const animate = () => {
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: '.per-info-container',
      start: 'top top',
      pin: true,
      scrub: 0.1,
    }
  })
  animation
    //引导语和长条框入场
    .from('.rectangle', { scale: 0, duration: 4, ease: 'power2'})
    .from('.headline', { yPercent: -100, opacity: 0, duration: 4, ease: 'power2.out'}, "<")
    .from('.guide-wrap .scroll', {opacity: 0 , duration: 2}, "-=2")
    // 个人照片入场
    .from('.img1', { yPercent: 100, opacity: 0, duration: 6})
    .from('.img2', { yPercent: -100, opacity: 0, duration: 6}, "<")
    .from('.img3', { yPercent: 100, opacity: 0, duration: 6}, "<")
    // 引导语、长条框、照片出场
    .to('.rectangle', {scale: 0, duration: 1})
    .to('.headline', { scale: 0, duration: 1}, '<')
    .to('.img1', { yPercent: -100, opacity: 0, duration: 6}, "<")
    .to('.img2', { yPercent: 100, opacity: 0, duration: 6}, "<")
    .to('.img3', { yPercent: -100, opacity: 0, duration: 6}, "<")
    // 关键词入场
    .addLabel('keywordEnter')
    .to('.keyword', { scale: 2, duration: 2, stagger: 0.2})
    // 关键词逐渐变大、模糊，最后消失
    .to(".keyword", { scale: 7, filter: 'blur(1px)', duration: 4, stagger: 0.2}, "keywordEnter+=1")
    .to('.keyword', { filter: 'blur(4px)', opacity: 0, duration: 4, stagger: 0.2}, "keywordEnter+=2")
    // 字体云入场
    .to('.wordcloud-wrap', {scale: 1, duration: 4}, '-=0.5')
    .to('.wordcloud-wrap', { xPercent: -100, duration: 4, ease: 'power2.out'})
    .to('.guide-wrap .scroll', {opacity: 0})
    // 卡片入场
    .from('.conclusion-right', {yPercent: 100, opacity: 0, duration: 4}, "<1")
}

</script>

<template>
  <div class="per-info-container">
    <!-- 引导语 -->
    <div class="guide-wrap">
      <div class="guide">
        <div class="headline-wrap">
          <div class="headline">Welcome to the personal information module!</div>
          <div class="rectangle"></div>
        </div>
        <div class="scroll">scroll</div>
      </div>
    </div>
    <!-- 个人照片 -->
    <div class="self-img-wrap">
      <img src="@/assets/images/self_left.jpg" alt="" class="self-img img1">
      <img src="@/assets/images/self_center.jpg" alt="" class="self-img img2">
      <img src="@/assets/images/self_right.jpg" alt="" class="self-img img3">
    </div>
    <!-- 关键词 -->
    <div class="keywords-wrap">
      <span v-for="item in keywordsInfo.info" :key="item.id" class="keyword"
          :style="{ 'top': `${item.top}px`, 'left': `${item.left}px`}">{{item.keyword}}</span>
    </div>
    <!-- 字体云和卡片 -->
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
              <li>
                <div>专业：信息管理与信息系统</div>
                <div style="padding: 5px 0 0 50px">(计算机系)</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.per-info-container {
  border-top: 1px solid #707070;
  background: url('../assets/images/hacker_bg.webp') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .guide-wrap {
    position: relative;
    width: 100%;
    height: 100%;

    .guide {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      height: 60%;

      .scroll {
        width: 80px;
        height: 80px;
        border: 2px solid white;
        border-radius: 50%;
        text-align: center;
        line-height: 80px;
        color: #00d67a;
        font-size: 24px;
        margin-top: 250px;
      }
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
    height: 100vh;
    top: 0;
    left: 0;

    .keyword {
      position: absolute;
      color: #00d67a;
      width: 100px;
      transform: scale(0);
    }
  }

  .conclusion {
    position: absolute;
    top: 0;
    left: 0;
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