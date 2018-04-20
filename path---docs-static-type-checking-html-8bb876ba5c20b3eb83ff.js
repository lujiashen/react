webpackJsonp([0xff8e03fc3d18],{890:function(a,s){a.exports={data:{markdownRemark:{html:'<p>像 <a href="https://flowtype.org/">Flow</a> 和 <a href="https://www.typescriptlang.org/">TypeScript</a> 这样的静态类型检查器可以在运行代码之前识别某些类型的问题。 他们还可以通过添加自动完成功能来改善开发人员的工作流程。 出于这个原因，对于更大的代码库我们建议使用 Flow 或者 TypeScript 来替代 <code class="gatsby-code-text">PropTypes</code>。</p>\n<h2 id="flow"><a href="#flow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flow</h2>\n<p><a href="https://flow.org/">Flow</a> 是一个针对 JavaScript 代码的静态类型检查器。它是在Facebook开发的，经常和React一起使用。 它可以让你使用特殊的类型语法来注释变量，函数和React组件，并尽早地发现错误。 您可以阅读 <a href="https://flow.org/en/docs/getting-started/">Flow 介绍</a> 来了解基本知识。</p>\n<p>为了使用 Flow, 你需要：</p>\n<ul>\n<li>将 Flow 添加到您的项目作为依赖项。</li>\n<li>确保编译后的代码中去除了 Flow 语法。</li>\n<li>添加了类型注释并运行 Flow 来检查它们。</li>\n</ul>\n<p>我们将在下面详细解释这些步骤。</p>\n<h3 id="在一个项目中添加-flow"><a href="#%E5%9C%A8%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%B7%BB%E5%8A%A0-flow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>在一个项目中添加 Flow</h3>\n<p>首先，在你的终端里进入到项目目录。你需要执行两条命令。</p>\n<p>如果你使用 <a href="https://yarnpkg.com/">Yarn</a>, 运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add --dev flow-bin\nyarn run flow init\n</code></pre>\n      </div>\n<p>如果你使用 <a href="https://www.npmjs.com/">npm</a>, 运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev flow-bin\n<span class="token function">npm</span> run flow init\n</code></pre>\n      </div>\n<p>第一个命令在你的项目中安装了最新版的 Flow。第二个命令创建一个您需要提交的 Flow 配置文件。</p>\n<p>最后，将 <code class="gatsby-code-text">flow</code> 添加到你的 <code class="gatsby-code-text">package.json</code>中的 <code class="gatsby-code-text">&quot;scripts&quot;</code> 部分：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token string">"flow"</span><span class="token punctuation">:</span> <span class="token string">"flow"</span><span class="token punctuation">,</span>\n</span>    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="从编译过的代码中剥离-flow-语法"><a href="#%E4%BB%8E%E7%BC%96%E8%AF%91%E8%BF%87%E7%9A%84%E4%BB%A3%E7%A0%81%E4%B8%AD%E5%89%A5%E7%A6%BB-flow-%E8%AF%AD%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>从编译过的代码中剥离 Flow 语法</h3>\n<p>Flow 通过使用特殊的语法为类型注释扩展了 JavaScript 语言。 然而，浏览器并不知道这个语法，所以我们需要确保它不会在发送到浏览器的已编译的 JavaScript 包中结束。</p>\n<p>确切的做法取决于你用来编译 JavaScript 的工具。</p>\n<h4 id="create-react-app"><a href="#create-react-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create React App</h4>\n<p>如果你的项目是使用 <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> 建立的，恭喜！ Flow 此时已经被默认剥离，所以在这一步你不需要做任何事情。</p>\n<h4 id="babel"><a href="#babel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Babel</h4>\n<blockquote>\n<p>注意：</p>\n<p>这些说明<em>不</em>适用于使用 Create React App 的用户。即使 Create React App 在底层使用 Babel，它已经被配置为理解 Flow。只有那些<em>没有</em>使用 Create React App 的用户才需要跟进下面的步骤。</p>\n</blockquote>\n<p>如果你手动为你的项目配置了 Babel，你将需要为 Flow 安装一个特殊的 preset。</p>\n<p>如果你使用 Yarn, 运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add --dev babel-preset-flow\n</code></pre>\n      </div>\n<p>如果你使用 npm, 运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-flow\n</code></pre>\n      </div>\n<p>然后将 <code class="gatsby-code-text">flow</code> preset 加入你的 <a href="http://babeljs.io/docs/usage/babelrc/">Babel 配置</a>。比如，如果你通过 <code class="gatsby-code-text">.babelrc</code> 文件配置 Babel，它可能会如下所示：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n  <span class="token string">"presets"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n<span class="gatsby-highlight-code-line">    <span class="token string">"flow"</span><span class="token punctuation">,</span>\n</span>    <span class="token string">"react"</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这将会让你可以在你的代码中使用 Flow 语法。</p>\n<blockquote>\n<p>注意：</p>\n<p>Flow 不需要 <code class="gatsby-code-text">react</code> preset，但他们经常在一起使用。 Flow 本身就理解 JSX 语法。</p>\n</blockquote>\n<h4 id="其他生成设置"><a href="#%E5%85%B6%E4%BB%96%E7%94%9F%E6%88%90%E8%AE%BE%E7%BD%AE" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>其他生成设置</h4>\n<p>如果你既不用 Create React App 也不用 Babel，你可以使用 <a href="https://github.com/flowtype/flow-remove-types">flow-remove-types</a> 来去除类型注释。</p>\n<h3 id="运行-flow"><a href="#%E8%BF%90%E8%A1%8C-flow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>运行 Flow</h3>\n<p>如果你遵循了上述的说明，你应该能够在第一次就运行 Flow。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn flow\n</code></pre>\n      </div>\n<p>如果你使用 npm, 运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> run flow\n</code></pre>\n      </div>\n<p>你应该会看到一条这样的消息：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">No errors!\n✨  Done in 0.17s.</code></pre>\n      </div>\n<h3 id="添加-flow-类型注释"><a href="#%E6%B7%BB%E5%8A%A0-flow-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E9%87%8A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>添加 Flow 类型注释</h3>\n<p>默认情况下， Flow 仅检查包含此批注的文件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// @flow</span>\n</code></pre>\n      </div>\n<p>通常它被放置在文件的顶部。 尝试将其添加到项目中的某些文件中，然后运行 <code class="gatsby-code-text">yarn flow</code> 或 <code class="gatsby-code-text">npm run flow</code> 来查看 Flow 是否已经发现了一些问题。</p>\n<p>也有<a href="https://flow.org/en/docs/config/options/#toc-all-boolean">一个选择</a>可以强制 Flow 不考虑注释检查<em>所有</em>文件。对于现有的项目它可能太繁琐了，但对于一个新项目如果你想完全用 Flow 来组织，那会是合理的。</p>\n<p>现在你们都准备好了！ 我们建议查看以下资源以了解有关 Flow 的更多信息：</p>\n<ul>\n<li><a href="https://flow.org/en/docs/types/">Flow 文档：类型注释</a></li>\n<li><a href="https://flow.org/en/docs/editors/">Flow 文档：编辑器</a></li>\n<li><a href="https://flow.org/en/docs/react/">Flow 文档： React</a></li>\n<li><a href="https://medium.com/flow-type/linting-in-flow-7709d7a7e969">Linting in Flow</a></li>\n</ul>\n<h2 id="typescript"><a href="#typescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TypeScript</h2>\n<p><a href="https://www.typescriptlang.org/">TypeScript</a> 是一门由微软开发的编程语言。 它是 JavaScript 的一个类型超集，包含它自己的编译器。 作为一种类型化语言，Typescript 可以早在您的应用程序上线之前在构建时发现错误和错误。 你可以在<a href="https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter">这里</a>了解更多关于在 React 中使用 TypeScript 的知识。</p>\n<p>要使用 TypeScript，你需要：</p>\n<ul>\n<li>将 Typescript 添加为您的项目的依赖项</li>\n<li>配置 TypeScript 编译器选项</li>\n<li>使用正确的文件扩展名</li>\n<li>为你使用的库添加定义</li>\n</ul>\n<p>让我们来详细介绍一下。</p>\n<h3 id="在一个项目中添加-typescript"><a href="#%E5%9C%A8%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%B7%BB%E5%8A%A0-typescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>在一个项目中添加 TypeScript</h3>\n<p>这一切都始于在终端中运行一个命令。</p>\n<p>如果你使用 <a href="https://yarnpkg.com/">Yarn</a>, 运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add --dev typescript\n</code></pre>\n      </div>\n<p>如果你使用 <a href="https://www.npmjs.com/">npm</a>, 运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev typescript\n</code></pre>\n      </div>\n<p>恭喜！ 您已经将最新版本的 TypeScript 安装到您的项目中。 安装 TypeScript 让我们可以访问 <code class="gatsby-code-text">tsc</code> 命令。 在配置之前，让我们将 <code class="gatsby-code-text">tsc</code> 添加到 <code class="gatsby-code-text">package.json</code> 中的 “scripts” 部分：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token string">"build"</span><span class="token punctuation">:</span> <span class="token string">"tsc"</span><span class="token punctuation">,</span>\n</span>    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="配置-typescript-编译器"><a href="#%E9%85%8D%E7%BD%AE-typescript-%E7%BC%96%E8%AF%91%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置 TypeScript 编译器</h3>\n<p>除非我们告诉编译器要做什么，否则它对我们将毫无用处。在 TypeScript 中，这些规则定义在一个叫 <code class="gatsby-code-text">tsconfig.json</code> 的特殊文件中。运行如下命令生成该文件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">tsc --init\n</code></pre>\n      </div>\n<p>看看现在生成的 <code class="gatsby-code-text">tsconfig.json</code>，你可以看到有很多选项可以用来配置编译器。 有关所有选项的详细说明，请点击<a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">这里</a>。</p>\n<p>在许多选项中，我们会看到 <code class="gatsby-code-text">rootDir</code> 和 <code class="gatsby-code-text">outDir</code>。编译器将以真实的情况接收 typescript 文件然后生成 javascript 文件。然而我们不想混淆源文件和编译后的输出。</p>\n<p>我们将通过两个步骤解决这个问题：</p>\n<ul>\n<li>首先，让我们像这样安排我们的项目结构。我们将所有的源代码放在 src 目录中。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">├── package.json\n├── src\n│   └── index.ts\n└── tsconfig.json</code></pre>\n      </div>\n<ul>\n<li>接下来，我们会告诉编译器源代码在哪以及编译后输出该放哪。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// tsconfig.json</span>\n\n<span class="token punctuation">{</span>\n  <span class="token string">"compilerOptions"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="gatsby-highlight-code-line">    <span class="token string">"rootDir"</span><span class="token punctuation">:</span> <span class="token string">"src"</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token string">"outDir"</span><span class="token punctuation">:</span> <span class="token string">"build"</span>\n</span>    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>非常棒！现在当我们运行构建脚本时编译器将会将生成的 javascript 代码输出到 <code class="gatsby-code-text">build</code> 文件夹。<a href="https://github.com/Microsoft/TypeScript-React-Starter/blob/master/tsconfig.json">TypeScript React Starter</a> 提供了一个带有一套配置的 <code class="gatsby-code-text">tsconfig.json</code> 文件让你上手。</p>\n<p>通常，您不希望将生成的JavaScript保留在源代码管理中，因此请确保将生成文件夹添加到 <code class="gatsby-code-text">.gitignore</code> 中。</p>\n<h3 id="文件扩展名"><a href="#%E6%96%87%E4%BB%B6%E6%89%A9%E5%B1%95%E5%90%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>文件扩展名</h3>\n<p>在 React 中，你最有可能在 <code class="gatsby-code-text">.js</code> 文件中编写你的组件。在 TypeScript 中我们有两个文件扩展名：</p>\n<p><code class="gatsby-code-text">.ts</code> 是默认的文件扩展名， <code class="gatsby-code-text">.tsx</code> 是一个为包含  <code class="gatsby-code-text">JSX</code> 代码使用的特殊扩展名。</p>\n<h3 id="运行-typescript"><a href="#%E8%BF%90%E8%A1%8C-typescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>运行 TypeScript</h3>\n<p>如果你遵循了如上的说明，你应该能够第一次就成功运行 TypeScript。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn build\n</code></pre>\n      </div>\n<p>如果你使用 npm, 运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> run build\n</code></pre>\n      </div>\n<p>如果你没有看到输出，这意味着它完全编译成功了。</p>\n<h3 id="类型定义"><a href="#%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>类型定义</h3>\n<p>为了能够显示来自其他包的错误和提示，编译器依赖于声明文件。 声明文件提供了关于库的所有类型信息。 这使我们能够在我们的项目中使用像那些在 npm 中的 JavaScript 库。</p>\n<p>对于一个库来说，主要有两种方式获得声明：</p>\n<p><strong>Bundled</strong> - 该库捆绑了自己的声明文件。 这对我们来说很好，因为我们所要做的就是安装这个库，我们便可以马上使用它。 要检查一个库是否有 bundled 类型，请在项目中查找 <code class="gatsby-code-text">index.d.ts</code> 文件。 有些库会在 <code class="gatsby-code-text">package.json</code> 文件的 <code class="gatsby-code-text">typings</code> 或者 <code class="gatsby-code-text">types</code> 属性中指定它。</p>\n<p><strong><a href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</a></strong> - DefinitelyTyped 是一个不包含声明文件的库的声明库。这些声明是由微软和开源贡献者提供的。 例如 React 并不捆绑它自己的声明文件。 相反，我们可以从 DefinitelyTyped 中获得。 为此，请在终端中输入此命令。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token comment"># yarn</span>\nyarn add --dev @types/react\n\n<span class="token comment"># npm</span>\n<span class="token function">npm</span> i --save-dev @types/react\n</code></pre>\n      </div>\n<p><strong>局部声明</strong>\n有时你想使用的包不包含声明，也不能在 DefinitelyTyped 上使用。 在这种情况下，我们可以有一个本地声明文件。 为此，请在源目录的根目录中创建一个 <code class="gatsby-code-text">declarations.d.ts</code> 文件。 一个简单的声明可能是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-typescript"><code class="gatsby-code-typescript"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">\'querystring\'</span> <span class="token punctuation">{</span>\n  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">stringify</span><span class="token punctuation">(</span>val<span class="token punctuation">:</span> object<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token builtin">string</span>\n  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span>val<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> object\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="和-create-react-app-一起使用-typescript"><a href="#%E5%92%8C-create-react-app-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8-typescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>和 Create React App 一起使用 TypeScript</h3>\n<p><a href="https://www.npmjs.com/package/react-scripts-ts">react-scripts-ts</a> 自动配置了一个 <code class="gatsby-code-text">create-react-app</code> 项目支持 TypeScript。你可以像这样使用：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">create-react-app my-app --scripts-version<span class="token operator">=</span>react-scripts-ts\n</code></pre>\n      </div>\n<p>请注意它是一个<strong>第三方</strong>项目，而且不是 Create React App 的一部分。</p>\n<p>你也可以尝试 <a href="https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter">typescript-react-starter</a>。</p>\n<p>你已经准备好写代码了！我们建议查看以下资源来了解有关 TypeScript 的更多信息：</p>\n<ul>\n<li><a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">TypeScript 文档：基本类型</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html">TypeScript 文档：从 Javascript 迁徙</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/react-&#x26;-webpack.html">TypeScript 文档： React 和 Webpack</a></li>\n</ul>\n<h2 id="reason"><a href="#reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason</h2>\n<p><a href="https://reasonml.github.io/">Reason</a> 不是一种新的语言; 这是一个新的语法和工具链，由测试语言 <a href="http://ocaml.org/">OCaml</a> 提供支持。 Reason 使 OCaml 成为了面向 JavaScript 程序员的熟悉语法，而且迎合现有已知的 NPM/Yarn 工作流。</p>\n<p>Reason 是在 Facebook 开发的，并且在其一些产品如 Messenger 中使用。它仍然具有一定的实验性质，但它有由 Facebook 维护的<a href="https://reasonml.github.io/reason-react/">专门的 React 绑定</a> 和一个<a href="https://reasonml.github.io/community/">充满活力的社区</a>。</p>\n<h2 id="kotlin"><a href="#kotlin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kotlin</h2>\n<p><a href="https://kotlinlang.org/">Kotlin</a> 是由 JetBrains 开发的一门静态类型语言。其目标平台包括 JVM， Android， LLVM 和 <a href="https://kotlinlang.org/docs/reference/js-overview.html">JavaScript</a>。</p>\n<p>JetBrains 专门为 React 社区开发和维护了几个工具： <a href="https://github.com/JetBrains/kotlin-wrappers">React bindings</a> 以及 <a href="https://github.com/JetBrains/create-react-kotlin-app">Create React Kotlin App</a>。 后者可以帮助您开始使用Kotlin 构建 React 应用程序，而不需要构建配置。 </p>\n<h2 id="其他语言"><a href="#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>其他语言</h2>\n<p>请注意，还有其他静态类型的语言可以编译成 JavaScript，因此是 React 兼容的。 例如，和 <a href="https://fable-elmish.github.io/react">elmish-react</a> 一起使用的 <a href="http://fable.io">F#/Fable</a>。查看他们各自的网站以获取更多信息，并欢迎添加更多和与 React 一起工作的静态类型的语言到这个页面！</p>',frontmatter:{title:"静态类型检查",next:"refs-and-the-dom.html",prev:"typechecking-with-prototypes.html"},fields:{path:"docs/static-type-checking.md",slug:"docs/static-type-checking.html"}}},pathContext:{slug:"docs/static-type-checking.html"}}}});
//# sourceMappingURL=path---docs-static-type-checking-html-8bb876ba5c20b3eb83ff.js.map