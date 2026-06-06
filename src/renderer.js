import { cerrarBtn } from "./renderer/buttons/cerrar.js";
import { minimizarBtn } from "./renderer/buttons/minimizar.js";
import { play } from "./renderer/buttons/play.js";
import { stop } from "./renderer/buttons/stop.js";
import { tiempos } from "./renderer/tiempos.js";
import { cambiarVolumen } from "./renderer/volumen.js";
import { folder } from "./renderer/folder.js";
import { mostrarMetadata } from "./renderer/mostrarDatos.js";
import { cargarLista } from "./renderer/cargarLista.js";
import { nextTrack } from "./renderer/buttons/play/next.js";
import { previousTrack } from "./renderer/buttons/play/previous.js";
import { repeat } from "./renderer/repeat.js";
import { selectPLayList } from "./renderer/SelectItemPlaylist.js";
  
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
  export const selectFolder = document.getElementById("idFolderBtn");
  export const listaReproduccion = document.getElementById("listaReproduccion");
  export const nextBtn = document.getElementById("nextBtn");
  export const previousBtn = document.getElementById("previousBtn");
  export const repeatBtn = document.getElementById("repeatBtn") 
  export const repeatText = document.getElementById("repeatText") 

  export const list = [];

  cargarLista();
  mostrarMetadata();
  cerrarBtn();
  minimizarBtn();
  stop();
  cambiarVolumen();
  folder();
  play();
  nextTrack()
  previousTrack()
  repeat()
  selectPLayList()