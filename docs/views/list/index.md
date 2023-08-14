:hourglass_flowing_sand:{{readingTimeLocale.time}}
:mag:{{readingTimeLocale.words}}
***

<script setup>
import {useReadingTimeLocale} from "vuepress-plugin-reading-time2/client";
const readingTimeLocale = useReadingTimeLocale();
</script>

## vuePress 快速上手
**let's go [vuePress官方教程](https://v2.vuepress.vuejs.org/)**
> - 步骤 1: 创建并进入一个新目录

```sh
    mkdir vuepress-starter
    cd vuepress-starter
```

> - 步骤 2: 初始化项目

```sh
    npm init
```

> - 步骤 3: 将 VuePress 安装为本地依赖

```sh
    npm install -D vuepress@next
```

> - 步骤 4: 在 package.json 中添加一些 scripts

```json
    {
        "scripts": {
            "docs:dev": "vuepress dev docs",
            "docs:build": "vuepress build docs"
        }
    }
```
> -  步骤5: 将默认的临时目录和缓存目录添加到 .gitignore 文件中
```sh
    echo 'node_modules' >> .gitignore
    echo '.temp' >> .gitignore
    echo '.cache' >> .gitignore
```
>  - 步骤6: 创建你的第一篇文档
```sh
    mkdir docs
    echo '# Hello VuePress' > docs/README.md
```
> - 步骤7: 在本地启动服务器来开发你的文档网站
```sh
    npm run docs:dev
```
VuePress 会在  [http://localhost:8080](http://localhost:8080)启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

## Mackdown官方教程

let's go[Markdown官方教程](https://markdown.com.cn)

![这是图片](/images/title.png)
