# Integración continua

### Especificaciones para el proceso de integración continua

Estructura de los recursos necesarios para el proceso de integración continua de un proyecto en [Vtex io](https://vtex.io/)
```
|- config
|-- docker
|--- develop.dockerfile
|--- master.dockerfile
|-- aws
|--- develop-buildspec.yml
|--- master-buildspec.yml
| +- ...
```
## Uso

#### `config/sonar`

Los recursos necesarios para el proceso de sonarQube son los siguientes
```
|-- sonar
|--- sonar-project.properties
```

`sonar-project.properties`: Este archivo posee la configuración necesaria para subir el coverage generado por Jest.

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

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNzU3NzIzNDYsMTQxNTU1Mjg0M119
-->