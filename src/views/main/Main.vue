<script setup>

</script>

<template>
  <div class="main-container">
    <div class="header">
      <div class="left">
        <img src="@/assets/images/profile.jpg" alt="">
        <div class="me">
          <div class="name">周蓉欢</div>
          <div class="job">前端开发工程师</div>
        </div>
      </div>
      <ul class="tag">
        <li>个人信息</li>
        <li>专业技能</li>
        <li>工作经历</li>
        <li>项目经验</li>
        <li>开源项目</li>
        <li>博客文章</li>
        <li>个人评价</li>
      </ul>

    </div>
  </div>
</template>

<style lang="less" scoped>
.main-container {
  width: 100%;
  height: 1000px; //待改
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #707070;
    padding: 0 40px;
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
      font-size: 20px;
      li {
        padding: 0 15px;
        border-right: 1px solid white;
        cursor: pointer;
        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>