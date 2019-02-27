Éxito (Vtex IO)===================Esta documentación es una guía para el desarrollo con ecursosnecesariosecursosnecesariosrabajandocontexrabajandocontexistadecomponentesistadecomponentes#proceso-de-migracin-vtex-v2https://yarnpkg.com/en/ Gestor de paquetes de Facebookhttps://code.visualstudio.com/ Editor3.1 Extensiones Básicas:
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippetshttps://marketplace.visualstudio.com/items?itemName=HookyQR.beautifyhttps://marketplace.visualstudio.com/items?itemName=steoates.autoimporthttps://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslinthttps://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlenshttps://github.com/facebook/create-react-appCreate React App https://www.npmjs.com/package/create-react-apphttps://www.npmjs.com/package/vtex Linea de comandos para vtexhttps://www.npmjs.com/package/exito-cli Linea de comandos para éxitohttp://cmder.net/ Terminal Para windowshttps://www.iterm2.com/ Terminal para Machttps://docs.aws.amazon.com/cli/latest/userguide/install-windows.html Linea de comandos para AmazonCursos para iniciarReact Básico https://www.youtube.com/watch?v=bG53Pw17tog&list=PLeWI3XlFEVOX6jACDygzApsvigQiDrun8
React Curso Completo https://exito.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview
Graphql + React https://exito.udemy.com/graphql-with-react-course/learn/v4/contenthttp://aprendegit.com/que-es-git-flow/https://github.com/sw-yx/react-typescript-cheatsheetComo manejar la versión de los componentes (Semantic versioning)para manejar la versión de nuestros componentes emplearemos la siguiente guía https://docs.npmjs.com/about-semantic-versioningComo se deben de documentar el código en ReactPara realizar la documentación en React se empleara el estándar definido por https://react-styleguidist.js.org/docs/documenting.html donde se definen diversas técnicas necesarias para documentar los componentes creados, ademas de esto permite generar una documentación automática que permite visualizar muy bien el contenido que hemos documentado. https://github.com/styleguidist/react-styleguidist/tree/master/examples/basicSe recomienda manejar el concepto de http://usejsdoc.org/ para los comentarios de nuestros componentes.Para la documentación emplearemos los archivosEjemplos para documentar:https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/CHANGELOG-BASIC.mdBasic https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/README-BASIC.mdDefinición para los workspace empleados en el desarrolloSe plantea la siguiente estructura, donde  es el workspace principal o productivo, el workspace  es el workspace pre productivo y los workspaces qa1, qa2, qa3 son los workspace destinados para los equipos de SQA para realizar las validaciones de los desarrollos que se planteen para el sprint. Cada desarrollador deberá de crear su workspace definiendo el equipo de SQA que realizara sus validaciones técnicas y el tipo de desarrollo que esta realizando en ese momento.qa1_headerexito.myvtex.com</strong><br>
<strong>qa1</strong> —&gt;**
  **qa1** ---> Equipo de SQA encargado de la validación técnica<br>
<strong>header</strong> —&gt; Desarrollo asignado</li>
</ul>
<h4 id="jerarquia-de-los-workspace">Jerarquia de los workspace</h4>

<table>
<thead>
<tr>
<th>vtex</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td><a href="https://exito.myvtex.com">exito</a></td>
</tr>
<tr>
<td><strong><a href="https://qa1--exito.myvtex.com/">qa1</a></strong></td>
<td><strong><a href="https://qa2--exito.myvtex.com/">qa2</a></strong></td>
</tr>
<tr>
<td>qa1_sprint</td>
<td>qa2_sprint</td>
</tr>
</tbody>
</table><h2 id="vtex-cli">Vtex Cli</h2>
<ul>
<li><a href="#creaci%C3%B3n-
**header** ---> Desarrollo asignado

#### Jerarquia de los workspace


| | | |
| ----------------------------------------- | ------------------------------------------------- | --------------------------------------- |
|                                          | **[exito](https://exito.myvtex.com)** | 
| | **[develop](https://develop--exito.myvtex.com/)** |                                           |
| **[qa1](https://qa1--exito.myvtex.com/)** | **[qa2](https://qa2--exito.myvtex.com/)**         | **[qa3](https://qa3--exito.myvtex.com/)** |
| dev1_developer                                | dev2_developer                                        | dev3_developer                                
## Vtex Cli

- [Creación de- un- nuevo- componente-con-vtex-cli">C](#creación -de -un - Equipo de SQA encargado de la validación técnicadeunnuevocomponentereacióndeunnuevocomponentededependenciasparaeldmindetexnstalacióndedependenciasparaeldminCreación de un nuevo componente con Exito clicreación-de-un-nuevo-componente-con-Creación de un nuevo componente con Vtex clipara la creación de un nuevo proyecto empleamos el comando vtex init el cual nos da las siguientes opcionesbashstore-theme
epositoriodelosproyectoshttps://github.com/grupo-exito-ecommerce/hello-react-tsInstalación de dependencias para el Admin de VtexLas siguientes dependencias permiten agregar comportamientos como el admin pages y el storefront en la página de vtex.vtex install vtex.pages-editorvtex install vtex.admin-pages#configuracin-de-un-componente-editable-en-el-storefront-de-vtexromoverworkspaceproducciromoverworkspaceproducciónConfiguración de un componente editable en el StoreFront de Vtexpara la configuración necesaria para el storefront se necesitan tres métodos dentro de nuestro componente:*getSchema : Define los diferentes atributos que se le pasarán al componente por medio de las propiedades.Ejemplos donde se emplean esquemas en los componentes:https://github.com/vtex-apps/carousel*propTypes : Permite tipar los datos y definir de que tipo son cada uno de los atributos pasados por las props del componente'prop-types'
ClassName.propTypes Estos tres métodos son empleados por Vtex para la creación de las opciones del storeFronthttps://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/schema-examples/basic-shecma-js.jsPromover un workspace a producciónlos pasos para promover un workspace son:vtex workspace production true Cambiamos el modo producción del workspace a true

#### callback
```bash
info: Workspace dev set to production mode
info: You can now check your changes before publishing them
info: If everything is fine, promote with vtex promote
vtex publish [path] Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentesvtex promote Promovemos el workspace actual a ser una integración con el master, este paso eliminara el workspace actual.Como publicar una aplicaciónvtex workspace production true Cambiamos el modo producción del workspace a truevtex publish [path] Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes, ademas se debe de tener en cuenta la versión de la aplicación.Luego de publicar los componentes, volvemos a indicar que el workspace esta en modo desarrollo vtex workspace production false|- e
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTY1MzQyODI5OV19
-->