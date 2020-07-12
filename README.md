# MaximoClique

## Proyecto desarrollado por Bruno Amezcua Arévalo y José Luis García Mendoza

### Para la materia 'Análisis de Algoritmos' impartida por la maestra Miriam Pescador Rojas

### En la Escuela Superior de Cómputo del Instituto Politécnico Nacional
<img src="./MaximoClique/src/assets/img/grafo.png" alt="Grafo"><br>
> El proyecto está desarrollado en AngularJS 10, las instrucciones para compilarlo y ejecutarlo son las siguientes

<br>

## <a href='maximo-clique.web.app'> Página con la interfaz web ya levantada </a>

### Cómo instalar AngularJs

La instalación de Angular Js es mediante `npm`, el cual se obtiene instalando NodeJs desde la página oficial de node
> NodeJs: https://nodejs.org/es/download/

Una vez instalado NodeJs dentro de nuestro sistema, abriremos una pestaña de `terminal` en OS X y Linux, o de `CMD` en sistemas operativos Windows

#### Instalando angular-cli 
> Documentación Oficial: https://angular.io/cli

Para instalar la CLI de Angular, correremos el siguiente comando

```
sudo npm install -g @angular/cli
```

Una vez instalado el CLI, corremos el comando `ng version` para verificar que la instalación haya sido la correcta.
Terminando este paso, ya tendremos instalado AngularJs dentro de nuestro sistema y podremos correr el programa sin ningún problema

#### Descargando el código fuente de Github

Para poder clonar el código, abriremos una pestaña de `terminal` en OS X y Linux, o de `CMD` en sistemas operativos Windows, y ejecutaremos el siguiente comando:
```
git clone https://github.com/Brandeso/MaximoClique.git
```
Este comando procederá a descargar todos los archivos que son parte de nuestro proyecto, una vez descargado, procederemos a instalar las librerías y paquetes necesarios.

#### Instalando los paquetes necesarios para correr el Proyecto

Primero, dentro de nuestra `terminal` deberemos colocarnos en la siquiente ruta:

> ~/maximoclique/MaximoClique

Posteriormente, ejecutaremos el comando `npm install` <br>
Lo cual haremos ejecutando los siguientes comandos:
```
cd ~/maximoclique/MaximoClique
sudo npm i
```

Una vez terminado de instalar los paquetes necesarios, levantaremos el servidor con el siguiente comando:
```
sudo ng serve
```

Una vez que la terminal nos indique que el servidor está arriba, en nuestro navegador podremos <a href='http://localhost:4200'>abrir</a> el proyecto y probarlo.
> http://localhost:4200/
