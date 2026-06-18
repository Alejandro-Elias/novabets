import { getStorage } from "../localStorage.js";
import {
  guardarPlaylist,
  isListBtn,
  listaPlaylist,
  listaReproduccion,
  listaVacia,
} from "../renderer.js";
import { playList } from "./buttons/play/loadList.js";
import { guardarLista } from "./guardarPlaylist.js";

export const mostrarlistas = () => {
  listaPlaylist.innerHTML = "";
  const listasGuardadas = getStorage("playlists") || [];
  for (let i = 0; i < listasGuardadas.length; i++) {
    listaPlaylist.innerHTML += `<li class="track" data-id="${listasGuardadas[i].id}"><button class="item-playlist" data-action="seleccionar" data-index="${i}" data-id="${listasGuardadas[i].id}" > ${listasGuardadas[i].name}</button><button id="eliminar" data-action="eliminar" class="eliminar" data-id="${listasGuardadas[i].id}"><i class="fa-solid fa-square-xmark eliminarBtn"></i></button></li>`;
  }
};

export const mostrarLista = () => {
  let toggle = true;
  const lista = getStorage("playList") || [];
  listaReproduccion.innerHTML = "";

  const listaHTML = (list, i) => {
    return (listaReproduccion.innerHTML += `<li class="track" data-id="${list[i].id}"><button class="item-playlist" data-action="seleccionar" data-index="${i}" data-id="${list[i].id}" > ${list[i].track.archivo}</button><button id="eliminar" data-action="eliminar" class="eliminar" data-id="${list[i].id}"><i class="fa-solid fa-square-xmark eliminarBtn"></i></button></li>`);
  };
  if (playList.length > 0) {
    listaVacia.classList.add("hidden");
    listaVacia.classList.remove("listaVacia");
    for (let i = 0; i < playList.length; i++) {
      listaHTML(playList, i);
    }
  } else if (lista.length > 0) {
    listaVacia.classList.add("hidden");
    listaVacia.classList.remove("listaVacia");
    for (let i = 0; i < lista.length; i++) {
      listaHTML(lista, i);
    }
    toggle = true;
  } else {
    listaVacia.classList.remove("hidden");
    listaVacia.classList.add("listaVacia");
  }

  isListBtn.addEventListener("click", () => {
    if (toggle) {
      listaVacia.classList.add("hidden");
      listaVacia.classList.remove("listaVacia");
      listaPlaylist.classList.remove("hidden");
      guardarPlaylist.classList.remove("hidden");
      line.classList.remove("hidden");
      listaReproduccion.classList.add("hidden");
      toggle = false;
    } else if (!toggle) {
      listaPlaylist.classList.add("hidden");
      guardarPlaylist.classList.add("hidden");
      line.classList.add("hidden");
      listaReproduccion.classList.remove("hidden");
      listaVacia.classList.remove("hidden");
      listaVacia.classList.add("listaVacia");
      toggle = true;
    }
  });
};
