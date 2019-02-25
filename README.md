---


---

<hr>
<hr>
<h1 id="éxito-vtex-io">Éxito (Vtex IO)</h1>
<p>===================</p>
Esta documentación es una guía para el desarrollo con <strong>Vtex IO</strong>
<p><a href="#recursos necesarios">Recursos-necesarios</a><br>
<a href="#gu%C3%ADa">Guía</a><br>
<a href="#vtex-cli">Vtex Cli</a><br>
</p><p>para manejar la versión de nuestros componentes emplearemos la siguiente guía <a href="https://docs.npmjs.com/about-semantic-versioning">semantic-versioning</a></p>
<h3 id="como-se-deben-de-documentar-el-código-en-react">Como se deben de documentar el código en React</h3>
<p>
</p><p>Para realizar la documentación en React se empleara el estándar definido por <a href="https://react-styleguidist.js.org/docs/documenting.html">react-styleguidist</a> donde se definen diversas técnicas necesarias para documentar los componentes creados, ademas de esto permite generar una documentación automática que permite visualizar muy bien el contenido que hemos documentado. <a href="https://github.com/styleguidist/react-styleguidist/tree/master/examples/basic">demo</a></p>
<p>Se recomienda manejar el concepto de <a href="http://usejsdoc.org/">jsDoc</a> para los comentarios de nuestros componentes.</p>
<p>
</p><p>Para la documentación emplearemos los archivos</p>
<ul>
<li><a href="http://Changelog.md">Changelog.md</a></li>
</ul>
<ul>
<li><a href="http://Readme.md">Readme.md</a></li>
</ul>
<h3 id="ejemplos-para-documentar">Ejemplos para documentar:</h3>
<p><a href="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/CHANGELOG-BASIC.md">)
</a></p><p>[Basic Changelog</p>
<p></p><p>Se plantea la siguiente estructura, donde <strong>exito</strong> es el workspace principal o productivo, el workspace <strong>develop</strong> es el workspace pre productivo y los workspaces <strong>qa1, qa2, qa3</strong>** son los workspace destinados para los equipos de SQA para realizar las validaciones de los desarrollos que se planteen para el sprint. Cada desarrollador deberá de crear su workspace definiendo el equipo de SQA que realizara sus validaciones técnicas y el tipo de desarrollo que esta realizando en ese momento.</p>
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
<th>vtex)</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>[exito](<a href="un- nuevo- componente-con-vtex-cli">C](#creación -de -un -nuevo -componente</a>

<ul>
<li><a href="nstalaci%C3%B3n-de dependencias-parael-min- d-vex">instalación dedependencias -para -el A-admin de Vtex</a></li>
</ul>
<ul>
<li><a href="#creaci%C3%B3n-de-un-nuevo-componente-con-exito-cli">-de-vtex)
Creación de http://deunnuev componente con Exito cli</a></li>
</ul>
<h3 id="reacióndeunnuevocomponente-con-vtex-cli">Creación de un nuevo componente con Vtex cli</h3>
<p>para la creación de un nuevo proyecto empleamos el comando <code>`vtex init</code>` el cual nos da las siguientes opciones</p>
<p><code>vtex init</code></p>
<pre class="  language-bash"><code class="prism  language-bash">store-theme
</code></pre>
<h3 id="creación-de-un-nuevo-componente-con-exito-cli">Creación de un nuevo componente con Exito cli</h3>
<p><code>exito init</code></p>
<pre class=" language-bash"></pre></td></tr></tbody></table><h3 id="repositorio--de--los--proyectosrepositoriodelosproyectosh3">Repositorio- de- los- proyectos"&gt;Repositoriodelosproyectos</h3>
<p><a href="t https://github.com/grupo-exito-ecommerce/hello-react-ts">hello-react-typescript github</a></p>
<h3 id="instalación-de-dependencias-para-el-admin-de-vtexh3">Instalación de dependencias para el Admin de Vtex</h3>
<p>
</p><p>Las siguientes dependencias permiten agregar comportamientos como el admin pages y el storefront en la página de vtex.</p>
<p>
</p><p>vtex install vtex.pages#configuraci-editor</p>
<p>
</p><p>vtex install vtex.admin-pages</p>
<h2 id="trabajando-con-vtex-y-react">Trabajando con Vtex y React</h2>
<ul>
<li><a href="%C3%B3ón-de-un-componente-editable-en-el-storefront-de-vtex">Configuración para el StoreFront</a></li>
</ul>
<ul>
<li></li></ul><ul>
<li>[Promoverworkspace-a-s a producci%C3%B3n"&gt;Pón](#promover -un-workspaces a -a-producción</li>
</ul>

<hr>
<h3 id="configuración-de-un-componente-editable-en-el-storefront-de-vtex">Configuración de un componente editable en el StoreFront de Vtex</h3>
<p>
</p><p>para la configuración necesaria para el storefront se necesitan tres métodos dentro de nuestro componente:</p>
<ol>
<li><em>
</em></li></ol><ol>
<li><em>*getSchema</em> : Define los diferentes atributos que se le pasarán al componente por medio de las propiedades.</li>
</ol>

<pre class="  language-bash"><code class="prism  language-bash">ClassName.getSchema <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>
};
```
</p><p>Ejemplos donde se emplean esquemas en los componentes:</p>
<ul>
<li><a href="https://github.com/vtex-apps/carousel">Vtex Carousel</a></li>
</ul>
<ul>
<li><a href="https://github.com/vtex-apps/minicart">Vtex Minicart</a></li>
</ul>
<ol start="2">
<li><em>*propTypes</em>_ : Permite tipar los datos y definir de que tipo son cada uno de los atributos pasados por las props del componente</li>
</ol>
<pre class="  language-bash"><code class="prism  language-bash"><span class="token function">import</span> PropTypes from <span class="token string">'prop-types'</span>
ClassName.propTypes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<ol start="3">
<li>= {};
```
</li></ol><ol start="3">
<li>defaultProps_ : Permite definir cual va a ser el valor por defecto para nuestros atributos pasados por los props del componente.</li>
</ol>

<pre class="  language-bash"><code class="prism language- ```bash language-bash">
ClassName.defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>= {};
```
</p><p>Estos tres métodos son empleados por Vtex para la creación de las opciones del storeFront</p>
<p>Ejemplo </p><p>Ejemplo [aquí](https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/schema-examples/basic-shecma-js.js"&gt;aquí</p>
<h2 id="promover-un-workspaceproducción">)
</h2><h2 id="promover-un-workspace-a-producciónh2">Promover un workspace a producción</h2>
<p>
</p><p>los pasos para promover un workspace son:</p>
<ol>
<li><code>
</code></li></ol><ol>
<li><code>vtex workspace production true&lt;/code&gt;</code> Cambiamos el modo producción del workspace a true</li>
</ol>

<h4 id="callback">callback</h4>
<pre class=" language-bash"></pre><h4 id="callback">callback</h4>
<pre class=" language-bash"><code class="prism &quot;> language-bash">info: Workspace dev <span class="token operator">&lt;</span>span class<span class="token operator">=</span><span class="token string">"token keyword"</span><span class="token operator">&gt;</span>set<span class="token operator">&lt;</span>/span<span class="token operator">&gt;</span>set to production mode
info: You can now check your changes before publishing them
info: If everything is fine, promote with vtex promote
<span class="token operator">&lt;</span>/code<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/pre<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>ol start<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>code<span class="token operator">&gt;</span>``<span class="token variable"><span class="token variable">`</span>

2.  <span class="token variable">`</span></span>vtex publish <span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token operator">&lt;</span>/code<span class="token operator">&gt;</span>` Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes<span class="token operator">&lt;</span>/li<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/ol<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>ol start<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>code<span class="token operator">&gt;</span>

3<span class="token punctuation">)</span>  <span class="token variable"><span class="token variable">`</span>vtex promote<span class="token operator">&lt;</span>/code<span class="token operator">&gt;</span><span class="token variable">`</span></span> Promovemos el workspace actual a ser una integración con el master, este paso eliminara el workspace actual.<span class="token operator">&lt;</span>/li<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/ol<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2 id<span class="token operator">=</span><span class="token string">"como-publicar-una-aplicación"</span><span class="token operator">&gt;</span>

<span class="token comment">## Como publicar una aplicación&lt;/h2&gt;</span>
<span class="token operator">&lt;</span>ol<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>code<span class="token operator">&gt;</span>

1.  <span class="token variable"><span class="token variable">`</span>vtex workspace production true<span class="token operator">&lt;</span>/code<span class="token operator">&gt;</span><span class="token variable">`</span></span> Cambiamos el modo producción del workspace a true<span class="token operator">&lt;</span>/li<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/ol<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>ol start<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>code<span class="token operator">&gt;</span>

2<span class="token punctuation">)</span>  <span class="token variable"><span class="token variable">`</span>vtex publish <span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token operator">&lt;</span>/code<span class="token operator">&gt;</span><span class="token variable">`</span></span> Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes, ademas se debe de tener en cuenta la versión de la aplicación.<span class="token operator">&lt;</span>/li<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/ol<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>ol start<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>

3. Luego de publicar los componentes, volvemos a indicar que el workspace esta en modo desarrollo <span class="token operator">&lt;</span>code<span class="token operator">&gt;</span>`vtex workspace production false<span class="token operator">&lt;</span>/code<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/li<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/ol<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2 id<span class="token operator">=</span><span class="token string">"lista-de-componentes-actuales-en-react"</span><span class="token operator">&gt;</span>Lista de componentes actuales en React<span class="token operator">&lt;</span>/h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>pre class<span class="token operator">=</span><span class="token string">" language-undefined"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>code class<span class="token operator">=</span><span class="token string">"prism language-|- language-undefined"</span><span class="token operator">&gt;</span>`

<span class="token comment">## Lista de componentes actuales en React</span>

```<span class="token operator">|</span>- exito.vtex-components
<span class="token operator">|</span>- exito.login
<span class="token operator">|</span>- exito.product-carousel
<span class="token operator">|</span>- exito.minicart
<span class="token operator">|</span>- exito.carousel
<span class="token operator">|</span>- exito.category-menu
<span class="token operator">|</span>- exito.components
<span class="token operator">|</span>- exito.footer
<span class="token operator">|</span>- exito.header
<span class="token operator">|</span>- exito.home-configuration
<span class="token operator">|</span>- exito.geolocation
<span class="token operator">|</span>- exito.cart-detail
<span class="token operator">|</span>- exito.login
<span class="token operator">|</span>- exito.producto
<span class="token operator">|</span>- exito.product-details
<span class="token operator">|</span>- exito.product-images-list
<span class="token operator">|</span>- exito.product-summary
<span class="token operator">|</span>- exito.search-result
<span class="token operator">|</span>- exito.shelf
<span class="token operator">|</span>- exito.store
<span class="token operator">|</span>- exito.vtex-components
<span class="token operator">|</span> +- <span class="token punctuation">..</span>.
<span class="token operator">&lt;</span>/code<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/pre<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2 id<span class="token operator">=</span><span class="token string">"lista-de-componentes-actuales-en-node--graphql"</span><span class="token operator">&gt;</span>Lista de componentes actuales en Node + Graphql<span class="token operator">&lt;</span>/h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>pre class<span class="token operator">=</span><span class="token string">" language-undefined"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>code class<span class="token operator">=</span><span class="token string">"prism language-|- language-undefined"</span><span class="token operator">&gt;</span><span class="token operator">|</span>- exito.smartquick
<span class="token operator">|</span> +- <span class="token punctuation">..</span>.

<span class="token operator">&lt;</span>/code<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/pre<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2 id<span class="token operator">=</span><span class="token string">"integración-continua"</span><span class="token operator">&gt;</span>```

<span class="token comment">## Lista de componentes actuales en Node + Graphql</span>

```<span class="token operator">|</span>- exito.bags
<span class="token operator">|</span>- exito.smartquick
<span class="token operator">|</span> +- <span class="token punctuation">..</span>.

</code></pre>
<h2 id="integración-continuah2">Integración continua</h2>
<p>
</p><p>Los recurso necesarios para el proceso de integración continua son los siguientes</p>
<pre><code>
```
-config
|--docker
|---develop.dockerfile
|---master.dockerfile
|--aws|---develop-buildspec.yml
|---master-buildspec.yml
|--sonar
|---sonar-project.properties
| +- ...
</code></pre>
<p>```
ueden encontrar la especificación técnica de los archivo en el documento en <a href="[Github](https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/directory/continuos-integration-config/continuos-integration-config.md">Github</a></p>
<h4 id="configuración--de--los--recursos-con-exito-cliconfiguración-de-los-recursos-con-a-hrefhttpswww.npmjs.compackageexitoexito-cliah4">Configuración- de- los- recursos-con-exito-cli"&gt;Configuración de los recursos con <a href="https://www.npmjs.com/package/exito">exito-cli</a></h4>
<h4 id="comandos-a-emplear">Comandos a emplear:</h4>
<ol>
<li><code>exito generate config</code>: Comando que genera las carpetas necesarias de configuración para <a href="https://docs.aws.amazon.com/cloudformation/index.html">Cloud-Formation</a> y <a href="https://www.sonarqube.org/">SonarQube</a></li>
</ol>
<ol start="2">
<li><code>exito generate template [name-repository]</code>:</li>
</ol>
<p>Comando que genera los archivo <code>develop-template.json</code> y <code>master-template.json</code> estos archivos son empleados para montar la infraestructura con <a href="https://docs.aws.amazon.com/cloudformation/index.html">Cloud-Formation</a>, para ver la guía de como subir los templates a Cloud-Formation ver la siguiente documentación <a href="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/directory/cloud-formation/cloud-formation-documentation.md">Cloud-Formation-Doc</a>.</p>
<h1 id="proceso-de-migración-vtex-v2">Proceso de migración Vtex v2</h1>
<p>Actualización en el archivo manifest.json</p>
<pre><code>"vtex-version": "0.0.0",
"builders": {
	"react": "3.x",
	"styles": "1.x",
	"store": "0.x",
	"messages": "0.x"
},
</code></pre><p>Guía:<br>
</p>
<h4 id="guía-1">Guía:</h4>
<p><code>vtex-version</code>: Atributo empleado con la finalizad de mantener registrada la ultima versión del componente de vtex, la idea con este atributo es ir actualizando gradualmente cuando vtex lance versiones de los componentes que estemos personalizando y mantener el registro que indique cual fue la ultima versión de vtex empleada, si el componente no es creado por vtex aun así agregamos el atributo dejando en la versión <code>0.0.0</code> para así mantener la misma estructura en todos los proyectos.</p>
<p><code>"styles": "1.x", "store": "0.x",</code>: Nueva configuración para compilar la aplicación de vtex, se ha removido el builder <code>"pages": "0.x"</code>, Pueden encontrar una guía detallada de la migración de estos builders en <a href="https://help.vtex.com/es/tutorial/conociendo-el-storebuilder-y-el-stylesbuilder%22">vtex help</a></p>
<p><code>"messages": "1.x"</code>: Nueva configuración para la traducción de nuestro componente, actualmente el nuevo builder no soporta la versión <code>0.x</code> solo <code>1.x</code></p>
<h4 id="eliminación-de-la-carpeta-pages-y-creación-del-directorio-store">Eliminación de la carpeta pages y creación del directorio store</h4>
<p>Con los cambios en el builder, vtex reemplazo la lógica para armar las url y los contenedores de nuestra aplicación, pueden encontrar la explicación técnica armada por vtex <a href="https://help.vtex.com/es/tutorial/conociendo-el-storebuilder-y-el-stylesbuilder%22">vtex help</a></p>
<pre><code>|-pages ✗
|--pages.json ✗
|-store ✓
|--blocks.json ✓
|--interface.json ✓
|--routes.json ✓
| +- ...
</code></pre>
<h4 id="cambio-del-render-de-vtex">Cambio del <code>render</code> de vtex</h4>
<p>Se van a presentar varios errores en cuanto a la referencia de la dependencia <code>render</code> la cual ha cambiado por <code>vtex.render-runtime</code>.</p>
 con [exito-cli](https://www.npmjs.com/package/exito)
<h4 id="comandos-a-emplear">Comandos a emplear:</h4>
<ol>
<li><code>exito generate config</code>: Comando que genera las carpetas necesarias de configuración para <a href="https://docs.aws.amazon.com/cloudformation/index.html">Cloud-Formation</a> y <a href="https://www.sonarqube.org/">SonarQube</a></li>
</ol>
<ol start="2">
<li><code>exito generate template [name-repository]</code>:</li>
</ol>
<p>Comando que genera los archivo <code>develop-template.json</code> y <code>master-template.json</code> estos archivos son empleados para montar la infraestructura con <a href="https://docs.aws.amazon.com/cloudformation/index.html">Cloud-Formation</a>, para ver la guía de como subir los templates a Cloud-Formation ver la siguiente documentación <a href="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/directory/cloud-formation/cloud-formation-documentation.md">Cloud-Formation-Doc</a>.</p>
<h1 id="proceso-de-migración-vtex-v2">Proceso de migración Vtex v2</h1>
<p>Actualización en el archivo manifest.json</p>
<pre><code>"vtex-version": "0.0.0",
"builders": {
	"react": "3.x",
	"styles": "1.x",
	"store": "0.x",
	"messages": "0.x"
},

Guía:
</code></pre>
<h4 id="guía">Guía:</h4>
<p><code>vtex-version</code>: Atributo empleado con la finalizad de mantener registrada la ultima versión del componente de vtex, la idea con este atributo es ir actualizando gradualmente cuando vtex lance versiones de los componentes que estemos personalizando y mantener el registro que indique cual fue la ultima versión de vtex empleada, si el componente no es creado por vtex aun así agregamos el atributo dejando en la versión <code>0.0.0</code> para así mantener la misma estructura en todos los proyectos.</p>
<p><code>"styles": "1.x", "store": "0.x",</code>: Nueva configuración para compilar la aplicación de vtex, se ha removido el builder <code>"pages": "0.x"</code>, Pueden encontrar una guía detallada de la migración de estos builders en <a href="https://help.vtex.com/es/tutorial/conociendo-el-storebuilder-y-el-stylesbuilder%22">vtex help</a></p>
<p><code>"messages": "1.x"</code>: Nueva configuración para la traducción de nuestro componente, actualmente el nuevo builder no soporta la versión <code>0.x</code> solo <code>1.x</code></p>
<h4 id="eliminación-de-la-carpeta-pages-y-creación-del-directorio-store">Eliminación de la carpeta pages y creación del directorio store</h4>
<p>Con los cambios en el builder, vtex reemplazo la lógica para armar las url y los contenedores de nuestra aplicación, pueden encontrar la explicación técnica armada por vtex <a href="https://help.vtex.com/es/tutorial/conociendo-el-storebuilder-y-el-stylesbuilder%22">vtex help</a></p>
<pre><code>|-pages ✗
|--pages.json ✗
|-store ✓
|--blocks.json ✓
|--interface.json ✓
|--routes.json ✓
| +- ...
</code></pre>
<h4 id="cambio-del-render-de-vtex">Cambio del <code>render</code> de vtex</h4>
<p>Se van a presentar varios errores en cuanto a la referencia de la dependencia <code>render</code> la cual ha cambiado por <code>vtex.render-runtime</code>.</p>

