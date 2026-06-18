import { getStorage } from "../../../localStorage.js";
import { mostrarLista } from "../../mostrarLista.js";
import { updateActiveTrack } from "../../resaltarTrack.js";

const suffle = document.getElementById("suffle");

export let playList = [];
let playListNormal = [];
let playListSuffle = [];
let playListRandom = false

export const loadList = () => {
  playListNormal = getStorage("playList") || []
  playListSuffle = getStorage('playListSuffle') || []
  

  playListRandom ? playList = playListSuffle : playList = playListNormal;

  mostrarLista()
};

suffle.addEventListener('click', () => {
  if (suffle.classList[2] === 'suffleNoActive') {
    suffle.classList.remove('suffleNoActive') 
    suffle.classList.add('suffleActive')
    playList = playListSuffle 
    playListRandom = true
    mostrarLista()
    updateActiveTrack()
  } else {
    suffle.classList.remove('suffleActive') 
    suffle.classList.add('suffleNoActive')
    playList = playListNormal 
    playListRandom = false
    mostrarLista()
    updateActiveTrack()
    }
})