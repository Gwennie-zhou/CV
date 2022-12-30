<script setup>
import Prologue from './components/Prologue.vue';
import PersonalInfo from './components/PersonalInfo.vue'
</script>

<template>
  <div class="main-container">
    <Prologue />
    <PersonalInfo />
  </div>
</template>

<style lang="less" scoped>
.main-container {
  width: 100%;
  height: 100vh;
}
</style>