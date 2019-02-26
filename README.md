Éxito (Vtex IO)===================Esta documentación es una guía para el desarrollo con ecursosnecesariosecursosnecesariosrabajandocontexrabajandocontexistadecomponentesistadecomponentes#proceso-de-migracin-vtex-v2https://yarnpkg.com/en/ Gestor de paquetes de Facebookhttps://code.visualstudio.com/ Editor3.1 Extensiones Básicas:
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippetshttps://marketplace.visualstudio.com/items?itemName=HookyQR.beautifyhttps://marketplace.visualstudio.com/items?itemName=steoates.autoimporthttps://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslinthttps://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlenshttps://github.com/facebook/create-react-appCreate React App https://www.npmjs.com/package/create-react-apphttps://www.npmjs.com/package/vtex Linea de comandos para vtexhttps://www.npmjs.com/package/exito-cli Linea de comandos para éxitohttp://cmder.net/ Terminal Para windowshttps://www.iterm2.com/ Terminal para Machttps://docs.aws.amazon.com/cli/latest/userguide/install-windows.html Linea de comandos para AmazonCursos para iniciarReact Básico https://www.youtube.com/watch?v=bG53Pw17tog&list=PLeWI3XlFEVOX6jACDygzApsvigQiDrun8
React Curso Completo https://exito.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview
Graphql + React https://exito.udemy.com/graphql-with-react-course/learn/v4/contenthttp://aprendegit.com/que-es-git-flow/https://github.com/sw-yx/react-typescript-cheatsheetComo manejar la versión de los componentes (Semantic versioning)para manejar la versión de nuestros componentes emplearemos la siguiente guía https://docs.npmjs.com/about-semantic-versioningComo se deben de documentar el código en ReactPara realizar la documentación en React se empleara el estándar definido por https://react-styleguidist.js.org/docs/documenting.html donde se definen diversas técnicas necesarias para documentar los componentes creados, ademas de esto permite generar una documentación automática que permite visualizar muy bien el contenido que hemos documentado. https://github.com/styleguidist/react-styleguidist/tree/master/examples/basicSe recomienda manejar el concepto de http://usejsdoc.org/ para los comentarios de nuestros componentes.Para la documentación emplearemos los archivosEjemplos para documentar:https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/CHANGELOG-BASIC.mdBasic https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/README-BASIC.mdDefinición para los workspace empleados en el desarrolloSe plantea la siguiente estructura, donde  es el workspace principal o productivo, el workspace  es el workspace pre productivo y los workspaces qa1, qa2, qa3 son los workspace destinados para los equipos de SQA para realizar las validaciones de los desarrollos que se planteen para el sprint. Cada desarrollador deberá de crear su workspace definiendo el equipo de SQA que realizara sus validaciones técnicas y el tipo de desarrollo que esta realizando en ese momento.qa1_headerexito.myvtex.com Equipo de SQA encargado de la validación técnicahttp://deunnuevocomponentereacióndeunnuevocomponentededependenciasparaeldmindetexnstalacióndedependenciasparaeldminCreación de un nuevo componente con Exito clicreación-de-un-nuevo-componente-con-Creación de un nuevo componente con Vtex clipara la creación de un nuevo proyecto empleamos el comando vtex init el cual nos da las siguientes opcionesepositoriodelosproyectoshttps://github.com/grupo-exito-ecommerce/hello-react-tsInstalación de dependencias para el Admin de VtexLas siguientes dependencias permiten agregar comportamientos como el admin pages y el storefront en la página de vtex.vtex install vtex.pages-editorvtex install vtex.admin-pages#configuracin-de-un-componente-editable-en-el-storefront-de-vtexromoverworkspaceproducciromoverworkspaceproducciónConfiguración de un componente editable en el StoreFront de Vtexpara la configuración necesaria para el storefront se necesitan tres métodos dentro de nuestro componente:*getSchema : Define los diferentes atributos que se le pasarán al componente por medio de las propiedades.bashClassName.getSchema Ejemplos donde se emplean esquemas en los componentes:https://github.com/vtex-apps/carousel*propTypes : Permite tipar los datos y definir de que tipo son cada uno de los atributos pasados por las props del componente'prop-types'
ClassName.propTypes Estos tres métodos son empleados por Vtex para la creación de las opciones del storeFronthttps://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/schema-examples/basic-shecma-js.jsPromover un workspace a producciónlos pasos para promover un workspace son:vtex workspace production true Cambiamos el modo producción del workspace a truebashinfo: Workspace dev  to production mode
info: You can now check your changes before publishing them
info: If everything is fine, promote with vtex promote
vtex publish [path] Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentesvtex promote Promovemos el workspace actual a ser una integración con el master, este paso eliminara el workspace actual.Como publicar una aplicaciónvtex workspace production true Cambiamos el modo producción del workspace a truevtex publish [path] Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes, ademas se debe de tener en cuenta la versión de la aplicación.Luego de publicar los componentes, volvemos a indicar que el workspace esta en modo desarrollo vtex workspace production false|- exito.login
|- exito.product-carousel
|- exito.minicart
|- exito.carousel
|- exito.category-menu
|- exito.components
|- exito.footer
|- exito.header
|- exito.home-configuration
|- exito.geolocation
|- exito.cart-detail
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
Integración continuaLos recurso necesarios para el proceso de integración continua son los siguientes-config
|--docker
|---develop.dockerfile
|---master.dockerfile
|--aws|---develop-buildspec.yml
|---master-buildspec.yml
|--sonar
|---sonar-project.properties
| +- ...
ueden encontrar la especificación técnica de los archivo en el documento en https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/directory/continuos-integration-config/continuos-integration-config.mdonfiguracióndelosrecursosconexito-cliexito generate config: Comando que genera las carpetas necesarias de configuración para https://docs.aws.amazon.com/cloudformation/index.htmlexito generate template [name-repository]Comando que genera los archivo develop-template.jsonmaster-template.json estos archivos son empleados para montar la infraestructura con https://docs.aws.amazon.com/cloudformation/index.html, para ver la guía de como subir los templates a Cloud-Formation ver la siguiente documentación https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/directory/cloud-formation/cloud-formation-documentation.mdProceso de migración Vtex v2Actualización en el archivo manifest.json"vtex-version": "0.0.0",
"builders": {
	"react": "3.x",
	"styles": "1.x",
	"store": "0.x",
	"messages": "0.x"
},

Guía:
vtex-version: Atributo empleado con la finalizad de mantener registrada la ultima versión del componente de vtex, la idea con este atributo es ir actualizando gradualmente cuando vtex lance versiones de los componentes que estemos personalizando y mantener el registro que indique cual fue la ultima versión de vtex empleada, si el componente no es creado por vtex aun así agregamos el atributo dejando en la versión  para así mantener la misma estructura en todos los proyectos."styles": "1.x", "store": "0.x",: Nueva configuración para compilar la aplicación de vtex, se ha removido el builder "pages": "0.x", Pueden encontrar una guía detallada de la migración de estos builders en https://help.vtex.com/es/tutorial/conociendo-el-storebuilder-y-el-stylesbuilder"messages": "1.x": Nueva configuración para la traducción de nuestro componente, actualmente el nuevo builder no soporta la versión Eliminación de la carpeta pages y creación del directorio storeCon los cambios en el builder, vtex reemplazo la lógica para armar las url y los contenedores de nuestra aplicación, pueden encontrar la explicación técnica armada por vtex https://help.vtex.com/es/tutorial/conociendo-el-storebuilder-y-el-stylesbuilder|-pages ✗
|--pages.json ✗
|-store ✓
|--blocks.json ✓
|--interface.json ✓
|--routes.json ✓
| +- ...
Se van a presentar varios errores en cuanto a la referencia de la dependencia  la cual ha cambiado por vtex.render-runtimevtex.store migra a "vtex.store-resources": "0.x", donde podemos encontrar el OrderFormContexthttps://github.com/vtex-apps/store-resources/tree/master/react
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxNjA3Nzk2Ml19
-->