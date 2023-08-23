<template>
  <el-carousel :interval="1000" type="card" height="200px">
    <el-carousel-item v-for="item in imgList" :key="item">
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
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
