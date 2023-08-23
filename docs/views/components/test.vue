<template>
  测试组件
  <el-button type="success" @click="open2">Success</el-button>
</template>
<script setup>
import { ElMessage } from 'element-plus'
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
</script>
