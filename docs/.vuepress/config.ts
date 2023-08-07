import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default({
  lang: "zh-CN",
  title: "记录小屋!",
  // base: "/press/", // 打包路径
  // open:true,  //在开发服务器启动后打开浏览器
  plugins: [
    searchPlugin({
      // 配置项
      // placeholder:"placeholder",
    }),
  ],
  head: [['link', { rel: 'icon', href: '/images/logo.jpg' }]],
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    lastUpdatedText:'更新时间',
    contributorsText:'贡献者',
    editLink:false,
    // 仓库地址
    repo: 'https://gitee.com/zkang2/vue-press.git',
    repoLabel:'🧐gitee',
    logo: "/images/logo.jpg",
    // 404 页面的提示信息
    notFound:['糟糕！这个页面找不到啦！！！'],
    backToHome:'返回首页',
    // 导航栏配置
    navbar: [
      {
        text: "‍🔧工具库",
        children:[
            {text:'nvm', link: '/views/nvm/'},
            {text:'vconsole', link: '/views/vconsole/'}
        ]
      },
      {
        text: "head",
         link: "/views/head/",
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
    ]
  }),
});
