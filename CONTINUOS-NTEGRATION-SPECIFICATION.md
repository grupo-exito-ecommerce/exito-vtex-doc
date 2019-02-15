---


---

<h1 id="integración-continua">Integración continua</h1>
<h3 id="especificaciones-para-el-proceso-de-integración-continua">Especificaciones para el proceso de integración continua</h3>
<p>Estructura de los recursos necesarios para el proceso de integración continua de un proyecto en <a href="https://vtex.io/">Vtex io</a></p>
<pre><code>|-config
|--docker
|---develop.dockerfile
|---master.dockerfile
|--aws
|---develop-buildspec.yml
|---master-buildspec.yml
|--sonar
|---sonar-project.properties
| +- ...
</code></pre>
<h2 id="uso">Uso</h2>
<h4 id="configsonar"><code>config/sonar</code></h4>
<p>Los recursos necesarios para el proceso de sonarQube son los siguientes</p>
<pre><code>|-- sonar
|--- sonar-project.properties
</code></pre>
<p><code>sonar-project.properties</code>: Este archivo posee la configuración necesaria para subir el coverage generado por Jest, debemos de copiar este archivo en el directorio <code>react/</code></p>
<h4 id="configdocker"><code>config/docker</code></h4>
<p>Los recursos necesarios para el proceso de docker son los siguientes</p>
<pre><code>|-- docker
|--- develop.dockerfile
|--- master.dockerfile
</code></pre>
<p><code>develop.dockerfile</code>: se emplea únicamente para el proceso de pre producción, este archivo se encarga de realizar el proceso de <code>link</code> en el <code>workspace</code> <code>develop</code> de la cuenta <code>exito</code> de un componente empleando el siguiente código para el proceso.</p>
<pre class=" language-bash"><code class="prism  language-bash">RUN vtex login exito --verbose
RUN vtex use develop
RUN exito vtex <span class="token function">link</span> all --verbose
</code></pre>
<p><code>master.dockerfile</code>: se emplea únicamente para el proceso de publicación, este archivo se encarga de realizar el proceso de <code>publish</code> en un workspace aleatorio creado por el comando <code>exito publish</code> de la linea de comandos <a href="https://www.npmjs.com/package/exito">exito</a> .</p>
<p>Código empleado en el proceso de publicación de un componente</p>
<pre class=" language-bash"><code class="prism  language-bash">RUN vtex login exito --verbose
RUN exito publish --verbose
</code></pre>
<h4 id="configaws"><code>config/aws</code></h4>
<p>Los recursos necesarios para el proceso de Aws CodePipeline son</p>
<pre><code>|-- aws
|--- develop-buildspec.yml
|--- master-buildspec.yml
</code></pre>
<p><code>develop-buildspec.yml</code>: se emplea únicamente para el proceso de pre producción, este archivo se emplea en la configuración del CodeBuild que se ejecuta cuando realizamos integración de nuestros desarrollos a la rama <code>develop</code> de nuestro proyecto.</p>
<p>Comando empleado en el buildspec.yml</p>
<pre class=" language-bash"><code class="prism  language-bash">docker build --no-cache -f docker/develop.dockerfile <span class="token keyword">.</span>
</code></pre>
<p><code>master-buildspec.yml</code>: se emplea únicamente para el proceso de producción de un componente, este archivo se emplea en la configuración del CodeBuild que se ejecuta cuando realizamos integración de nuestros desarrollos a la rama <code>master</code> de nuestro proyecto.</p>
<p>Comando empleado en el buildspec.yml</p>
<pre class=" language-bash"><code class="prism  language-bash">docker build --no-cache -f docker/master.dockerfile <span class="token keyword">.</span>
</code></pre>
<p>Explicación de comandos usados:</p>
<p><code>docker build</code>: Empleamos docker para levantar la imagen que hay configurada en el directorio indicado.<br>
<code>-f</code>: indica el directorio donde se encuentra el dockerfile<br>
<code>--no-cache</code>: Obliga a docker a emplear una imagen nueva, sin guardar cache</p>

