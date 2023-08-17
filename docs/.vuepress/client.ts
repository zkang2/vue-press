import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import Layout from './Layout.vue'
import { provide, ref } from 'vue'
export default defineClientConfig({
    layouts: {
        Layout,
    },
    enhance({ app, router, siteData }) {},
    setup() {
    },
    rootComponents: [],
})