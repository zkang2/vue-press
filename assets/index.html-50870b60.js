import{_ as e,r as i,o as t,c as l,a as n,b as o,e as p,d as s}from"./app-2a2d66f9.js";const c="/npm/npm.png",d={},r=s(`<h3 id="如何发布自己的-npm包" tabindex="-1"><a class="header-anchor" href="#如何发布自己的-npm包" aria-hidden="true">#</a> 如何发布自己的 npm包</h3><p>初始化的配置项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>package.json</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zkk_utils&quot;</span>,
      <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.0&quot;</span>, 
      <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>, 
      <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;index.js&quot;</span>, 
      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;module&quot;</span>, 
      <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;test&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;echo <span class="token entity" title="\\&quot;">\\&quot;</span>Error: no test specified<span class="token entity" title="\\&quot;">\\&quot;</span> &amp;&amp; exit 1&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;author&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ISC&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 index.js 入口文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 添加工具方法</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span>  <span class="token string">&#39;test&#39;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="npm包发布" tabindex="-1"><a class="header-anchor" href="#npm包发布" aria-hidden="true">#</a> npm包发布</h4><p>登录npm 账号</p>`,9),u={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> login
    
    // 控制台会提示输入相关信息
    Log <span class="token keyword">in</span> on https://registry.npmjs.org/
    Username:  // 用户名
    Password: // 密码
    Email: <span class="token punctuation">(</span>this IS public<span class="token punctuation">)</span> // 邮箱
    Enter one-time password: // 双因素身份验证,需要生成一次性密钥
    Logged <span class="token keyword">in</span> as xxx on https://registry.npmjs.org/.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行发布命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发布成功</p><p><img src="`+c+`" alt="这是图片"></p><h4 id="更新-npm包" tabindex="-1"><a class="header-anchor" href="#更新-npm包" aria-hidden="true">#</a> 更新 npm包</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    // patch:补丁号,修复bug,小变动,如 v1.0.0-<span class="token operator">&gt;</span>v1.0.1
    <span class="token function">npm</span> version patch
    
    // minor:次版本号,增加新功能,如 v1.0.0-<span class="token operator">&gt;</span>v1.1.0
    <span class="token function">npm</span> version minor
    
    // major:主版本号,不兼容的修改,如 v1.0.0-<span class="token operator">&gt;</span>v2.0.0
    <span class="token function">npm</span> version major
    
    // 发布命令
    <span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(b,k){const a=i("ExternalLinkIcon");return t(),l("div",null,[r,n("p",null,[n("a",u,[o("npm官方文档"),p(a)])]),v])}const h=e(d,[["render",m],["__file","index.html.vue"]]);export{h as default};
