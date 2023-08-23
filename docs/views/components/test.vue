<template>
  <el-button type="success" @click="open2">Success</el-button>
</template>
<script setup>
import {ElMessage} from 'element-plus'
import {onMounted} from "vue"
import axios from 'axios'
const open2 = async () => {
  const {data} = await axios({
    method: 'get',
    url: 'http://47.100.33.103:8080/captchaImage',
    parasms: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
  if(data){
    ElMessage({
      message: data.msg,
      type: 'success',
    })
  }
}
onMounted(() => {

})
</script>
