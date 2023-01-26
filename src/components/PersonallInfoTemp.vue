<template>
  <div class="personall-box">
    <div class="personall-warp-container">
      <div class="guide">
        <div class="headline-wrap">
          <div class="headline">
            Welcome to the personal information module!
          </div>
          <div class="rectangle"></div>
        </div>
        <div class="scroll">scroll</div>
      </div>

      <div class="image-warp">
        <img src="@/assets/images/self_left.jpg" alt="" class="self-img box1" />
        <img
          src="@/assets/images/self_center.jpg"
          alt=""
          class="self-img box2"
        />
        <img
          src="@/assets/images/self_right.jpg"
          alt=""
          class="self-img box3"
        />
      </div>

      <div class="scroll-box"></div>

      <div class="keywords-wrap">
        <div class="progress-wrap">
          <div class="progress">程序执行中，请稍候...</div>
          <div class="bar"></div>
        </div>
        <div class="keywords">
          <span
            v-for="item in keywordsInfo.info"
            :key="item.id"
            class="keyword"
            :style="{
              top: item.top + 'px',
              left: item.left + 'px',
            }"
            >{{ item.keyword }}</span
          >
        </div>
      </div>

      <div class="conclusion-right">
        <div class="text">
          <p>Do you know me</p>
          <p style="margin-left: 80px">a bit now ?</p>
        </div>
        <div class="card-wrap">
          <img src="@/assets/images/card.jpg" alt="卡片背景" class="card-img" />
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

<script setup>
// 动画库
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { onMounted, ref, nextTick } from "vue";
gsap.registerPlugin(ScrollTrigger);

const keywords = [
  "前端开发",
  "本科学历",
  "韩山师范学院",
  "毕业:2021年",
  "计算机学院",
  "好奇心",
  "努力",
  "上进",
  "认真",
  "负责",
  "团结协作",
  "细心",
  "贴心",
  "求知欲",
  "1998年出生",
  "英语六级",
];

let keywordsInfo = ref({
  info: [],
});

let keywordDomList = undefined;
let animation = null;
// 关键字信息生成
const createKeywordInfo = () => {
  keywordsInfo.value.info = keywords.map((item, index) => ({
    id: index,
    keyword: item,
    top: ~~(
      Math.random() *
      document.querySelector(".keywords-wrap").clientHeight 
    ),
    left: ~~(
      Math.random() *
      document.querySelector(".keywords-wrap").clientWidth 
    ),
    scale: 0,
    blur: 0,
  }));
};

/* 个人信息模块动画入场顺序：
1、当个人信息模块开始出现在视口30%时，出现引导语 -- Welcome to ...
2、引导语动画结束后，个人照片滚动入场
3、当个人照片全部显示完整后，再滚动后，个人照片和引导语消失
4、随即进度条显示，关键字显示
5、关键字动画完成后，再一滚动，卡片出现，字体云出现
*/

const animationFunc = () => {
  animation = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".personall-warp-container",
      start: "top top",
      end: () => "+=" + (document.querySelector(".guide").offsetHeight + 4000), // 滚动条结束的位置
      scrub: 0.01,
      markers: true,
      pin: true,
    },
  });

  //   当个人信息模块完全出现之后
  animation
    // 这个是出现引导语 -- Welcome to ...
    .to(".headline-wrap", { scale: 1, duration: 1 }, 0.3)
    // 出现第三张图片
    .to(".box1", { y: "100vh", opacity: 1, duration: 2 }, 1)
    .to(".box2", { y: "-100vh", opacity: 1, duration: 2 }, 1)
    .to(".box3", { y: "100vh", opacity: 1, duration: 2 }, 1)
    // 三张图片和引导语消失
    .to(".box1", { y: "-100vh", opacity: 0, duration: 2 }, 4)
    .to(".box2", { y: "100vh", opacity: 0, duration: 2 }, 4)
    .to(".box3", { y: "-100vh", opacity: 0, duration: 2 }, 4)
    .to(".headline-wrap", { scale: 0, duration: 0.5 }, 4)
    .to(".keyword", { stagger: 0.25, scale: 2, duration: 1 }, 4.5)
    .to(
      ".keyword",
      { stagger: 0.25, scale: 7, filter: "blur(1px)", duration: 1 },
      5.5
    )
    .to(
      ".keyword",
      { stagger: 0.25, opacity: 0, filter: "blur(4px)", duration: 1 },
      6.5
    )
    .to(
      ".conclusion-right",
      {
        opacity: 1,
        scale: 1,
        duration: 1
      },
      10.5
    ).to(
      ".conclusion-right",
      {
        opacity: 1,
        scale: 1,
        duration: 3
      },
      12.5
    );

  //   第一张图片
  // gsap
  //   .timeline({
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".box1",
  //       start: "center center",
  //       end: "150% center",
  //       scrub: 1,
  //       markers: true,
  //       pin: true,
  //     },
  //   })
  //   .from(".box1", { y: "-100vh", opacity: 0, duration: 10 })
  //   .to(".box1", { y: "0", opacity: 1, duration: 20 })
  //   .to(".box1", { y: "100vh", opacity: 0, duration: 10 });

  // 第二张图片
  // gsap
  //   .timeline({
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".box2",
  //       start: "center center",
  //       end: "150% center",
  //       scrub: 1,
  //       markers: true,
  //       pin: true,
  //     },
  //   })
  //   .from(".box2", { y: "100vh", opacity: 0, duration: 10 })
  //   .to(".box2", { y: "0", opacity: 1, duration: 20 })
  //   .to(".box2", { y: "-100vh", opacity: 0, duration: 10 });

  // 第三张图片
  // let threeImage = gsap
  //   .timeline({
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".box3",
  //       start: "center center",
  //       end: "150% center",
  //       scrub: 1,
  //       markers: true,
  //       pin: true,
  //     },
  //   })
  //   .from(".box3", { y: "-100vh", opacity: 0, duration: 10 })
  //   .to(".box3", { y: "0", opacity: 1, duration: 20 })
  //   .to(".box3", { y: "100vh", opacity: 0, duration: 10 });

  // 文字消失
  // gsap
  //   .timeline({
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".box3",
  //       start: "top top",
  //       end: "150% center",
  //       scrub: 1,
  //       markers: true,
  //       pin: true,
  //     },
  //   })
  //   .to(".headline-wrap", { scale: 0 });

  // 字体云
  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: ".keywords-wrap",
  //       start: "top top",
  //       end: "bottom center",
  //       scrub: 1,
  //       markers: true,
  //       pin: true,
  //     },
  //   })
  //   .from(".keywords-wrap", { opacity: 0 })
  // 	.to(".keywords-wrap", { opacity: 1 })
};

const triggerHrScroll1 = () => {
  gsap.to(".personall-box", {
    ease: "none",
    scrollTrigger: {
      trigger: ".personall-box", //触发滚动的元素
      start: "top top", // 当触发器的顶部碰到视口的顶部时
      end: () => "+=" + (document.querySelector(".guide").offsetHeight + 4000), // 滚动条结束的位置
      toggleClass: "guide-active",
      pin: true, // 在执行滚动动画时固定触发器元素
      scrub: true, // 触发器与滚动条绑定
      markers: true, // 开发时的便于查看的标记
    },
  });
};

onMounted(() => {
  createKeywordInfo();
  triggerHrScroll1();
  nextTick(() => {
    animationFunc();
  });
});
</script>

<style lang="less" scoped>
.personall-box {
  position: relative;
  border-top: 1px solid #707070;
  background: url("../assets/images/hacker_bg.webp") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.personall-warp-container {
  overflow: hidden;
}

.guide {
  position: absolute;
  top: 50%;
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
  scale: 0;
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

.image-warp {
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;

  .self-img {
    width: 33%;
    height: 100vh;
    object-fit: cover;
  }
  .box1 {
    position: absolute;
    left: 0;
    top: -100vh;
    opacity: 0;
  }
  .box2 {
    position: absolute;
    left: 33%;
    top: 100vh;
    opacity: 0;
  }
  .box3 {
    position: absolute;
    left: 66%;
    top: -100vh;
    opacity: 0;
  }
}

.keywords-wrap {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  .progress-wrap {
    width: 400px;
    margin: auto;
    margin-top: 20vh;
    text-align: center;
    .progress {
    }
  }
  .keyword {
    position: absolute;
    top: 0;
    left: 0;
    scale: 0;
  }
}

.scroll-box {
  margin-top: 100vh;
  width: 100vw;
  height: 50vh;
  background-color: #00d67a;
}

.conclusion-right {
  position: absolute;
  top: 10vh;
  left: 25vw;
  transform-origin: 50% 50%;
  // transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  opacity: 0;
  scale: 4;

  .text {
    font-size: 80px;
    text-shadow: 10px 10px 10px black;
    margin-bottom: 100px;
  }

  .card-wrap {
    position: absolute;
    top: 53%;
    left: 50%;
    box-shadow: 0 0 20px 0px #00d67a;
    width: 500px;
    height: 300px;
    transform: translate(-50%, -50%);

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
</style>
