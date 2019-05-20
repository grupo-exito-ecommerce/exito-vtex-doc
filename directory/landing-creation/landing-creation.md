---


---

<h1 id="creación-de-landing-en-vtex-io">Creación de landing en vtex IO</h1>
<h2 id="creación-de-la-url-en-vtex">Creación de la url en vtex</h2>
<ol>
<li>Ingresar a la herramienta <a href="https://exito.myvtex.com/admin/cms/pages">Pages</a> de Vtex y seleccionar la opción <em>Crear nueva página</em><br>
<img src="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/images/Screenshot%20at%20May%2020%2017-01-42.png?raw=true" alt="enter image description here"></li>
<li>Ingresamos el título para la página y la url a emplear, la url a emplear debe corresponder al nombre del archivo que se va a subir a <a href="https://exito.myvtex.com/admin/a">arquivos</a> de vtex sin las extensiones.</li>
</ol>
<blockquote>
<p>Ejemplo: landing-mercado.html.xml ----&gt; la url que usaremos es landing-mercado<br>
Se emplea la extension .xml ya que Vtex no soporta la carga de archivos html</p>
</blockquote>
<ol start="3">
<li>En la parte <em>Template</em> seleccionamos  el template <code>custom.landing-template</code></li>
</ol>
<blockquote>
<p>El template <code>custom.landing-template</code> es un componente creado para la carga del contenido html creado para las landings subidas en arquivos.</p>
</blockquote>
<p><img src="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/images/Screenshot%20at%20May%2020%2017-02-52.png?raw=true" alt="enter image description here"></p>
<ol start="5">
<li><strong>Opcional</strong> Podemos agregar que sea necesario realizar el login o configurar una fecha en la que queremos que se visualice o hasta que se visualice la página web<br>
<img src="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/images/Screenshot%20at%20May%2020%2017-04-24.png?raw=true" alt="enter image description here"></li>
</ol>
<h2 id="subir-el-archivo-html-a-arquivos-de-vtex">Subir el archivo html a arquivos de Vtex</h2>
<ol>
<li>Ingresar al admin de vtex para el <a href="https://exito.myvtex.com/admin/a">cms</a></li>
<li>Seleccionamos la opción <em>cms/files manager/.xml</em></li>
<li>Seleccionamos la opción <em>add</em> y luego cargamos el archivo<br>
<img src="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/images/Screenshot%20at%20May%2020%2017-14-46.png?raw=true" alt="enter image description here"></li>
</ol>
<blockquote>
<p>Recuerden cambiar la extension del archivo a .html.xml   de esta forma vtex permite subir el archivo html en arquivos<br>
Si no aparece la para cargar el archivo luego que seleccionamos la opción <em>add</em> debemos de activar flash en el navegador.<br>
<img src="https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/images/Screenshot%20at%20May%2020%2017-19-03.png?raw=true" alt="enter image description here"></p>
</blockquote>

