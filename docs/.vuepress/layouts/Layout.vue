<script setup>
// waline评论
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import {Waline} from '@waline/client/component';
import {computed, ref,onMounted,reactive} from 'vue';
import {useRoute} from 'vue-router';
import '@waline/client/dist/waline.css';
// https://celadon-marigold-6d73e8.netlify.app/.netlify/functions/comment //netlify部署
// https://waline-zkang2.vercel.app // Vercel 部署
const serverURL = 'https://celadon-marigold-6d73e8.netlify.app/.netlify/functions/comment';
const path = computed(() => useRoute().path);

// 粒子背景
const switchValue = ref(true)
import {options} from "../config/bgData";
import {loadFull} from 'tsparticles'
import {ChatLineRound, Timer,MagicStick, View } from "@element-plus/icons-vue";
const particlesInit = async (engine) => {
  await loadFull(engine)
}
const particlesLoaded = async (container) => {
  // console.log('Particles container loaded', container)
}

// 时间 字数统计
import {useReadingTimeLocale} from "vuepress-plugin-reading-time2/client";
const readingTimeLocale = useReadingTimeLocale();
const state = reactive({
  currentDateTime: ''
});
onMounted(() => {
  const date = new Date();
  state.currentDateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  setInterval(() => {
    const date = new Date();
    state.currentDateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }, 1000);
});
</script>

<template>
  <ParentLayout>
    <template #navbar-before>
      <el-switch
          v-model="switchValue"
          inline-prompt
          size="large"
          :active-action-icon="View"
          :inactive-action-icon="MagicStick"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #409eff"
          active-text="沉浸阅读"
          inactive-text="粒子背景"
      />
    </template>
    <template #page-content-top>
      <div class="pageTop">
        <el-button type="primary" :icon="Timer" plain>{{ readingTimeLocale.time }}</el-button>
        <el-button type="primary" :icon="ChatLineRound" plain>{{ readingTimeLocale.words }}</el-button>
        <el-divider>
          <el-divider>{{ state.currentDateTime }}</el-divider>
        </el-divider>
      </div>
    </template>
    <template #page-bottom>
      <div class="my-footer">
        <el-row justify="center">
          <el-col :xl="12" :lg="14">
            <Waline :serverURL="serverURL" :path="path"/>
          </el-col>
        </el-row>
      </div>
      <Particles v-if="switchValue" id="tsparticles" class="login-particles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="options"/>
    </template>
  </ParentLayout>
</template>
<style lang="scss" scoped>
.pageTop{
  margin: 20px 0;
}
.el-switch {
  margin: 0 20px;
}
</style>