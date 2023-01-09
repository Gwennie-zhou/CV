<script setup>
import * as echarts from 'echarts';
import { onMounted, reactive } from 'vue';

const skills = reactive([
  '熟练使用 Vue2+Vue3 全家桶开发项目',
  '熟练掌握 HTML5+CSS3 模式的 HTML 代码编写，熟练手写标准 CSS 样式',
  '熟练掌握 JavaScript，能写原生 JS 代码，熟练掌握 JavaScript 中的原型对象、原型链、作用域链、闭包等',
  '熟练使用 git 版本控制工具进行项目管理与团队协助',
  '掌握 webpack 常用配置项的基本使用',
  '熟悉使用 react 全家桶开发项目',
  '熟悉运用 Vant、Element UI 等前端框架',
  '熟悉使用less、sass 预处理器',
  '熟悉使用eCharts开发图表',
  '具有优秀的英语读写能力（英语六级），在 medium（需翻墙）上面写技术博客'
])

const piesTop = reactive['vue', 'react', 'js']
const piesBottom = reactive['css', 'webpack']

onMounted(() => {
  makeCharts()
})

function makeCharts() {
  const vuePie = echarts.init(document.getElementById('vue_pie'));
  const reactPie = echarts.init(document.getElementById('react_pie'));
  const jsPie = echarts.init(document.getElementById('js_pie'));
  const cssPie = echarts.init(document.getElementById('css_pie'));
  const webpackPie = echarts.init(document.getElementById('webpack_pie'));

  const commonOption = {
    type: 'pie',
    radius: ['50%', '70%'],
    label: {
      show: false,
      position: 'center'
    },
    labelLine: {
      show: false
    },
    color: [
      '#00d67a',
      'gray'
    ],
  }

  vuePie.setOption({
    title: {
      text: '90%',
      left: 'center',
      top: 'center'
    },
    series: [
      {
        ...commonOption,
        data: [
          { value: 90, name: 'vue' },
          { value: 10, name: 'other' }
        ]
      }
    ]
  })

  reactPie.setOption({
    title: {
      text: '50%',
      left: 'center',
      top: 'center'
    },
    series: [
      {
        ...commonOption,
        data: [
          { value: 50, name: 'react' },
          { value: 50, name: 'other' }
        ]
      }
    ]
  })

  jsPie.setOption({
    title: {
      text: '90%',
      left: 'center',
      top: 'center'
    },
    series: [
      {
        ...commonOption,
        data: [
          { value: 90, name: 'js' },
          { value: 10, name: 'other' }
        ]
      }
    ]
  })

  cssPie.setOption({
    title: {
      text: '90%',
      left: 'center',
      top: 'center'
    },
    series: [
      {
        ...commonOption,
        data: [
          { value: 90, name: 'css' },
          { value: 10, name: 'other' }
        ]
      }
    ]
  })

  webpackPie.setOption({
    title: {
      text: '65%',
      left: 'center',
      top: 'center'
    },
    series: [
      {
        ...commonOption,
        data: [
          { value: 65, name: 'webpack' },
          { value: 35, name: 'other' }
        ]
      }
    ]
  })

}

</script>

<template>
  <div class="skill-container">
    <div class="left">
      <ol>
        <li v-for="(item, i) in skills" :key="i">
          <span class="check">✔</span>
          <span>{{ item }}</span>
        </li>
      </ol>
    </div>
    <div class="vl"></div>
    <div class="right">
      <div class="title">
        <div>&lt;skill</div>
        <div>/&gt;</div>
      </div>
      <div class="charts">
        <div class="top">
          <div class="chart-wrap" v-for="(item, i) in piesTop" :key="i">
            <div :id="item + '_pie'" class="pie"></div>
            <div>{{ item }}</div>
          </div>
        </div>
        <div class="bottom">
          <div class="chart-wrap" v-for="(item, i) in piesBottom" :key="i">
            <div :id="item + '_pie'" class="pie"></div>
            <div>{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.skill-container {
  display: flex;
  width: 100%;
  height: 50vh;
  .left {
    flex: 1;
    padding: 50px 30px;
    font-size: 20px;
    ol li {
      padding-bottom: 5px;
    }
    .check {
      margin-right: 5px;
      color: #00d67a;
    }
  }

  .right {
    width: 40%;
    height: 100%;
    padding: 20px 30px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    font-size: 50px;
    font-family: "Fira Mono", monospace;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 30px;
  }

  .charts {
    width: 80%;
    height: 80%;
    background: white;
    color: black;

    .chart-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      font-size: 20px;
    }

    .pie {
      width: 120px;
      height: 120px;
    }

    .top,
    .bottom {
      display: flex;
      justify-content: center;
    }

    .top {
      margin-bottom: 20px;
    }
  }
}
</style>