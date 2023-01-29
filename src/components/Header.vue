<script setup>
import { reactive } from 'vue';

const tags = reactive([
  {
    tag: '个人信息',
    className: 'per-info-container'
  },
  {
    tag: '个人评价',
    className: 'per-info-container'
  },
  {
    tag: '专业技能',
    className: 'skill-container'
  },
  {
    tag: '工作经历',
    className: 'work-container'
  },
  {
    tag: '项目经验',
    className: 'project-container'
  },
  {
    tag: '博客文章',
    className: 'blog-container'
  },
  {
    tag: '个人项目',
    className: 'open-source-pro-container'
  }
  ])

function jump(className) {
  document.querySelector(`.${className}`).scrollIntoView()
}
</script>

<template>
  <div class="header">
    <div class="left">
      <img src="@/assets/images/profile.jpg" alt="">
      <div class="me">
        <div class="name">周蓉欢</div>
        <div class="job">前端开发工程师</div>
      </div>
    </div>
    <ul class="tag">
      <li v-for="(item, i) in tags" :key="i" @click="jump(item.className)">{{ item.tag }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.header {
  position: relative; //设置定位才可以提高层级以便不至于被个人信息中的图片影响
  z-index: 10;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #707070;
  padding: 0 40px;
  background: black;

  .left {
    display: flex;
    align-items: center;
    width: 400px;
    color: #00d67a;

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 2px solid #00d67a;
    }

    .me {
      margin-left: 10px;

      .name {
        font-size: 20px;
        margin-bottom: 3px;
      }
    }
  }

  .tag {
    display: flex;
    font-size: 18px;

    li {
      padding: 0 15px;
      cursor: pointer;

      &:last-child {
        border: none;
      }
    }
  }
}
</style>