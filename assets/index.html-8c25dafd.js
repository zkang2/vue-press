import{_ as n,o as s,c as i,d as e}from"./app-66188d86.js";const a="/github/1.jpg",l="/github/2.jpg",t="/github/3.jpg",c="/github/5.jpg",o="/github/4.jpg",d={},u=e(`<h2 id="github-actions-自动部署前端项目" tabindex="-1"><a class="header-anchor" href="#github-actions-自动部署前端项目" aria-hidden="true">#</a> GitHub Actions 自动部署前端项目</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>GitHub Actions 官网的介绍</p><p>它给我们提供了虚拟的服务器资源，让我们可以基于它完成自动化测试、集成、部署等操作</p></div><ul><li>首先创建一个项目，以Vue项目为例</li><li>在GitHub 创建一个仓库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">git</span> init
    <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
    <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;备注信息&quot;</span>
    <span class="token function">git</span> remote <span class="token function">add</span> origin 你的远程仓库地址
    <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>然后在项目上在创建一个分支(后面自动部署会用到这个新分支)</li></ul><h3 id="github-actions使用介绍" tabindex="-1"><a class="header-anchor" href="#github-actions使用介绍" aria-hidden="true">#</a> GitHub Actions使用介绍</h3><ul><li>新建.yml文件</li><li>点击主页Actions</li><li>New workflow</li><li>set up a workflow yourself</li></ul><p><img src="`+a+`" alt="这是图片"></p><ul><li>脚本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>name: GitHub 自动构建部署                  <span class="token comment"># 标题</span>
on:
  push:
    branches: 
      - master                            <span class="token comment"># 监听哪个分支的哪个动作</span>
permissions:
  contents: <span class="token function">write</span>                         <span class="token comment"># 设置权限，可写，也可以不用配置，v4版本新增的</span>
jobs:
  build-and-deploy:                       <span class="token comment"># 其中一个任务的名称，ID</span>
    runs-on: ubuntu-latest                <span class="token comment"># 这个任务运行所需的环境</span>
    steps:
      - name: Checkout                    <span class="token comment"># 第一步：获取源码</span>
        uses: actions/checkout@v3         <span class="token comment"># 使用的工具</span>

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: <span class="token number">16</span>                <span class="token comment"># Node.js version 16</span>

      - name: Install and Build           <span class="token comment"># 第二步：下载依赖和构建</span>
        run: <span class="token operator">|</span>
          <span class="token function">npm</span>  <span class="token function">install</span>
          <span class="token function">npm</span> run build
      - name: Deploy                      <span class="token comment"># 第三步：部署</span>
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: ./docs/.vuepress/dist   <span class="token comment"># 部署的目录</span>
          branch: build                   <span class="token comment"># 部署到哪个分支</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>保存之后等待构建成功 <img src="`+l+'" alt="这是图片"></li><li>此时需要就需要选择构建分支 就是上面创建的第二个分支 然后保存再次等待编译成功 就会给你生成一个站点地址 <img src="'+t+'" alt="这是图片"></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果发现进入地址后样式路径404 加载的是根路径</p><p>加载的是根路径 https://&lt;用户名&gt;.github.io/assets/index.bf782a5b.js</p><p>而我们的资源文件在/vue-press/目录下，所以当然报错404</p><p>修复也很简单，如果你的Vue项目是基于 Vite 的构建的，需要修改vite.config.js，添加base:&#39;/vue-press/&#39;</p></div><h3 id="设置custom-domain-自动部署到自己的服务器" tabindex="-1"><a class="header-anchor" href="#设置custom-domain-自动部署到自己的服务器" aria-hidden="true">#</a> 设置Custom domain(自动部署到自己的服务器)</h3><ul><li><p>域名购买</p></li><li><p>进行DNS解析配置 (将你的域名另一个域名) <img src="'+c+'" alt="这是图片"></p></li><li><p>设置Custom domain 后等待自动构建就会替换成你的域名 <img src="'+o+'" alt="这是图片"></p></li><li><p>GitHub Actions给我们提供了一站式的自动化部署体验 最重要的是这完全免费. 你也可以用它来部署其他框架的项目</p></li></ul>',14),p=[u];function r(m,v){return s(),i("div",null,p)}const h=n(d,[["render",r],["__file","index.html.vue"]]);export{h as default};
