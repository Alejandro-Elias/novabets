# Novabets

Reproductor de música local desarrollado con Electron.

## Descripción

Novabets es una aplicación de escritorio orientada a la reproducción de música almacenada localmente. Permite cargar carpetas de audio, navegar por listas de reproducción y gestionar la reproducción mediante una interfaz desarrollada con tecnologías web.

El proyecto fue creado como parte de mi proceso de aprendizaje en desarrollo web Full Stack, aplicando JavaScript moderno, manipulación del DOM, almacenamiento local y desarrollo de aplicaciones de escritorio con Electron.

## Características

* Reproducción de archivos de audio locales.
* Carga de carpetas musicales.
* Generación de listas de reproducción.
* Modo aleatorio (Shuffle).
* Controles de reproducción:

  * Play
  * Pause
  * Next
  * Previous
* Persistencia de configuración mediante Local Storage.
* Temas personalizables.
* Lectura de metadatos musicales.
* Aplicación empaquetada para Linux mediante Electron Builder.

## Tecnologías utilizadas

* JavaScript
* HTML5
* CSS3
* Electron
* Node.js
* music-metadata

## Instalación para desarrollo

Clonar el repositorio:

```bash
git clone https://github.com/Alejandro-Elias/novaBeat.git
cd novabets
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm start
```

## Generar build

```bash
npm run build
```

Los paquetes generados se almacenan en la carpeta:

```text
dist/
```

## Estructura del proyecto

```text
src/
├── main.js
├── renderer/
├── modules/
├── css/
└── assets/
```

(Esta estructura puede variar según la evolución del proyecto.)

## Estado del proyecto

Proyecto en desarrollo activo.

Actualmente el objetivo principal es mejorar la experiencia de usuario, ampliar las funcionalidades de gestión musical y continuar aplicando buenas prácticas de desarrollo y organización del código.

## Autor

Alejandro Elias

Desarrollador Web Full Stack
