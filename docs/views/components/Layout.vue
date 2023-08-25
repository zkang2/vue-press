<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import {Waline} from '@waline/client/component';
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import '@waline/client/dist/waline.css';
// https://celadon-marigold-6d73e8.netlify.app/.netlify/functions/comment //netlify部署
// https://waline-zkang2.vercel.app // Vercel 部署
const serverURL = 'https://celadon-marigold-6d73e8.netlify.app/.netlify/functions/comment';
const path = computed(() => useRoute().path);
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        <el-row justify="center">
          <el-col :xl="12" :lg="14">
            <Waline :serverURL="serverURL" :path="path"/>
          </el-col>
        </el-row>
      </div>
    </template>
  </ParentLayout>
</template>
