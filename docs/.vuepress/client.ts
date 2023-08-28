import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import Layout  from './layouts/Layout.vue'
import { provide, ref } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import Test from '../views/components/test.vue'
import Particles from "particles.vue3"

export default defineClientConfig({
    layouts: {
        Layout ,
    },
    enhance({ app }) {
        // 注册element-plus
        app.use(ElementPlus)
        app.use(Particles)
        // 注册组件
        app.component('Test', Test)
    },
    setup() {
        console.log("%cvuepress", "color: #fff; border-radius: 5px; padding: 10px 25px;background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)");
    },
    rootComponents: [],
})
