<script setup>
import { onMounted, ref } from 'vue';

const x = ref(0)
const y = ref(0)

function move(e) {
  x.value = e.offsetX
  y.value = e.offsetY
}

onMounted(() => {
  window.addEventListener('mousemove', move)
})
</script>

<template>
  <div class="per-info-container">
    <div class="title">&lt;personal_information /&gt;</div>
    <div class="card-wrap">
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
    </div>
    <div class="cursor" :style="{top: y + 'px', left: x + 'px'}"></div>
  </div>
</template>

<style lang="less" scoped>
.per-info-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #707070;
  width: 100%;
  height: 97vh;
  overflow: hidden;
  .title {
    font-size: 50px;
    font-family: "Fira Mono", monospace;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 30px;
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
  .cursor {
    z-index: -1;
    position: absolute;
    top: 20%;
    left: 85%;
    transform: translate(-50%, -50%);
    width: 75em;
    height: 75em;
    margin: 0 0 0.1px;
    object-fit: contain;
    border-radius: 75em;
    filter: blur(10em);
    background-image: radial-gradient(circle at 50% 50%, #00ff91, rgba(0, 214, 122, 0));
    will-change: left, top;
    transition: all 0.5s;
  }
  
}
</style>