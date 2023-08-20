<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import '@waline/client/dist/waline.css';
// https://64e216c3a489b6662734d042--celadon-marigold-6d73e8.netlify.app/.netlify/functions/comment //netlify部署
// https://waline-zkang2.vercel.app // Vercel 部署
const serverURL = 'https://64e216c3a489b6662734d042--celadon-marigold-6d73e8.netlify.app/.netlify/functions/comment';
const path = computed(() => useRoute().path);
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        <Waline :serverURL="serverURL" :path="path" />
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
@media screen and (min-width : 600px) {
  .my-footer {
    width: 50%;
    margin: auto;
  }
}

</style>