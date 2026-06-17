import { cerrarBtn } from "./renderer/buttons/cerrar.js";
import { minimizarBtn } from "./renderer/buttons/minimizar.js";
import { play } from "./renderer/buttons/play.js";
import { stop } from "./renderer/buttons/stop.js";
import { tiempos } from "./renderer/tiempos.js";
import { cambiarVolumen } from "./renderer/volumen.js";
import { folder } from "./renderer/folder.js";
import { mostrarMetadata } from "./renderer/mostrarDatos.js";
import { nextTrack } from "./renderer/buttons/play/next.js";
import { previousTrack } from "./renderer/buttons/play/previous.js";
import { repeat } from "./renderer/repeat.js";
import { selectPLayList } from "./renderer/SelectItemPlaylist.js";
import { mostrarLista, mostrarlistas } from "./renderer/mostrarLista.js";
import { loadList } from "./renderer/buttons/play/loadList.js";
import { files } from "./renderer/files.js";
import { guardarLista } from "./renderer/guardarPlaylist.js";
import { SeleccionarLista } from "./renderer/selectPlaylist.js";
import { metadatos } from "./renderer/getMetadatos.js";
  
  export const player = document.getElementById("player");
  export const playBtn = document.getElementById("playBtn");
  export const stopBtn = document.getElementById("stopBtn");
  export const progress = document.getElementById("progress");
  export const titleEl = document.getElementById("title");
  export const artistEl = document.getElementById("artist");
  export const volumen = document.getElementById("volumen-control");
  export const time = document.getElementById("tiempo-progreso");
  export const minimizar = document.getElementById("minimizar");
  export const cerrar = document.getElementById("cerrar");
  export const imgCover = document.getElementById("cover");
  export const volumenText = document.getElementById("volumen-texto");
  export const selectFolder = document.getElementById("isFolderBtn");
  export const selectFiles = document.getElementById("isFileBtn");
  export const isListBtn = document.getElementById("isListBtn");
  export const playlistSelect = document.getElementById("playlistSelect");
  export const inputGuardar = document.getElementById("inputGuardar");
  export const line = document.getElementById("line");
  export const listaReproduccion = document.getElementById("listaReproduccion");
  export const listaPlaylist = document.getElementById("lista-playlist");
  export const nextBtn = document.getElementById("nextBtn");
  export const previousBtn = document.getElementById("previousBtn");
  export const repeatBtn = document.getElementById("repeatBtn") 
  export const repeatText = document.getElementById("repeatText") 
  export const eliminar = document.getElementById("eliminar") 
  export const eliminarPlaylistBtn = document.getElementById("eliminarPlaylist") 
  export const guardarPlaylist = document.getElementById("guardarPlaylist") 

  export const list = [];

  mostrarLista();
  mostrarlistas()
  mostrarMetadata();
  cerrarBtn();
  minimizarBtn();
  stop();
  cambiarVolumen();
  folder();
  files()
  play();
  nextTrack()
  previousTrack()
  repeat()
  selectPLayList()
  loadList()
  guardarLista()
  SeleccionarLista()
  metadatos()