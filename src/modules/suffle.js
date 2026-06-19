import { getStorage, setStorage } from "./localStorage.js";

export const suffle = () => {

  const playListNormal = getStorage('playList')

  let randomIndexes = [];
  let randomIndex = 0;

  while (randomIndexes.length < playListNormal.length) {
    randomIndex = Math.floor(Math.random() * playListNormal.length);

    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  const playListSuffle = randomIndexes.map((index) => playListNormal[index]);
  setStorage('playListSuffle', playListSuffle)
};
