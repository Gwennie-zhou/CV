<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';

onMounted(() => {
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
          { value: 90, name: 'vue'},
          { value: 10, name: 'other'}
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
          { value: 50, name: 'react'},
          { value: 50, name: 'other'}
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
          { value: 90, name: 'js'},
          { value: 10, name: 'other'}
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
          { value: 90, name: 'css'},
          { value: 10, name: 'other'}
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
          { value: 65, name: 'webpack'},
          { value: 35, name: 'other'}
        ]
      }
    ]
  })

})

</script>

<template>
  <div class="skill-container">
    <div class="title">&lt;skill /&gt;</div>
    <div class="charts">
      <div class="top">
        <div class="chart-wrap">
          <div id="vue_pie" class="pie"></div>
          <div>Vue</div>
        </div>
        <div class="chart-wrap">
          <div id="react_pie" class="pie"></div>
          <div>React</div>
        </div>
        <div class="chart-wrap">
          <div id="js_pie" class="pie"></div>
          <div>Js</div>
        </div>
      </div>
      <div class="bottom">
        <div class="chart-wrap">
          <div id="css_pie" class="pie"></div>
          <div>Css</div>
        </div>
        <div class="chart-wrap">
          <div id="webpack_pie" class="pie"></div>
          <div>Webpack</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.skill-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 97vh;
  .title {
    font-size: 50px;
    font-family: "Fira Mono", monospace;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 30px;
  }
  .charts {
    width: 800px;
    height: 550px;
    background: white;
    color: black;
    .chart-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 50px;
      font-size: 28px;
    }
    .pie {
      width: 200px;
      height: 200px;
    }
    .top, .bottom {
      display: flex;
      justify-content: center;
    }
    .top {
      margin-bottom: 50px;
    }
  }
}
</style>