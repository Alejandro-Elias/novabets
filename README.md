# Novabets

Reproductor de música local desarrollado con Electron.

## Descripción

Novabets es una aplicación de escritorio orientada a la reproducción de música almacenada localmente. Permite cargar carpetas de audio, gestionar listas de reproducción y controlar la reproducción mediante una interfaz desarrollada con tecnologías web.

El proyecto fue creado como parte de mi proceso de aprendizaje en desarrollo web Full Stack, aplicando JavaScript moderno, manipulación del DOM, almacenamiento local y desarrollo de aplicaciones de escritorio con Electron.

## Características

### Reproducción de audio

* Reproducción de archivos de audio locales.
* Carga automática de carpetas musicales.
* Navegación entre canciones.
* Reproducción automática de la siguiente pista.
* Modo aleatorio (Shuffle).

### Gestión de playlists

* Creación de listas de reproducción personalizadas.
* Guardado de playlists mediante almacenamiento local.
* Selección de playlists guardadas.
* Eliminación de playlists almacenadas.
* Cambio rápido entre la playlist actual y las playlists guardadas.

### Interfaz y experiencia de usuario

* Controles de reproducción:

  * Play
  * Pause
  * Next
  * Previous
  * Repeat
* Control de volumen.
* Persistencia de configuraciones entre sesiones.
* Interfaz desarrollada con HTML, CSS y JavaScript.

### Información musical

* Lectura de metadatos de archivos de audio.
* Visualización de información de las pistas cargadas.

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

Los paquetes generados se almacenan en:

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

> La estructura puede variar a medida que evoluciona el proyecto.

## Estado del proyecto

Proyecto en desarrollo activo.

### Próximos objetivos

* Mejoras de rendimiento y optimización de renderizado.
* Nuevas herramientas de gestión de playlists.
* Mejoras en la experiencia de usuario.
* Incorporación de nuevas funcionalidades relacionadas con la organización musical.
* Continuar aplicando buenas prácticas de arquitectura y desarrollo.

## Autor

Alejandro Elias

Desarrollador Web Full Stack

---

Proyecto desarrollado como práctica de programación y aprendizaje de tecnologías web modernas aplicadas al desarrollo de aplicaciones de escritorio.
