import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({ 
    logo: '/images/logo.jpg',
    // 导航栏配置
    navbar: [
        {
          text: 'test',
          link: '/views/test',
        },
        {
            text: 'list',
            link: '/views/list',
        }
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
        // SidebarItem
        {
            text: 'test',
            link: '/views/test',
          },
          {
              text: 'list',
              link: '/views/list',
          }
      ],
  }),
}