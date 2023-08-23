<template>
  <div class="content">
    <el-button type="primary" :icon="Timer" plain>{{readingTimeLocale.time}} </el-button>
    <el-button type="primary" :icon="ChatLineRound" plain>{{readingTimeLocale.words}}</el-button>
    <el-divider>
      <el-divider >{{ state.currentDateTime }}</el-divider>
    </el-divider>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import {useReadingTimeLocale} from "vuepress-plugin-reading-time2/client";
const readingTimeLocale = useReadingTimeLocale();
import {ChatLineRound,Timer} from '@element-plus/icons-vue';
const state = reactive({
  currentDateTime: ''
});
onMounted(() => {
  setInterval(() => {
    const date = new Date();
    state.currentDateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }, 1000);
});
</script>

<style scoped lang="scss">
.content {
  padding: 20px 0;
}
//.el-button{
//  background: transparent;
//}
</style>
