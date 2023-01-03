<script setup>
</script>

<template>
  <div class="experience-container">
    <div class="work-container">
      <div class="left">
        <div class="title">
          <div>&lt;work_experience</div>
          <div>/&gt;</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="right">
        <div class="work-wrap">
          <div class="timeline">
            <div class="dot"></div>
            <div class="line first"></div>
            <div class="dot"></div>
            <div class="line second"></div>
          </div>
          <div class="work">
            <div class="first">
              <div class="time">2021.07-2022.07</div>
              <div class="company">
                <div class="name">深圳小鹅网络技术有限公司</div>
                <div class="desc">
                  <span>公司简介：</span>
                  俗称“小鹅通”，是一家以线上知识教育为核心的 Saas 平台的独角兽公司
                </div>
                <div class="task">
                  <div>工作内容：</div>
                  1. 负责拼团、裂变海报等营销产品 b 端和 c 端的维护，更进和解决由客户提起的工单问题<br />
                  2. 负责营销产品相关的项目开发，与产品、UI、UX、后端等同学协作实现产品功能，直至项目全网上线
                </div>
              </div>
            </div>
            <div class="second">
              <div class="time">2021.03-2021.06（实习）</div>
              <div class="company">
                <div class="name">深圳市有鱼智能科技有限公司</div>
                <div class="desc">
                  <span>公司简介：</span>
                  香港主板上市公司云锋金融集团下的子公司，致力于互联网金融产品的设计与研发
                </div>
                <div class="task">
                  <div>工作内容：</div>
                  主要负责保险方向产品的前端开发，跟UI、UX、产品对齐功能，参与项目的需求评审会。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-wrap"></div>
  </div>
</template>

<style lang="less" scoped>
.experience-container {
  width: 100%;
  height: 100vh;
  .work-container {
    display: flex;
    width: 100%;
    height: 50vh;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
    .left {
      width: 30%;
      height: 100%;
      padding: 0 30px;
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        margin-top: 40px;
      }
    }
    .line {
      width: 1px;
      height: 100%;
      background: #707070;
    }
    .right {
      flex: 1;
      padding: 25px;
      .work-wrap {
        display: flex;
        .timeline {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 10px;
          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #00d67a;
          }
          .line {
            width: 1px;
            background: #00d67a;
          }
          .line.first {
            height: 224px;
          }
          .line.second {
            height: 140px;
          }
        }
        .work {
          .first {
            margin-bottom: 30px;
          }
          .time {
            font-weight: 700;
            margin-bottom: 5px;
          }
          .company {
            width: 95%;
            background: white;
            color: black;
            padding: 10px;
            box-shadow: 5px 5px 20px 1px #00d67a;
            .name {
              font-weight: 700;
              font-size: 20px;
              padding-bottom: 5px;
            }
            .desc {
              padding-bottom: 5px;
            }
            .task {
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>