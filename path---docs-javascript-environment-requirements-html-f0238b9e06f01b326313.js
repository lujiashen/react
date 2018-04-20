webpackJsonp([0xa60a4e758ce1],{868:function(s,n){s.exports={data:{markdownRemark:{html:'<p>React 16 依赖集合类型 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">Map</a> 和 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">Set</a>。若你要支持老式的可能未提供原生支持的浏览器和设备（例如 IE &#x3C; 11），考虑在你的应用库中包含一个全局的 polyfill，例如 <a href="https://github.com/zloirock/core-js">core-js</a> 或 <a href="https://babeljs.io/docs/usage/polyfill/">babel-polyfill</a>。</p>\n<p>一个使用 core-js 支持老版浏览器的 React 16 polyfill 环境大致如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token string">\'core-js/es6/map\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'core-js/es6/set\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>React 也依赖于 <code class="gatsby-code-text">requestAnimationFrame</code> （甚至包括测试环境）。你可以使用<a href="https://www.npmjs.com/package/raf">raf</a> 包去 shim <code class="gatsby-code-text">requestAnimationFrame</code>：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token string">\'raf/polyfill\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"JavaScript 环境要求",next:null,prev:null},fields:{path:"docs/reference-javascript-environment-requirements.md",slug:"docs/javascript-environment-requirements.html"}}},pathContext:{slug:"docs/javascript-environment-requirements.html"}}}});
//# sourceMappingURL=path---docs-javascript-environment-requirements-html-f0238b9e06f01b326313.js.map