<script setup>
import { reactive, ref } from 'vue';

const currentID = ref(0)
const articles = reactive([
  {
    id: 1,
    name: '中国区用户如何使用ChatGPT？',
    time: '2022.12',
    link: 'https://medium.com/@gwennie.io/%E4%B8%AD%E5%9B%BD%E5%8C%BA%E7%94%A8%E6%88%B7%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8chatgpt-9df5bfbb052a'
  },
  {
    id: 2,
    name: 'CDNLoader Principle and Code Implementation',
    time: '2022.11',
    link: 'https://medium.com/@gwennie.io/cdnloader-principle-and-code-implementation-b792318f59d4'
  },
  {
    id: 3,
    name: 'Pure JS Coding Challenge01 — Double-color-ball Lottery',
    time: '2022.09',
    link: 'https://medium.com/@gwennie.io/pure-js-coding-challenge01-double-color-ball-lottery-7aedeaadba52'
  }
])

function move(id) {
  currentID.value = id
}

function leave() {
  currentID.value = 0
}

function toArticle(link) {
  window.open(link)
}

function toMore() {
  window.open('https://medium.com/@gwennie.io')
}
</script>

<template>
  <div class="blog-container">
    <div class="left">
      <div class="title">&lt;blog</div>
      <div class="platform">medium平台</div>
      <div class="vpn">需VPN</div>
    </div>
    <div class="right">
      <ul>
        <li v-for="item in articles" 
            :key="item.id" 
            @mouseenter="move(item.id)"
            @mouseleave="leave"
            @click="toArticle(item.link)">
          <div class="article">
            <div class="theme-color">文章{{ item.id }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
          <div class="arrow"><div class="diagonal" :class="[currentID === item.id ? 'rotate' : '']"></div>&gt;</div>
        </li>
      </ul>
      <div class="more" @click="toMore">更多+</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.blog-container {
  display: flex;
  width: 100%;
  height: 60vh;
  padding: 40px;
  .left {
    width: 40%;
    margin-top: 40px;
    padding-left: 20px;
    .title {
      font-weight: 700;
      font-size: 50px;
    }
    .platform {
      margin-top: 24px;
      color: #00d67a;
      font-size: 26px;
    }
    .vpn {
      font-size: 22px;
      color: #999999;
      margin-top: 10px;
    }
  }
  .right {
    flex: 1;
    margin-left: 80px;
    ul>li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      margin-bottom: 25px;
      border-bottom: 1px solid #d5d5d5;
      cursor: pointer;
      .name {
        padding: 10px 10px 16px 0;
        font-size: 20px;
        font-weight: 700;
      }
      .time {
        font-size: 16px;
        color: #999999;
      }
      .arrow {
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: 700;
        .diagonal {
          border-right: 4px solid white;
          transform: rotate(24deg);
          margin-right: 3px;
          height: 30px;
          transition: transform .3s;
        }
        .rotate {
          transform: rotate(90deg);
          margin-top: 3px;
          margin-right: 0;
        }
      }
    }
    .more {
      width: 100%;
      margin-top: 22px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>