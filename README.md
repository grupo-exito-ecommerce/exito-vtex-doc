# Éxito (Vtex IO)

===================

Esta documentación es una guía para el desarrollo con **Vtex IO**

 [Recursos necesarios](#recursos-necesarios)
 [Guía](#guía)
 [Vtex Cli](#vtex-cli)
 [Trabajando con Vtex + React](#trabajando-con-vtex-y-react)
 [Lista de componentes](#lista-de-componentes-actuales)
- [Migración Vtex v2](#proceso-de-migración-vtex-v2)

## Recursos necesarios

1.  [Node js](https://nodejs.org/es/)
2.  [Yarn](https://yarnpkg.com/en/) Gestor de paquetes de Facebook
3.  [Visual Studio Code](https://code.visualstudio.com/) Editor
    3.1 Extensiones Básicas:
    - [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
    - [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
    - [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
    - [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
4.  [Create React App Repo](https://github.com/facebook/create-react-app)
5.  [Create React App Npm](https://www.npmjs.com/package/create-react-app)
6.  [Vtex Cli](https://www.npmjs.com/package/vtex) Linea de comandos para vtex
7.  [Exito Cli](https://www.npmjs.com/package/exito-cli) Linea de comandos para éxito
8.  [CMDER](http://cmder.net/) Terminal Para windows
9.  [Iterm2](https://www.iterm2.com/) Terminal para Mac
10. [Aws Cli](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html) Linea de comandos para Amazon

## Guía

### Cursos para iniciar

React Básico [Youtube CodeJobs](https://www.youtube.com/watch?v=bG53Pw17tog&list=PLeWI3XlFEVOX6jACDygzApsvigQiDrun8)
React Curso Completo [Udemy](https://exito.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview)
Graphql + React [Udemy](https://exito.udemy.com/graphql-with-react-course/learn/v4/content)
Guía [Gitflow](http://aprendegit.com/que-es-git-flow/)

[React typescript tips](https://github.com/sw-yx/react-typescript-cheatsheet)

### Como manejar la versión de los componentes (Semantic versioning)

para manejar la versión de nuestros componentes emplearemos la siguiente guía [semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)

### Como se deben de documentar el código en React

Para realizar la documentación en React se empleara el estándar definido por [react-styleguidist](https://react-styleguidist.js.org/docs/documenting.html) donde se definen diversas técnicas necesarias para documentar los componentes creados, ademas de esto permite generar una documentación automática que permite visualizar muy bien el contenido que hemos documentado. [demo](https://github.com/styleguidist/react-styleguidist/tree/master/examples/basic)

Se recomienda manejar el concepto de [jsDoc](http://usejsdoc.org/) para los comentarios de nuestros componentes.

Para la documentación emplearemos los archivos

- Changelog.md

* Readme.md

### Ejemplos para documentar:

[Basic Changelog](https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/CHANGELOG-BASIC.md)

[Basic Readme](https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/documentation/README-BASIC.md)

### Definición para los workspace empleados en el desarrollo

Se plantea la siguiente estructura, donde **exito** es el workspace principal o productivo, el workspace **develop** es el workspace pre productivo y los workspaces **qa1, qa2, qa3** son los workspace destinados para los equipos de SQA para realizar las validaciones de los desarrollos que se planteen para el sprint. Cada desarrollador deberá de crear su workspace definiendo el equipo de SQA que realizara sus validaciones técnicas y el tipo de desarrollo que esta realizando en ese momento.

#### Ejemplo:

- **qa1_header--exito.myvtex.com**
  **qa1** ---> Equipo de SQA encargado de la validación técnica
**header** ---> Desarrollo asignado

#### Jerarquia de los workspace


|                                 vtex)                             |                                           |
| ----------------------------------------- | ------------------------------------------------- | ----------------------------------------- |
|                                          | [exito](exito.my|  | **[develop](https://develop--exito.myvtex.com/)** |                                           |
| **[qa1](https://qa1--exito.myvtex.com/)** | **[qa2](https://qa2--exito.myvtex.com/)**         | **[qa3](https://qa3--exito.myvtex.com/)** |
| qa1_sprint                                | qa2_sprint                                        | qa3_sprint                                
## Vtex Cli

- [Creación de un nuevo componente](#creación-de-un-nuevo-componente-con-vtex-cli)

* [Instalación de dependencias para el Admin de Vtex](#instalación-de-dependencias-para-el-admin-de-vtex)

- [Creación de un nuevo componente con Exito cli](#creación-de-un-nuevo-componente-con-exito-cli)

### Creación de un nuevo componente con Vtex cli

para la creación de un nuevo proyecto empleamos el comando `vtex init` el cual nos da las siguientes opciones

`vtex init`

```bash
store-theme
```

### Creación de un nuevo componente con Exito cli

`exito init`
```bash
hello-react-typescript
```

### Repositorio de los proyectos

[hello-react-typescript github](https://github.com/grupo-exito-ecommerce/hello-react-ts)

### Instalación de dependencias para el Admin de Vtex

Las siguientes dependencias permiten agregar comportamientos como el admin pages y el storefront en la página de vtex.

vtex install vtex.pages-editor

vtex install vtex.admin-pages

## Trabajando con Vtex y React

- [Configuración para el StoreFront](#configuración-de-un-componente-editable-en-el-storefront-de-vtex)

* [Promover workspaces a producción](#promover-un-workspace-a-producción)

---

### Configuración de un componente editable en el StoreFront de Vtex

para la configuración necesaria para el storefront se necesitan tres métodos dentro de nuestro componente:

1. _*getSchema_ : Define los diferentes atributos que se le pasarán al componente por medio de las propiedades.
```bash
ClassName.getSchema = () => {
return {}
};
```

Ejemplos donde se emplean esquemas en los componentes:

- [Vtex Carousel](https://github.com/vtex-apps/carousel)

* [Vtex Minicart](https://github.com/vtex-apps/minicart)

2. _*propTypes_ : Permite tipar los datos y definir de que tipo son cada uno de los atributos pasados por las props del componente
```bash
import PropTypes from 'prop-types'
ClassName.propTypes = {};
```

3. defaultProps_ : Permite definir cual va a ser el valor por defecto para nuestros atributos pasados por los props del componente.
```bash
ClassName.defaultProps = {};
```

Estos tres métodos son empleados por Vtex para la creación de las opciones del storeFront

Ejemplo [aquí](https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/resources/examples/components/schema-examples/basic-shecma-js.js)

## Promover un workspace a producción

los pasos para promover un workspace son:

1.  `vtex workspace production true` Cambiamos el modo producción del workspace a true

#### callback
```bash
info: Workspace dev set to production mode
info: You can now check your changes before publishing them
info: If everything is fine, promote with vtex promote
```

2.  `vtex publish [path]` Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes

3)  `vtex promote` Promovemos el workspace actual a ser una integración con el master, este paso eliminara el workspace actual.

## Como publicar una aplicación

1.  `vtex workspace production true` Cambiamos el modo producción del workspace a true

2)  `vtex publish [path]` Publicar todos los componentes o los componentes que vallamos a emplear, para realizar la publicación de un componente debemos de tener en cuenta el orden de importancia de los componentes. de lo contrario obtendremos error al subir los componentes, ademas se debe de tener en cuenta la versión de la aplicación.

3. Luego de publicar los componentes, volvemos a indicar que el workspace esta en modo desarrollo `vtex workspace production false`

## Lista de componentes actuales en React

```|- exito.vtex-components
|- exito.login
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
```

## Lista de componentes actuales en Node + Graphql

```|- exito.bags
|- exito.smartquick
| +- ...

```

## Integración continua

Los recurso necesarios para el proceso de integración continua son los siguientes
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
```
ueden encontrar la especificación técnica de los archivo en el documento en [Github](https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/directory/continuos-integration-config/continuos-integration-config.md)

#### Configuración de los recursos con [exito-cli](https://www.npmjs.com/package/exito)

#### Comandos a emplear:

1.  `exito generate config`: Comando que genera las carpetas necesarias de configuración para [Cloud-Formation](https://docs.aws.amazon.com/cloudformation/index.html) y [SonarQube](https://www.sonarqube.org/)

2)  `exito generate template [name-repository]`:

Comando que genera los archivo `develop-template.json` y `master-template.json` estos archivos son empleados para montar la infraestructura con [Cloud-Formation](https://docs.aws.amazon.com/cloudformation/index.html), para ver la guía de como subir los templates a Cloud-Formation ver la siguiente documentación [Cloud-Formation-Doc](https://github.com/grupo-exito-ecommerce/exito-vtex-doc/blob/master/directory/cloud-formation/cloud-formation-documentation.md).

# Proceso de migración Vtex v2

Actualización en el archivo manifest.json

```
"vtex-version": "0.0.0",
"builders": {
	"react": "3.x",
	"styles": "1.x",
	"store": "0.x",
	"messages": "0.x"
},

Guía:
```

#### Guía:

`vtex-version`: Atributo empleado con la finalizad de mantener registrada la ultima versión del componente de vtex, la idea con este atributo es ir actualizando gradualmente cuando vtex lance versiones de los componentes que estemos personalizando y mantener el registro que indique cual fue la ultima versión de vtex empleada, si el componente no es creado por vtex aun así agregamos el atributo dejando en la versión `0.0.0` para así mantener la misma estructura en todos los proyectos.

`"styles": "1.x", "store": "0.x",`: Nueva configuración para compilar la aplicación de vtex, se ha removido el builder `"pages": "0.x"`, Pueden encontrar una guía detallada de la migración de estos builders en [vtex help](https://help.vtex.com/es/tutorial/conociendo-el-storebuilder-y-el-stylesbuilder")

`"messages": "1.x"`: Nueva configuración para la traducción de nuestro componente, actualmente el nuevo builder no soporta la versión `0.x` solo `1.x`

#### Eliminación de la carpeta pages y creación del directorio store

Con los cambios en el builder, vtex reemplazo la lógica para armar las url y los contenedores de nuestra aplicación, pueden encontrar la explicación técnica armada por vtex [vtex help](https://help.vtex.com/es/tutorial/conociendo-el-storebuilder-y-el-stylesbuilder")

```
|-pages ✗
|--pages.json ✗
|-store ✓
|--blocks.json ✓
|--interface.json ✓
|--routes.json ✓
| +- ...
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEzMzU3OTc5MF19
-->