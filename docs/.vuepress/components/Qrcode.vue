<script setup>
import { Download } from '@element-plus/icons-vue'
import {ref, watch, nextTick} from 'vue'
const input = ref('https://www.kangkang.cloud/')
import {Vue3NextQrcode} from 'vue3-next-qrcode'
const is = ref(true)
watch(input, async (newVal, oldVal) => {
  is.value = false
  await nextTick()
  is.value = true
})

const fn = (url)=>{
  console.log(url)
}
const downloadImage=()=> {
  const imgElements = document.getElementsByTagName('img');
  const link = document.createElement('a');
  link.href = imgElements[1].currentSrc;
  link.download = 'image.jpg';
  link.click();
}
</script>

<template>
  <div style="display: flex">
    <el-input v-model="input" clearable placeholder="输入内容更新二维码"/>
    <el-button type="primary" @click="downloadImage">下载图片<el-icon class="el-icon--right"><Download /></el-icon></el-button>
  </div>
  <Vue3NextQrcode v-if="is" :text="input" @onSuccess="fn"  :dotScale="0.7" gifBackgroundURL="/images/bg.gif" logoImage="/images/logo.jpg" :logoScale="0.2" :logoMargin="3" />
</template>