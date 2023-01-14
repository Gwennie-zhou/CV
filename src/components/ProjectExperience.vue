<script setup></script>

<template>

  <div class="project-container">
    <div class="left">
      <div class="first">
        <div class="name">深圳小鹅网络技术有限公司</div>
        <div class="project">
          <div class="num1">
            <div class="project-name">营销微组件一期拆分项目</div>
            <div class="desc">
              <span class="bold">项目描述：</span>
              原先营销的代码与电商、课程等中心部门耦合嵌套太深，产品迭代更新的速度深受其他中心部门的限制，在与其他部门沟通中花费太多时间，此次项目核心点在于由原先以 npm
              组件包嵌入其他中心项目的方式改为单组件打包成“umd”格式的 js 上传到 CDN，业务侧以请求 CDN 的 JS 资源动态挂载 script脚本的方式加载营销组件。
            </div>
            <div class="technology"><span class="bold">项目技术栈：</span>vue+vantUI+axios+webpack</div>
            <div class="task">
              <div class="bold">负责内容：</div>
              <div>1) 参与营销微组件技术方案讨论及设计，同时参与了项目的搭建，<span class="theme-color">开发微组件加载器</span>。</div>
              <div>2) <span class="theme-color">全权负责拼团模块</span>相关的代码开发，整理统一原先组件代码，整合原有逻辑并重构优化代码，包括但不
                仅限于：商品详情页中的拼团购买弹幕、拼团玩法、凑团列表，确认支付页中的拼团步骤，支付完成页的拼
                团流程等。</div>
              <div>3) 从开发到自测、提测、内灰、外灰直至全网上线，一直更进拼团相关事宜，协助处理开发及测试过程中
                遇到的各类拼团问题，为项目按时上线保驾护航。</div>
              <div>4) 详细撰写拼团每个组件 readme 文档，以便后来同学若想复用组件可更快更好地接入。</div>
            </div>
            <div class="result">
              <div class="bold">项目效果：</div>
              目前各个业务侧的营销组件都以微组件的方式引入，实现了独立发版，可将改动直接同步到各个业务侧，大
              大提高了开发效率，减少了与其他部门沟通的成本，并且基于 CDN 请求加载的方式使得各个业务侧的首页
              加载速度也提高了 2%-3%。
            </div>
          </div>
          <div class="num2">
            <div class="project-name">邀新拼团</div>
            <div class="desc">
              <span class="bold">项目描述：</span>
              邀新拼团即指邀请新人参与店铺拼团活动，通过老用户带领新用户的方式，使得新用户可以用更优惠的价格获得商品的方式帮助商家拓宽流量。
            </div>
            <div class="technology"><span class="bold">项目技术栈：</span>vue+ElementUI+axios+webpack</div>
            <div class="task">
              <div class="bold">负责内容：</div>
              <div>1) 参与 PRD 产品需求会评审、产品讨论、项目立项。</div>
              <div>2) 负责 b 端管理台页面的开发，包括<span class="theme-color">邀新拼团的新建、编辑、删除活动页面</span>。</div>
              <div>3) 从提测到上线，一路更进项目进展，修复项目中出现的 bug。</div>
            </div>
            <div class="result">
              <div class="bold">项目效果：</div>
              通过“老带新”这种方式，为商家带来了更多的流量，同时也助力营销中心提前完成拉新千万目标。
            </div>
          </div>
        </div>
      </div>
      <div class="second">
        <div class="name">深圳市有鱼智能科技有限公司(实习)</div>
        <div class="project">
          <div class="num1">
            <div class="project-name">YFLink 项目</div>
            <div class="technology"><span class="bold">项目技术栈：</span>vue+axios+webpack</div>
            <div class="task">
              <div class="bold">负责内容：</div>
              <div>1) 负责保险产品相关页面的前端开发，包括<span class="theme-color">产品介绍页、个人信息收集页</span>等页面，与 UI、UX、后端等同学协作实现产品功能</div>
              <div>2) 自测跑用例，同时对提测后的 bug 进行修复</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vl"></div>
    <div class="right">
      <div class="title">
        <div>&lt;project_experience</div>
        <div>/&gt;</div>
      </div>
      <div class="project-gif">
        <img src="@/assets/images/project.gif" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.project-container {
  display: flex;
  width: 100%;
  height: 70vh;

  .left {
    flex: 1;
    padding: 25px 40px;
    overflow: auto;
    font-size: 16px;
    line-height: 24px;

    .first {
      margin-bottom: 30px;
    }

    .name {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .project {
      background: white;
      color: black;
      padding: 10px;
      box-shadow: 5px 5px 20px 1px #00d67a;

      .num2 {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #00d67a
      }

      .project-name,
      .desc,
      .technology,
      .task {
        padding-bottom: 5px;
      }

      .project-name {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }

  .left::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  .left::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 8px;
    background-clip: content-box;
    border: 2px solid transparent;
  }

  .right {
    width: 30%;
    height: 100%;
    padding: 50px 5px;

    .title {
      font-size: 35px;
      line-height: 50px;
    }

    .project-gif {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
}

.bold {
  font-weight: 700;
}
</style>