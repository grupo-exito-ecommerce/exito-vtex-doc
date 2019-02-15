# Integración continua

### Especificaciones para el proceso de integración continua

Estructura de los recursos necesarios para el proceso de integración continua de un proyecto en [Vtex io](https://vtex.io/)
```
|-config
|--docker
|---develop.dockerfile
|---master.dockerfile
|--aws
|---develop-buildspec.yml
|---master-buildspec.yml
|--sonar
|---sonar-project.properties
| +- ...
```
## Uso

#### `config/sonar`

Los recursos necesarios para el proceso de sonarQube son los siguientes
```
|-- sonar
|--- sonar-project.properties
```

`sonar-project.properties`: Este archivo posee la configuración necesaria para subir el coverage generado por Jest, debemos de copiar este archivo en el directorio `react/`

#### `config/docker`

Los recursos necesarios para el proceso de docker son los siguientes
```
|-- docker
|--- develop.dockerfile
|--- master.dockerfile
```

`develop.dockerfile`: se emplea únicamente para el proceso de pre producción, este archivo se encarga de realizar el proceso de `link` en el `workspace` `develop` de la cuenta `exito` de un componente empleando el siguiente código para el proceso.

```bash
RUN vtex login exito --verbose
RUN vtex use develop
RUN exito vtex link all --verbose
```

`master.dockerfile`: se emplea únicamente para el proceso de publicación, este archivo se encarga de realizar el proceso de `publish` en un workspace aleatorio creado por el comando `exito publish` de la linea de comandos [exito](https://www.npmjs.com/package/exito) .

Código empleado en el proceso de publicación de un componente

```bash
RUN vtex login exito --verbose
RUN exito publish --verbose
```


#### `config/aws`

Los recursos necesarios para el proceso de Aws CodePipeline son
```
|-- aws
|--- develop-buildspec.yml
|--- master-buildspec.yml
```

`develop-buildspec.yml`: se emplea únicamente para el proceso de pre producción, este archivo se emplea en la configuración del CodeBuild que se ejecuta cuando realizamos integración de nuestros desarrollos a la rama `develop` de nuestro proyecto.

Comando empleado en el buildspec.yml
```bash
docker build --no-cache -f docker/develop.dockerfile .
```

`master-buildspec.yml`: se emplea únicamente para el proceso de producción de un componente, este archivo se emplea en la configuración del CodeBuild que se ejecuta cuando realizamos integración de nuestros desarrollos a la rama `master` de nuestro proyecto.

Comando empleado en el buildspec.yml
```bash
docker build --no-cache -f docker/master.dockerfile .
```

Explicación de comandos usados: 

`docker build`: Empleamos docker para levantar la imagen que hay configurada en el directorio indicado.
`-f`: indica el directorio donde se encuentra el dockerfile
`--no-cache`: Obliga a docker a emplear una imagen nueva, sin guardar cache

Integración continua
Especificaciones para el proceso de integración continua
Estructura de los recursos necesarios para el proceso de integración continua de un proyecto en Vtex io

|-config
|--docker
|---develop.dockerfile
|---master.dockerfile
|--aws
|---develop-buildspec.yml
|---master-buildspec.yml
|--sonar
|---sonar-project.properties
| +- ...
Uso
config/sonar
Los recursos necesarios para el proceso de sonarQube son los siguientes

|-- sonar
|--- sonar-project.properties
sonar-project.properties: Este archivo posee la configuración necesaria para subir el coverage generado por Jest, debemos de copiar este archivo en el directorio react/

config/docker
Los recursos necesarios para el proceso de docker son los siguientes

|-- docker
|--- develop.dockerfile
|--- master.dockerfile
develop.dockerfile: se emplea únicamente para el proceso de pre producción, este archivo se encarga de realizar el proceso de link en el workspace develop de la cuenta exito de un componente empleando el siguiente código para el proceso.

RUN vtex login exito --verbose
RUN vtex use develop
RUN exito vtex link all --verbose
master.dockerfile: se emplea únicamente para el proceso de publicación, este archivo se encarga de realizar el proceso de publish en un workspace aleatorio creado por el comando exito publish de la linea de comandos exito .

Código empleado en el proceso de publicación de un componente

RUN vtex login exito --verbose
RUN exito publish --verbose
config/aws
Los recursos necesarios para el proceso de Aws CodePipeline son

|-- aws
|--- develop-buildspec.yml
|--- master-buildspec.yml
develop-buildspec.yml: se emplea únicamente para el proceso de pre producción, este archivo se emplea en la configuración del CodeBuild que se ejecuta cuando realizamos integración de nuestros desarrollos a la rama develop de nuestro proyecto.

Comando empleado en el buildspec.yml

docker build --no-cache -f docker/develop.dockerfile .
master-buildspec.yml: se emplea únicamente para el proceso de producción de un componente, este archivo se emplea en la configuración del CodeBuild que se ejecuta cuando realizamos integración de nuestros desarrollos a la rama master de nuestro proyecto.

Comando empleado en el buildspec.yml

docker build --no-cache -f docker/master.dockerfile .
Explicación de comandos usados:

docker build: Empleamos docker para levantar la imagen que hay configurada en el directorio indicado.
-f: indica el directorio donde se encuentra el dockerfile
--no-cache: Obliga a docker a emplear una imagen nueva, sin guardar cache

Markdown selection 176 bytes 14 words 11 lines Ln 6, Col 0 HTML 2188 characters 355 words 47 paragraphs
PUBLISH
CONTINUOS-INTEGRATION-SPECIFICATION is already published.

