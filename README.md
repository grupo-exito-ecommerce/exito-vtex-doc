---


---

<h1 id="administración-de-landings-en-vtex">Administración de landings en Vtex</h1>
<p><a href="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/directory/landing-creation/landing-creation.md">Guía para la creación de una landing</a><br>
<a href="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/landing/new-landing.html">Descarga</a> el archivo HTML base para la creación de una landing</p>
<h1 id="éxito-vtex-io">Éxito (Vtex IO)</h1>
<p>Esta documentación es una guía para el desarrollo con <strong>Vtex IO</strong></p>
<p><a href="#recursos-necesarios">Recursos necesarios</a><br>
<a href="#gu%C3%ADa">Guía</a><br>
<a href="#vtex-cli">Vtex Cli</a><br>
<a href="#trabajando-con-vtex-y-react">Trabajando con Vtex + React</a><br>
<a href="#integraci%C3%B3n-continua">Integración continua</a></p>
<h2 id="recursos-necesarios">Recursos necesarios</h2>
<ol>
<li><a href="https://nodejs.org/es/">Node js</a></li>
<li><a href="https://yarnpkg.com/en/">Yarn</a> Gestor de paquetes de Facebook</li>
<li><a href="https://code.visualstudio.com/">Visual Studio Code</a> Editor<br>
3.1 Extensiones Básicas:
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
<li><a href="https://www.npmjs.com/package/vtex">Vtex Cli</a> Línea de comandos para vtex</li>
<li><a href="https://www.npmjs.com/package/exito-cli">Exito Cli</a> Línea de comandos para éxito</li>
<li><a href="http://cmder.net/">CMDER</a> Terminal Para windows</li>
<li><a href="https://www.iterm2.com/">Iterm2</a> Terminal para Mac</li>
<li><a href="https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html">Aws Cli</a> Línea de comandos para Amazon</li>
</ol>
<h2 id="guía">Guía</h2>
<h3 id="cursos-para-iniciar">Cursos para iniciar</h3>
<p>React Básico <a href="https://www.youtube.com/watch?v=bG53Pw17tog&amp;list=PLeWI3XlFEVOX6jACDygzApsvigQiDrun8">Youtube CodeJobs</a><br>
React Curso Completo <a href="https://exito.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview">Udemy</a><br>
Graphql + React <a href="https://exito.udemy.com/graphql-with-react-course/learn/v4/content">Udemy</a><br>
Guía <a href="http://aprendegit.com/que-es-git-flow/">Gitflow</a></p>
<p><a href="https://github.com/sw-yx/react-typescript-cheatsheet">React typescript tips</a></p>
<h3 id="cómo-manejar-la-versión-de-los-componentes-semantic-versioning">Cómo manejar la versión de los componentes (Semantic versioning)</h3>
<p>para manejar la versión de nuestros componentes emplearemos la siguiente guía <a href="https://docs.npmjs.com/about-semantic-versioning">semantic-versioning</a></p>
<h3 id="como-se-deben-de-documentar-el-código-en-react">Como se deben de documentar el código en React</h3>
<p>Para realizar la documentación en React se emplea el estándar definido por <a href="https://react-styleguidist.js.org/docs/documenting.html">react-styleguidist</a> donde se definen diversas técnicas necesarias para documentar los componentes creados, además de esto permite generar una documentación automática que permite visualizar muy bien el contenido que hemos documentado. <a href="https://github.com/styleguidist/react-styleguidist/tree/master/examples/basic">demo</a></p>
<p>Se recomienda manejar el concepto de <a href="http://usejsdoc.org/">jsDoc</a> para los comentarios de nuestros componentes.</p>
<p>Para la documentación emplearemos los archivos</p>
<ul>
<li><a href="http://Changelog.md">Changelog.md</a></li>
</ul>
<ul>
<li><a href="http://Readme.md">Readme.md</a></li>
</ul>
<h3 id="ejemplos-para-documentar">Ejemplos para documentar:</h3>
<p><a href="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/CHANGELOG-BASIC.md">Basic Changelog</a></p>
<p><a href="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/README-BASIC.md">Basic Readme</a></p>
<h3 id="definición-para-los-workspace-empleados-en-el-desarrollo">Definición para los workspace empleados en el desarrollo</h3>
<p>Se plantea la siguiente estructura, donde <strong>exito</strong> es el workspace principal o productivo, el workspace <strong>develop</strong> es el workspace pre productivo y los workspaces <strong>qa1, qa2, qa3</strong> son los workspace destinados para los equipos de SQA para realizar las validaciones de los desarrollos que se planteen para el sprint. Cada desarrollador deberá de crear su workspace definiendo el equipo de SQA que realizará sus validaciones técnicas y el tipo de desarrollo que está realizando en ese momento.</p>
<h4 id="ejemplo">Ejemplo:</h4>
<ul>
<li><strong>qa1_header–exito.myvtex.com</strong><br>
<strong>qa1</strong> —&gt; Equipo de SQA encargado de la validación técnica<br>
<strong>header</strong> —&gt; Desarrollo asignado</li>
</ul>
<h4 id="jerarquia-de-los-workspace">Jerarquia de los workspace</h4>

<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td><strong><a href="https://exito.myvtex.com">master</a></strong></td>
<td></td>
</tr>
<tr>
<td></td>
<td><strong><a href="https://dev--exito.myvtex.com/">dev</a></strong></td>
<td></td>
</tr>
<tr>
<td><strong>qa_feature</strong></td>
<td><strong>qa_feature</strong></td>
<td><strong>qa_feature</strong></td>
</tr>
<tr>
<td>feature</td>
<td>feature</td>
<td>feature</td>
</tr>
</tbody>
</table><h2 id="vtex-cli">Vtex Cli</h2>
<ul>
<li><a href="#instalaci%C3%B3n-de-dependencias-para-el-admin-de-vtex">Instalación de dependencias para el Admin de Vtex</a></li>
</ul>
<ul>
<li><a href="#creaci%C3%B3n-de-un-nuevo-componente-con-exito-cli">Creación de un nuevo componente con Exito cli</a></li>
</ul>
<h3 id="instalación-de-dependencias-para-el-admin-de-vtex">Instalación de dependencias para el Admin de Vtex</h3>
<p>Las siguientes dependencias permiten agregar comportamientos como el admin pages y el storefront en la página de vtex.</p>
<pre class=" language-bash"><code class="prism  language-bash">vtex <span class="token function">install</span> vtex.pages-editor
vtex <span class="token function">install</span> vtex.admin-pages
</code></pre>
<h3 id="actualización-de-las-dependencias-de-una-cuenta-en-vtex">Actualización de las dependencias de una cuenta en Vtex</h3>
<pre class=" language-bash"><code class="prism  language-bash">vtex deps update  
vtex infra update
</code></pre>
<h2 id="trabajando-con-vtex-y-react">Trabajando con Vtex y React</h2>
<ul>
<li><a href="#configuraci%C3%B3n-de-un-componente-editable-en-el-storefront-de-vtex">Configuración para el StoreFront</a></li>
</ul>
<ul>
<li><a href="#promover-un-workspace-a-producci%C3%B3n">Promover workspaces a producción</a></li>
</ul>
<hr>
<h3 id="configuración-de-un-componente-editable-en-el-storefront-de-vtex">Configuración de un componente editable en el StoreFront de Vtex</h3>
<p>para la configuración necesaria para el storefront se necesitan tres métodos dentro de nuestro componente:</p>
<ol>
<li><em>*getSchema</em> : Define los diferentes atributos que se le pasarán al componente por medio de las propiedades.</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash">ClassName.getSchema <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Ejemplos donde se emplean esquemas en los componentes:</p>
<ul>
<li><a href="https://github.com/vtex-apps/carousel">Vtex Carousel</a></li>
</ul>
<ul>
<li><a href="https://github.com/vtex-apps/minicart">Vtex Minicart</a></li>
</ul>
<ol start="2">
<li><em>*propTypes</em> : Permite tipar los datos y definir de qué tipo son cada uno de los atributos pasados por las props del componente</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">import</span> PropTypes from <span class="token string">'prop-types'</span>
ClassName.propTypes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<ol start="3">
<li>defaultProps_ : Permite definir cuál va a ser el valor por defecto para nuestros atributos pasados por los props del componente.</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash">ClassName.defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Estos tres métodos son empleados por Vtex para la creación de las opciones del storeFront</p>
<p>Ejemplo <a href="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/schema-examples/basic-shecma-js.js">aquí</a></p>
<h2 id="promover-un-workspace-a-producción">Promover un workspace a producción</h2>
<p>los pasos para promover un workspace son:</p>
<ol>
<li><code>vtex workspace production true</code> Cambiamos el modo producción del workspace a true</li>
</ol>
<h4 id="callback">callback</h4>
<pre class=" language-bash"><code class="prism  language-bash">info: Workspace dev <span class="token keyword">set</span> to production mode
info: You can now check your changes before publishing them
info: If everything is fine, promote with vtex promote
</code></pre>
<ol start="2">
<li><code>vtex publish [path]</code> Publicar todos los componentes o los componentes que vayamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes</li>
</ol>
<ol start="3">
<li><code>vtex promote</code> Promovemos el workspace actual a ser una integración con el master, este paso eliminará el workspace actual.</li>
</ol>
<h2 id="cómo-publicar-una-aplicación">Cómo publicar una aplicación</h2>
<ol>
<li><code>vtex workspace production true</code> Cambiamos el modo producción del workspace a true</li>
</ol>
<ol start="2">
<li><code>vtex publish [path]</code> Publicar todos los componentes o los componentes que vayamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes, además se debe de tener en cuenta la versión de la aplicación.</li>
</ol>
<ol start="3">
<li>Luego de publicar los componentes, volvemos a indicar que el workspace está en modo desarrollo <code>vtex workspace production false</code></li>
</ol>
<p><em>Nota</em>:  Podemos realizar la publicación directa en el workspace master.</p>
<h2 id="integración-continua">Integración continua</h2>
<h4 id="explicación-del-flujo-que-se-realiza-para-publicar-un-componente.">Explicación del flujo que se realiza para publicar un componente.</h4>
<p><img src="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/images/Continuos%20Integration%20Vtex%20AWS.png?raw=true" alt="Flujo actual para realizar el proceso de integración continua"></p>
<h4 id="comandos-a-emplear">Comandos a emplear:</h4>
<ol>
<li>
<p><code>generate trigger &lt;arn&gt;</code>: Comando que genera un archivo <code>.json</code> que contiene la configuración para agregar los trigger necesarios para realizar la comunicación con el CodeBuild de <code>develop</code> o <code>master</code>.</p>
</li>
<li>
<p><code>run triggers</code>: Comando que se encarga de leer el directorio actual y permitir realizar la ejecución  de los archivos <code>.json</code> que contienen la configuración para actualizar o agregar los triggers de un repositorio.</p>
</li>
</ol>
<h4 id="como-puedo-verificar-el-build-realizado-cuando-realice-un-push-a-los-branchs-developy-master">Como puedo verificar el build realizado cuando realice un push a los branchs <code>develop</code>y <code>master</code></h4>
<p>En el servicio de Amazon de CodeBuild pueden encontrar los siguientes proyectos para realizar el build de nuestros componentes</p>
<ul>
<li><a href="https://console.aws.amazon.com/codesuite/codebuild/projects/exito-vtex-deploy-develop/history?region=us-east-1">exito-vtex-deploy-develop</a>:  Empleado para hacer el build del branch develop</li>
<li><a href="https://console.aws.amazon.com/codesuite/codebuild/projects/exito-vtex-deploy-master/history?region=us-east-1">exito-vtex-deploy-master</a>: Empleado para hacer el build del branch master</li>
</ul>
<h2 id="cambios-que-se-deben-de-realizar-en-los-proyectos">Cambios que se deben de realizar en los proyectos</h2>
<h4 id="cambios-para-el-sonar.scanner">Cambios para el sonar.scanner</h4>
<blockquote>
<p>Se deben de comentar las keys de login para sonarqube. ya que esto se agrega automaticamente con la cli de exito</p>
</blockquote>
<h4 id="la-carpeta-config-ya-no-se-usa-y-se-debe-eliminar">La carpeta config ya no se usa y se debe eliminar</h4>
<blockquote>
<p>El proceso de integración continua ya no necesita que se tenga la carpeta config con los archivos de configuración, por lo que se debe de eliminar del proyecto.</p>
</blockquote>
<h4 id="cambios-en-jest-coverage">Cambios en jest Coverage</h4>
<blockquote>
<p>Se debe de realiza la creación del archivo jest.config.js si no se posee en el proyecto, en este archivo debe de ir la configuración de jest que actualmente algunos projectos lo poseen en el package.json, sin este archivo el proceso de integración continua puede lanzar error.</p>
</blockquote>

