---


---

<h1 id="éxito-vtex-io">Éxito (Vtex IO)</h1>
<p>Esta documentación es una guía para el desarrollo con <strong>Vtex IO</strong></p>
<ul>
<li><a href="#recursos-necesarios">Recursos necesarios</a></li>
<li><a href="#gu%C3%ADa">Guía</a></li>
<li><a href="#vtex-cli">Vtex Cli</a></li>
<li><a href="#trabajando-con-vtex-y-react">Trabajando con Vtex + React</a></li>
<li><a href="#lista-de-componentes-actuales">Lista de componentes</a></li>
</ul>
<h2 id="recursos-necesarios">Recursos necesarios</h2>
<ol>
<li><a href="https://nodejs.org/es/">Node js</a></li>
<li><a href="https://yarnpkg.com/en/">Yarn</a> Gestor de paquetes de Facebook</li>
<li><a href="https://code.visualstudio.com/">Visual Studio Code</a> Editor<br>
2.1 Extensiones Básicas:
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets">ES7 React/Redux/GraphQL/React-Native snippets</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify">Beautify</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=steoates.autoimport">Auto Import</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">EsLint</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens">Version Lens</a></li>
</ul>
</li>
<li><a href="https://github.com/facebook/create-react-app">Create React App Repo</a></li>
<li><a href="https://www.npmjs.com/package/create-react-app">Create React App Npm</a></li>
<li><a href="https://www.npmjs.com/package/vtex">Vtex Cli</a> Linea de comandos para vtex</li>
<li><a href="https://www.npmjs.com/package/exito-cli">Exito Cli</a> Linea de comandos para éxito</li>
<li><a href="http://cmder.net/">CMDER</a> Terminal Para windows</li>
<li><a href="https://www.iterm2.com/">Iterm2</a> Terminal para Mac</li>
<li><a href="https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html">Aws Cli</a> Linea de comandos para Amazon</li>
</ol>
<h2 id="guía">Guía</h2>
<h4 id="cursos-para-iniciar">Cursos para iniciar</h4>
<p>React Básico <a href="https://www.youtube.com/watch?v=bG53Pw17tog&amp;list=PLeWI3XlFEVOX6jACDygzApsvigQiDrun8">Youtube CodeJobs</a><br>
React Curso Completo <a href="https://exito.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview">Udemy</a><br>
Graphql + React <a href="https://exito.udemy.com/graphql-with-react-course/learn/v4/content">Udemy</a><br>
Guía <a href="http://aprendegit.com/que-es-git-flow/">Gitflow</a><br>
<a href="https://github.com/sw-yx/react-typescript-cheatsheet">React typescript tips</a></p>
<h3 id="como-manejar-la-versión-de-los-componentes-semantic-versioning">Como manejar la versión de los componentes (Semantic versioning)</h3>
<p>para manejar la versión de nuestros componentes emplearemos la siguiente guía <a href="https://docs.npmjs.com/about-semantic-versioning">semantic-versioning</a></p>
<h3 id="como-se-deben-de-documentar-el-código-en-react">Como se deben de documentar el código en React</h3>
<p>Para realizar la documentación en React se empleara el estándar definido por <a href="https://react-styleguidist.js.org/docs/documenting.html">react-styleguidist</a> donde se definen diversas técnicas necesarias para documentar los componentes creados, ademas de esto permite generar una documentación automática que permite visualizar muy bien el contenido que hemos documentado. <a href="https://github.com/styleguidist/react-styleguidist/tree/master/examples/basic">demo</a></p>
<p>Se recomienda manejar el concepto de <a href="http://usejsdoc.org/">jsDoc</a> para los comentarios de nuestros componentes.</p>
<p>Para la documentación emplearemos los archivos</p>
<ul>
<li><a href="http://Changelog.md">Changelog.md</a></li>
<li><a href="http://Readme.md">Readme.md</a></li>
</ul>
<h3 id="ejemplos-para-documentar">Ejemplos para documentar:</h3>
<p><a href="https://github.com/Maik3345/exito-vtex-doc/tree/master/CHANGELOG-BASIC.md">Basic Changelog</a><br>
<a href="https://github.com/Maik3345/exito-vtex-doc/blob/master/README-BASIC.md">Basic Readme</a></p>
<h2 id="vtex-cli">Vtex Cli</h2>
<ul>
<li><a href="#creaci%C3%B3n-de-un-nuevo-componente-con-vtex-cli">Creación de un nuevo componente</a></li>
<li><a href="#instalaci%C3%B3n-de-dependencias-para-el-admin-de-vtex">Instalación de dependencias para el Admin de Vtex</a></li>
<li><a href="#creaci%C3%B3n-de-un-nuevo-componente-con-exito-cli">Creación de un nuevo componente con Exito cli</a></li>
</ul>
<h3 id="creación-de-un-nuevo-componente-con-vtex-cli">Creación de un nuevo componente con Vtex cli</h3>
<p>para la creación de un nuevo proyecto empleamos el comando <code>vtex init</code> el cual nos da las siguientes opciones<br>
<code>vtex init</code></p>
<pre class=" language-bash"><code class="prism  language-bash"> react getting-started
 graphql getting-started
 react+graphql
 hello graphql
 hello react
 dreamstore getting-started
</code></pre>
<h3 id="creación-de-un-nuevo-componente-con-exito-cli">Creación de un nuevo componente con Exito cli</h3>
<p><code>exito init</code></p>
<pre class=" language-bash"><code class="prism  language-bash"> hello-react-typescript
</code></pre>
<h3 id="repositorio--de-los-proyectos">Repositorio  de los proyectos</h3>
<p><a href="https://github.com/Maik3345/hello-react-ts">hello-react-typescript github</a></p>
<h3 id="instalación-de-dependencias-para-el-admin-de-vtex">Instalación de dependencias para el Admin de Vtex</h3>
<p>Las siguientes dependencias permiten agregar comportamientos como el admin pages y el storefront en la página de vtex.</p>
<pre><code>vtex install vtex.pages-editor
vtex install vtex.admin-pages
</code></pre>
<h2 id="trabajando-con-vtex-y-react">Trabajando con Vtex y React</h2>
<ul>
<li><a href="#configuraci%C3%B3n-de-un-componente-editable-en-el-storefront-de-vtex">Configuración para el StoreFront</a></li>
<li><a href="#promover-un-workspace-a-producci%C3%B3n">Promover workspaces a producción</a></li>
</ul>
<hr>
<h3 id="configuración-de-un-componente-editable-en-el-storefront-de-vtex">Configuración de un componente editable en el StoreFront de Vtex</h3>
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
<li><code>vtex publish [path]</code> Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes</li>
<li><code>vtex promote</code> Promovemos el workspace actual a ser una integración con el master, este paso eliminara el workspace actual.</li>
</ol>
<h1 id="como-publicar-una-aplicación">Como publicar una aplicación</h1>
<ol>
<li><code>vtex workspace production true</code>  Cambiamos el modo producción del workspace a true</li>
<li><code>vtex publish [path]</code> Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes, ademas se debe de tener en cuenta la versión de la aplicación.</li>
<li>Luego de publicar los componentes, volvemos a indicar que el workspace esta en modo desarrollo <code>vtex workspace production false</code></li>
</ol>
<h1 id="lista-de-componentes-actuales">Lista de componentes actuales</h1>
<pre><code>|- exito.vtex-components/
|- exito.login
|- exito.product-carousel
|- exito.minicart
|- exito.carousel
|- exito.category-menu
|- exito.components
|- exito.footer
|- exito.header
|- exito.home-configuration
|- exito.login
|- exito.producto
|- exito.product-details
|- exito.product-images-list
|- exito.product-summary
|- exito.search-result
|- exito.shelf
|- exito.store
|- exito.vtex-components
| +- ...
</code></pre>

