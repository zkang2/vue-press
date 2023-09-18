<template>
  <div style="display: flex">
    <el-input v-model="input" clearable placeholder="输入内容更新二维码"/>
    <el-button type="primary" @click="downloadImage">下载图片<el-icon class="el-icon--right"><Download /></el-icon></el-button>
  </div>
  <el-image style="width: 150px; height: 150px" :src="imgSrc" fit="cover"/>
</template>

<script setup>
import {Download} from '@element-plus/icons-vue'
import QRCode from 'qrcode'
import {onMounted, ref, watch} from "vue";
const input = ref('https://www.kangkang.cloud/')
const imgSrc = ref(null)
watch(input, async (newVal, oldVal) => {
  init()
})
var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  quality: 0.8,
  margin: 1,
  color: {
    dark: "#000",
    light: "#fff"
  }
}
onMounted(() => {
  init()
})
const downloadImage=()=> {
  const link = document.createElement('a');
  link.href = imgSrc.value;
  link.download = 'myimage.png';
  link.click();
}
const init = () => {
  QRCode.toDataURL(input.value, opts).then(url => {
    imgSrc.value = url
  }).catch(err => {
    console.error(err)
  })
}
</script>