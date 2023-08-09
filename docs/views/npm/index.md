### 如何发布自己的 npm包

初始化的配置项
```shell
   npm init
```
package.json
```shell
    {
      "name": "zkk_utils",
      "version": "1.0.0", 
      "description": "", 
      "main": "index.js", 
      "type":"module", 
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }
```
新建 index.js 入口文件
```js
    // 添加工具方法
    export function test(){
        return  'test'
    }
```

#### npm包发布
登录npm 账号

[npm官方文档](https://www.npmjs.com/)

```shell
    npm login
    
    // 控制台会提示输入相关信息
    Log in on https://registry.npmjs.org/
    Username:  // 用户名
    Password: // 密码
    Email: (this IS public) // 邮箱
    Enter one-time password: // 双因素身份验证,需要生成一次性密钥
    Logged in as xxx on https://registry.npmjs.org/.
```
运行发布命令

```shell
    npm publish
```
发布成功

![这是图片](/npm/npm.png)


#### 更新 npm包

```shell
    // patch:补丁号,修复bug,小变动,如 v1.0.0->v1.0.1
    npm version patch
    
    // minor:次版本号,增加新功能,如 v1.0.0->v1.1.0
    npm version minor
    
    // major:主版本号,不兼容的修改,如 v1.0.0->v2.0.0
    npm version major
    
    // 发布命令
    npm publish
```