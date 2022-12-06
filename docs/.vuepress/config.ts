import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  base: "/bar/",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    logo: "/images/logo.jpg",
    // 导航栏配置
    navbar: [
      {
        text: "title",
        link: "/views/title/",
      },
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      {
        text: "list",
        link: "/views/list/",
      },
      {
        text: "test",
        link: "/views/test/",
      },
    ],
  }),
});