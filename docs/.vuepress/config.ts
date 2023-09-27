import {defineUserConfig, defaultTheme} from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
// 搜索
import {docsearchPlugin} from '@vuepress/plugin-docsearch'
// 快捷复制代码块
import {copyCodePlugin} from "vuepress-plugin-copy-code2";
// 时间字数统计
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
// 自动注册 Vue 组件
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
// @ts-ignore
const __dirname = getDirname(import.meta.url)
export default defineUserConfig({
    lang: "zh-CN",
    title: "记录小屋!",
    base: "/", // 打包路径
    // open:true,  //在开发服务器启动后打开浏览器
    plugins: [
        [
            "@supermap/babel-plugin-import",
            {
                "libraryName": "@supermap/iclient-leaflet"
            }
        ],
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        readingTimePlugin({
            // 你的选项
        }),
        copyCodePlugin({
            showInMobile:true,
        }),
        docsearchPlugin({
            appId: '60XBHK2D0O',
            apiKey: '1f7c5749adb2210bb6a80c2c9455cfb9',
            indexName: 'kangkang',
            placeholder: '搜索文档',
            translations: {
                button: {
                    buttonText: '搜索文档',
                },
            },
        }),
    ],
    bundlerConfig: {
        exclude: [
            'leaflet' // 排除不需要的第三方库
        ]
    },
    define:{
        'process.env':{}
    },
    head: [
        ['link', {rel: 'icon', href: '/images/logo.jpg'}],
        ['link', { rel: 'stylesheet', href: '/font/custom.css' }]
    ],
    description: "这是我的第一个 VuePress 站点",
    theme: defaultTheme({
        lastUpdatedText: '更新时间',
        contributorsText: '贡献者',
        editLink: false,
        // 仓库地址
        repo: 'https://gitee.com/zkang2/vue-press.git',
        repoLabel: '🧐gitee',
        logo: "/images/logo.jpg",
        // 404 页面的提示信息
        notFound: ['糟糕！这个页面找不到啦！！！'],
        backToHome: '返回首页',
        // 导航栏配置
        navbar: [
            {
                text: "‍🔧工具库",
                children: [
                    {text: 'nvm', link: '/views/nvm/'},
                    {text: 'vconsole', link: '/views/vconsole/'},
                    {text: 'webstorm插件', link: '/views/webstorm/'},
                    {text: '天气', link: '/views/weather/'},
                    {text: '生成二维码', link: '/views/qrcode/'},
                    {text: '文件上传', link: '/views/file/'},
                ]
            },
            {
                text: "☠️package",
                children: [
                    {text: '发布npm包', link: '/views/npm/'},
                    {text: 'delete node_modules', link: '/views/head/'},
                    {text: '更新package', link: '/views/package/'},
                    {text: 'element-plus', link: '/views/element/'},
                ]
            },
            {
                text: "🐟摸会鱼",
                children: [
                    {text: '小游戏', link: '/views/game/'},
                    {text: '功德+99', link: '/views/add/'},
                ]
            }
        ],
        sidebar: [
            {
                text: "首页",
                link: "/views/list/",
            },
            {
                text: "uniapp",
                link: "/views/uniapp/",
            },
            {
                text: "ES6",
                link: "/views/es6/",
            },
            {
                text: "Vue",
                link: "/views/vue/",
            },
            {
                text: "Vue3",
                link: "/views/vue3/",
            },
            {
                text: "组件",
                link: "/views/module/",
            },
        ]
    }),
    bundler: viteBundler({
        viteOptions: {
            build:{
                chunkSizeWarningLimit:1500
            }
        },
        vuePluginOptions: {

        },
    }),
})
