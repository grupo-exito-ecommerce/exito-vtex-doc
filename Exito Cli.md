---


---

<h1 id="exito-cli">Exito CLI</h1>
<h2 id="instalación">Instalación</h2>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">npm</span> i exito-cli

<span class="token function">npm</span> i -g exito-cli
</code></pre>
<p>Comandos disponibles:</p>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">npm</span> run exito

Upload components to vtex <span class="token punctuation">(</span>vtex link<span class="token punctuation">)</span>
Unlink components from vtex <span class="token punctuation">(</span>vtex unlink<span class="token punctuation">)</span>
Clone projects from aws
</code></pre>
<h2 id="desarollo-local">Desarollo local</h2>
<p>local <code>sudo npm link</code> ò <code>node exito-cli</code></p>
<p>Publish to npm  <code>sudo npm publish</code></p>
<h2 id="documentación">Documentación</h2>
<p><strong>Upload components to vtex</strong>: Permite analizar la carpeta donde se este corriendo el comando y obtener el orden en que se deben de subir los componentes a vtex, este comando es muy util cuando se necesitan subir muchos proyectos aun que también sirve con pocos proyectos. luego de obtener el orden de los componentes se inicia la subida de los componentes empleando el método de vtex <code>vtex link</code></p>
<p><strong>Unlink components from vtex</strong>: Permite bajar de vtex todos los proyectos encontrados en el directorio indicado, se emplea el comando de vtex <code>vtex unlink</code>para realizar el proceso.</p>
<p><strong>Clone projects from aws</strong>: Permite obtener los proyectos de aws, filtra los proyectos por medio de un prefijo que van a compartir todos los proyectos y luego realiza la clonación en el directorio indicado.</p>

