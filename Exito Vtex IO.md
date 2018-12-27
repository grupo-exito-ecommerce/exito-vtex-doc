---


---

<h1 id="éxito-vtex-io">Éxito (Vtex IO)</h1>
<p>Esta documentación es una guía para el desarrollo con <strong>Vtex IO</strong></p>
<hr>
<h2 id="recursos-necesarios">Recursos necesarios</h2>
<ol>
<li><a href="https://nodejs.org/es/">Node js</a> ó <a href="https://yarnpkg.com/en/">Yarn</a></li>
<li><a href="https://code.visualstudio.com/">Visual Studio Code</a><br>
2.1 Extensiones Básicas:
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets">ES7 React/Redux/GraphQL/React-Native snippets</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify">Beautify</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=steoates.autoimport">Auto Import</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">EsLint</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens">Version Lens</a></li>
</ul>
</li>
<li><a href="https://github.com/facebook/create-react-app">Create React App</a></li>
<li><a href="https://www.npmjs.com/package/vtex">Vtex Cli</a></li>
<li><a href="https://www.npmjs.com/package/exito-cli">Exito Cli</a></li>
<li><a href="http://cmder.net/">CMDER</a> Terminal Para windows</li>
<li><a href="https://www.iterm2.com/">Iterm2</a> Terminal para Mac</li>
<li><a href="https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html">Aws Cli</a></li>
</ol>
<h2 id="guías">Guías</h2>
<h4 id="cursos-para-iniciar">Cursos para iniciar</h4>
<p>React Básico <a href="https://www.youtube.com/watch?v=bG53Pw17tog&amp;list=PLeWI3XlFEVOX6jACDygzApsvigQiDrun8">Youtube CodeJobs</a><br>
React Curso Completo <a href="https://exito.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview">Udemy</a><br>
Graphql + React <a href="https://exito.udemy.com/graphql-with-react-course/learn/v4/content">Udemy</a></p>
<h4 id="documentación-para-react">Documentación para React</h4>
<p>Para realizar la documentación de los componentes en React se empleara el estandar definido por <a href="https://react-styleguidist.js.org/docs/documenting.html">react-styleguidist</a> donde se definen diversas tecnicas necesarias para documentar los componentes creados, ademas de esto permite generar una documentación automática que permite visualizar muy bien el contenido que hemos documentado. <a href="https://github.com/styleguidist/react-styleguidist/tree/master/examples/basic">Ejemplo: react-styleguidist</a></p>
<h4 id="como-manejar-la-versión-de-los-componentes">Como manejar la versión de los componentes</h4>
<p>para manejar la versión de nuestros componentes emplearemos la siguiente guía <a href="https://docs.npmjs.com/about-semantic-versioning">semantic-versioning</a></p>
<h2 id="inicio-con-vtex-cli">Inicio con Vtex Cli</h2>
<h4 id="creación-de-un-nuevo-componente">Creación de un nuevo componente</h4>
<p>para la creación de un nuevo proyecto empleamos el comando <code>vtex init</code> el cual nos da las siguientes opciones</p>
<pre class=" language-bash"><code class="prism  language-bash"> react getting-started
 graphql getting-started
 react+graphql
 hello graphql
 hello react
 dreamstore getting-started
</code></pre>
<h4 id="proyectos-de-inicio-rapido">Proyectos de inicio rapido</h4>
<p><a href="aws">React+Typescript+Vtex</a></p>
<h2 id="instalación-de-dependencias-para-el-admin-de-vtex">Instalación de dependencias para el Admin de Vtex</h2>
<p>Las siguientes dependencias permiten agregar comportamientos como el admin pages y el storefront en la página de vtex.</p>
<pre><code>vtex install vtex.pages-editor
vtex install vtex.admin-pages
</code></pre>
<h2 id="trabajando-con-vtexreact">Trabajando con Vtex+React</h2>
<h4 id="configuración-de-un-componente-editable-en-el-storefront-de-vtex">Configuración de un componente editable en el StoreFront de Vtex</h4>
<p>para la configuración necesaria para el storefront se necesitan tres métodos dentro de nuestro componente:</p>
<ol>
<li><em>getSchema</em> : Define los diferentes atributos que se le pasarán al componente por medio de las propiedades.</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash">ClassName.getSchema  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=</span><span class="token operator">&gt;</span>  <span class="token punctuation">{</span>
	<span class="token keyword">return</span>  <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Ejemplos donde se emplean esquemas en los componentes:</p>
<ul>
<li><a href="https://github.com/vtex-apps/carousel">Vtex Carousel</a></li>
<li><a href="https://github.com/vtex-apps/minicart">Vtex Minicart</a></li>
</ul>
<ol start="2">
<li><em>propTypes</em> : Permite tipar los datos y definir de que tipo son cada uno de los atributos pasados por las props del componente</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">import</span>  PropTypes  from  <span class="token string">'prop-types'</span>

ClassName.propTypes  <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<ol start="3">
<li><em>defaultProps</em> : Permite definir cual va a ser el valor por defecto para nuestros atributos pasados por los props del componente.</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash">ClassName.defaultProps  <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Estos tres métodos son empleados por Vtex para la creación de las opciones del storeFront</p>
<p>Ejemplo <a href="https://github.com/Maik3345/exito-vtex-doc/blob/master/components/schema-examples/basic-shecma-js.js">aquí</a></p>
<h1 id="promover-un-workspace-a-producción">Promover un workspace a producción</h1>
<p>los pasos para promover un workspace son:</p>
<ol>
<li><code>vtex workspace production true</code>  Cambiamos el modo producción del workspace a true</li>
</ol>
<h4 id="callback">callback</h4>
<pre class=" language-bash"><code class="prism  language-bash">info:    Workspace dev <span class="token keyword">set</span> to production mode
info:    You can now check your changes before publishing them
info:    If everything is fine, promote with vtex promote
</code></pre>
<ol start="2">
<li>
<p><code>vtex publish [path]</code> Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes</p>
</li>
<li>
<p><code>vtex promote</code> Promovemos el workspace actual a ser una integración con el master, este paso eliminara el workspace actual.</p>
</li>
</ol>

