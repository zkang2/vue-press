<template>
  <el-card shadow="always">
    <el-button type="primary" :icon="AlarmClock" plain>{{readingTimeLocale.time}} </el-button>
    <el-button type="primary" :icon="ChatLineRound" plain>{{readingTimeLocale.words}}</el-button>
  </el-card>
</template>
<script setup>
import {useReadingTimeLocale} from "vuepress-plugin-reading-time2/client";
const readingTimeLocale = useReadingTimeLocale();
import {AlarmClock,ChatLineRound} from '@element-plus/icons-vue';
</script>
