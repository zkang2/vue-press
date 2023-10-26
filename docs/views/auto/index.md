## GitHub Actions 自动部署前端项目

::: tip
GitHub Actions
官网的介绍

它给我们提供了虚拟的服务器资源，让我们可以基于它完成自动化测试、集成、部署等操作
:::


-  首先创建一个项目，以Vue项目为例
-  在GitHub 创建一个仓库
```shell
    git init
    git add .
    git commit -m "备注信息"
    git remote add origin 你的远程仓库地址
    git push -u origin master
```
-  然后在项目上在创建一个分支(后面自动部署会用到这个新分支)

### GitHub Actions使用介绍

- 新建.yml文件 
- 点击主页Actions
- New workflow
- set up a workflow yourself

![这是图片](/github/1.jpg)

- 脚本
```shell
name: GitHub 自动构建部署                  # 标题
on:
  push:
    branches: 
      - master                            # 监听哪个分支的哪个动作
permissions:
  contents: write                         # 设置权限，可写，也可以不用配置，v4版本新增的
jobs:
  build-and-deploy:                       # 其中一个任务的名称，ID
    runs-on: ubuntu-latest                # 这个任务运行所需的环境
    steps:
      - name: Checkout                    # 第一步：获取源码
        uses: actions/checkout@v3         # 使用的工具

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 16                # Node.js version 16

      - name: Install and Build           # 第二步：下载依赖和构建
        run: |
          npm  install
          npm run build
      - name: Deploy                      # 第三步：部署
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: ./docs/.vuepress/dist   # 部署的目录
          branch: build                   # 部署到哪个分支

```
- 保存之后等待构建成功
![这是图片](/github/2.jpg)
- 此时需要就需要选择构建分支  就是上面创建的第二个分支 然后保存再次等待编译成功 就会给你生成一个站点地址
![这是图片](/github/3.jpg)

::: tip
如果发现进入地址后样式路径404
加载的是根路径

加载的是根路径 https://<用户名>.github.io/assets/index.bf782a5b.js

而我们的资源文件在/vue-press/目录下，所以当然报错404

修复也很简单，如果你的Vue项目是基于 Vite 的构建的，需要修改vite.config.js，添加base:'/vue-press/'
:::

### 设置Custom domain(自动部署到自己的服务器)

- 域名购买
- 进行DNS解析配置 (将你的域名另一个域名)
![这是图片](/github/5.jpg)

- 设置Custom domain 后等待自动构建就会替换成你的域名
![这是图片](/github/4.jpg)

- GitHub Actions给我们提供了一站式的自动化部署体验 最重要的是这完全免费. 你也可以用它来部署其他框架的项目