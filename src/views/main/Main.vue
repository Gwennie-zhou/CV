<script setup>
import Prologue from './components/Prologue.vue';
import PersonalInfo from './components/PersonalInfo.vue'
import Skill from './components/Skill.vue'
</script>

<template>
  <div class="main-container">
    <Prologue />
    <PersonalInfo />
    <Skill />
  </div>
</template>

<style lang="less" scoped>
.main-container {
  width: 100%;
}
</style>