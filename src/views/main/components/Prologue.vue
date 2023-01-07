<script setup>
</script>

<template>
  <div class="prologue-container">
    <div class="center">
      <div class="animate__animated animate__bounce"><span class="theme-color">function</span> Welcome ( ) {
      </div>
      <div class="text-wrap">
        <div class="inline-block">
          <div class="text theme-color">alert('Welcome to my world.')</div>
        </div>
        <br/>
        <div class="inline-block">
          <div class="text theme-color">if (you know me) {</div>
        </div>
        <br/>
        <div class="inline-block">
          <div class="text theme-color indent">console.log('you know my world.')</div>
        </div>
        <br/>
        <div class="inline-block">
          <div class="text theme-color">}</div>
        </div>
      </div>
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
  .text-wrap {
    margin: 30px;
  }
  .inline-block {
    display: inline-block;
  }
  .text {
    font-size: 38px;
    padding: 4px;
    margin-bottom: 20px;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid transparent;
    animation: typing 2s steps(15, end) forwards, flicker 1s infinite;
  }
  .text-wrap>div:nth-child(1) .text {
    animation-delay: 0;
  }
  .text-wrap>div:nth-child(2) .text {
    animation-delay: 2s;
    animation-duration: 1s;
  }
  .text-wrap>div:nth-child(3) .text {
    animation-delay: 3s;
  }
  .text-wrap>div:nth-child(4) .text {
    animation-delay: 5s;
  }
  .indent {
    padding-left: 24px;
  }

}

.down {
  position: absolute;
  bottom: 50px;
  left: 40px;
  font-size: 23px;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes flicker {
  50% {
    border-right: 3px solid #fff;
  }
}
</style>