import{_ as l,r as o,o as t,c as i,a as s,b as e,e as a,d as c}from"./app-2a2d66f9.js";const r="/images/title.png",d={},u=s("h2",{id:"vuepress-快速上手",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-快速上手","aria-hidden":"true"},"#"),e(" vuePress 快速上手")],-1),p={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},v=c(`<blockquote><ul><li>步骤1: 创建并进入一个新目录</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">mkdir</span> vuepress-starter
    <span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>步骤2: 初始化项目</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>步骤3: 将VuePress安装为本地依赖</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>步骤4: 在package.json中添加一些scripts</li></ul></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token punctuation">{</span>
        <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>步骤5: 将默认的临时目录和缓存目录添加到.gitignore文件中</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>步骤6: 创建你的第一篇文档</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">mkdir</span> docs
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>步骤7: 在本地启动服务器来开发你的文档网站</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),b={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},m=s("h2",{id:"mackdown官方教程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mackdown官方教程","aria-hidden":"true"},"#"),e(" Mackdown官方教程")],-1),k={href:"https://markdown.com.cn",target:"_blank",rel:"noopener noreferrer"},g=s("p",null,[s("img",{src:r,alt:"这是图片"})],-1);function h(_,q){const n=o("ExternalLinkIcon");return t(),i("div",null,[u,s("p",null,[s("strong",null,[e("let's go "),s("a",p,[e("vuePress官方教程"),a(n)])])]),v,s("p",null,[e("VuePress会在 "),s("a",b,[e("http://localhost:8080"),a(n)]),e("启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。")]),m,s("p",null,[e("let's go"),s("a",k,[e("Markdown官方教程"),a(n)])]),g])}const x=l(d,[["render",h],["__file","index.html.vue"]]);export{x as default};