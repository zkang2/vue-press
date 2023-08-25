<template>
  <div class="content">
    <el-button type="primary" :icon="Timer" plain>{{ readingTimeLocale.time }}</el-button>
    <el-button type="primary" :icon="ChatLineRound" plain>{{ readingTimeLocale.words }}</el-button>
    <el-switch
        v-model="switchValue"
        inline-prompt
        size="large"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        active-text="沉浸阅读"
        inactive-text="粒子背景"
    />
    <el-divider>
      <el-divider>{{ state.currentDateTime }}</el-divider>
    </el-divider>
    <Particles v-if="switchValue" id="tsparticles" class="login-particles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="options"/>
  </div>
</template>
<script setup>
import {reactive, onMounted,ref } from 'vue';
import {useReadingTimeLocale} from "vuepress-plugin-reading-time2/client";
const switchValue = ref(true)
const readingTimeLocale = useReadingTimeLocale();
import {ChatLineRound, Timer} from '@element-plus/icons-vue';

const state = reactive({
  currentDateTime: ''
});
onMounted(() => {
  setInterval(() => {
    const date = new Date();
    state.currentDateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }, 1000);
});
import {options} from "../config/bg";
import {loadFull} from 'tsparticles'
const particlesInit = async (engine) => {
  await loadFull(engine)
}
const particlesLoaded = async (container) => {
  // console.log('Particles container loaded', container)
}
</script>

<style scoped lang="scss">
.content {
  padding: 20px 0;
}
.el-switch{
  position: relative;
  z-index: 1;
  margin: 0 10px;
}
</style>
