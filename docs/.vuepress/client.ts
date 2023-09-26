import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import Layout  from './layouts/Layout.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Particles from "particles.vue3"
export default defineClientConfig({
    layouts: {
        Layout ,
    },
    enhance({ app }) {
        // 注册element-plus
        app.use(ElementPlus,{ locale: zhCn,}).use(Particles)
    },
    setup() {
        console.log("%cvuepress http://kangkang.cloud/", "color:red");
    },
    rootComponents: [],
})
