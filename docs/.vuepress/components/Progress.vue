<template>
  <div>
    <el-button style="margin: 20px 0" type="primary" @click="downloadFile">开始下载</el-button>
    <el-dialog v-model="dialogVisible" title="正在玩命下载中..." width="30%" :showClose="false">
      <el-progress :percentage="progress" :text-inside="true" striped striped-flow :duration="10" :stroke-width="30"></el-progress>
    </el-dialog>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';

const progress = ref(0);
const dialogVisible = ref(false)
const downloadFile = async () => {
  const fileUrl = 'https://d1.music.126.net/dmusic/NeteaseCloudMusic_Music_official_2.10.12.201849_32.exe';
  const response = await axios.get(fileUrl, {
    responseType: 'blob',
    onDownloadProgress: (progressEvent) => {
      dialogVisible.value = true
      // 计算下载进度
      progress.value = Math.round((progressEvent.loaded / progressEvent.total) * 100);
    },
  });
  dialogVisible.value = false
  // 创建一个Blob对象并创建下载链接
  const blob = new Blob([response.data], {type: 'application/octet-stream'});
  const downloadLink = document.createElement('a');
  downloadLink.href = window.URL.createObjectURL(blob);
  downloadLink.download = '网易云.exe'; // 指定下载后的文件名
  downloadLink.click();
  // 重置进度条
  progress.value = 0;
};
</script>