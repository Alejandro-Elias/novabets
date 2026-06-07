const getIndex = () => {
  const valor = JSON.parse(localStorage.getItem("indexCurrent"));
  console.log(valor);
  return valor  
};

export let indexCurrent = getIndex();

export const resetIndex = () => {
  indexCurrent = 0;
};

export const nextIndex = () => {
  indexCurrent++;

  localStorage.setItem(
    "indexCurrent",
    JSON.stringify(indexCurrent)
  );
};

export const previousIndex = () => {
  indexCurrent--;

  localStorage.setItem(
    "indexCurrent",
    JSON.stringify(indexCurrent)
  );
};

export const setindexCurrent = (nuevoIndex) => {
  indexCurrent = nuevoIndex;

  localStorage.setItem(
    "indexCurrent",
    JSON.stringify(indexCurrent)
  );
};