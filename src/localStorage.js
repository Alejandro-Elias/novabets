export const setStorage = (item, datos) => {
  console.log(datos);
  
  localStorage.setItem(item, JSON.stringify(datos));
};

export const removeItemStorage = (item) => {
  localStorage.removeItem(item);
};

export const getStorage = (item) => {
  const dato = JSON.parse(localStorage.getItem(item));  
  return dato;
};
