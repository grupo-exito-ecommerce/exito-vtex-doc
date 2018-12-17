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
<p>puede encontrar un proyecto de inicio de React+Typescript+Vtex en el siguiente link:</p>

