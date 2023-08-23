import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import Layout from './Layout.vue'
import { provide, ref } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import Test from '../views/components/test.vue'
// @ts-ignore
import Time from '../views/components/time.vue'
export default defineClientConfig({
    layouts: {
        Layout,
    },
    enhance({ app }) {
        // 注册element-plus
        app.use(ElementPlus)
        // 注册组件
        app.component('Test', Test)
        app.component('Time', Time)
    },
    setup() {
    },
    rootComponents: [],
})
