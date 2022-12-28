<script setup>
import { useRouter } from 'vue-router'
  const router = useRouter()

  function toMain() {
    router.push('/main')
  }
</script>

<template>
  <div class="home-container">
    <div class="bg-img"></div>
    <img src="@/assets/images/me.jpg" alt="me" class="me-img" >
    <div class="desc-wrap">
      <div class="name">
        <span>周蓉欢</span>
        <span>Gwennie</span>
      </div>
      <div class="desc">
        <div>Welcome to my world!</div>
        <div>If you know me, you know my world.</div>
      </div>
    </div>
    <div class="btn" @click="toMain">👉</div>
  </div>
</template>

<style lang="less" scoped>
  .home-container {
    position: relative;
    width: 100%;
    height: 100vh;
    .bg-img {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(../../assets/images/bg_copy.png);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .me-img {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .desc-wrap {
      z-index: 3;
      position: absolute;
      bottom: 100px;
      left: 150px;
      font-family: cursive;
      .name {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 200px;
        height: 200px;
        border: 3px solid #00d67a;
        background-color: white;
        border-radius: 50%;
        font-size: 35px;
      }
      .desc {
        padding-top: 50px;
        color: white;
        font-size: 40px;
        font-family: inherit;
      }
    }
    .btn {
      position: absolute;
      bottom: 20px;
      right: 50px;
      z-index: 10;
      color: white;
      font-size: 50px;
      cursor: pointer;
    }
  }
  
</style>
