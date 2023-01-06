<script setup>
import { onMounted, ref } from 'vue';

const introduction = ref('')

const str = `alert('My name is Gwennie, I graduated from Hanshan Normal University. My major is information management and information system. I have 2 years of experience in front-end development. My technology stack is mainly Vue.')`
let i = 1 //打字效果指针

function typing() {
  introduction.value = str.slice(0, i)
  i++
  i <= str.length && setTimeout(typing, 100)
}

onMounted(() => {
  setTimeout(typing, 2000)
})
</script>

<template>
  <div class="prologue-container">
    <div class="center">
      <div class="animate__animated animate__bounce"><span class="highlight">function</span> selfIntroduction ( ) {
      </div>
      <div class="p2 highlight">{{ introduction }} <span class="separator"></span></div>
      <div class="animate__animated animate__bounce">}</div>
    </div>
    <div class="down">
      <span>👇</span>
      <span>Welcome to personal information!</span>
    </div>
  </div>
</template>

<style lang="less" scoped>

.center {
  margin-top: 150px;
  margin-left: 50px;
  font-size: 30px;
  height: 700px;
  width: 75%;

  .p2 {
    margin: 30px 0 30px 25px;
    font-size: 38px;
    line-height: 60px;
  }

  .highlight {
    color: #00d67a;
  }

  .separator {
    border-left: 3px solid white;
    animation: flicker 1s infinite;
  }
}

.down {
  position: absolute;
  bottom: 50px;
  left: 40px;
  font-size: 23px;
}

@keyframes flicker {
  from {
    border-color: white;
  }

  to {
    border-color: transparent;
  }
}
</style>