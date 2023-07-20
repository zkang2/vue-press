import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default({
  lang: "zh-CN",
  title: "hello, VuePress !",
  // base: "/press/", // 打包路径
  // open:true,  //在开发服务器启动后打开浏览器
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
  head: [['link', { rel: 'icon', href: '/images/logo.jpg' }]],
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    logo: "/images/logo.jpg",
    // 导航栏配置
    navbar: [
      {
        text: "title",
        // link: "/views/title/",
        children:[
            {text:'下拉1', link: '/views/title/'},
            {text:'下拉2', link: '/views/title2/'}
        ]
      },
      {
        text: "head",
         link: "/views/head/",
      }
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      {
        text: "首页",
        link: "/views/list/",
      },
      {
        text: "uniapp",
        link: "/views/uniapp/",
      },
    ],
  }),
});
