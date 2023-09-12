import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import Layout  from './layouts/Layout.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "particles.vue3"
export default defineClientConfig({
    layouts: {
        Layout ,
    },
    enhance({ app }) {
        // 注册element-plus
        app.use(ElementPlus).use(Particles)
    },
    setup() {
        console.log("%cvuepress https://www.kangkang.cloud/", "color:red");
    },
    rootComponents: [],
})
