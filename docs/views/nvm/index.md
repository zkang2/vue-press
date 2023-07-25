## nvm(node.js的版本管理工具)

### 使用场景
>- 根据不同的项目需求，使用不同的Node.js版本
>- 方便地管理Node.js的模块和依赖，每个版本都有自己的npm和node_modules目录，互不干扰

### 前期准备
>- 卸载本地node.js、npm等
>- 下载nvm安装包

[nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases)

### 安装nvm
安装路径随意,无脑next

### 查询是否安装成功
```shell
    nvm -v
```
![这是图片](/nvm/nvm_v.jpg)
### nvm操作命令
| 操作命令             |            说明             |
|--------------------|:-------------------------:|
| nvm list available |       显示可下载版本的部分列表        |
| nvm ls             |        查看目前已经安装的版本        |
| nvm current        |          显示当前的版本          |
| nvm install 版本号  |      安装指定的版本的nodejs       |
| nvm use 版本号      |       使用指定版本的nodejs       |
| nvm uninstall 版本号|  删除已安装的指定版本，语法与install类似  |
### 切换node版本检查是否成功

![这是图片](/nvm/nvm_ls.jpg)

如果不成功，请切换到管理员模式，去进行操作。

### 配置nvm代理
若发现下载速度缓慢，需要配置代理。进入nvm的安装位置，打开settings.txt，在该文件最后添加代码

```shell
    node_mirror: https://npm.taobao.org/mirrors/node/ 
    npm_mirror: https://npm.taobao.org/mirrors/npm/
```
