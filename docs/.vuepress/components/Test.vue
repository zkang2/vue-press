<template>
  <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="item in imgList" :key="item" height="200px">
      <el-image  :src="item" fit="contain" />
    </el-carousel-item>
  </el-carousel>

  <el-button type="success" @click="open2">Success</el-button>

</template>
<script setup>
import {ref} from "vue"
import {ElMessage} from 'element-plus'
import {onMounted} from "vue"
import axios from 'axios'
const imgList = ref(['/images/1.jpg','/images/2.jpg','/images/3.png','/images/4.png','/images/5.jpg'])
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
<style scoped lang="scss">
.el-carousel__item{
  height: auto;
}
</style>
