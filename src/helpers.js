// local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteItem= ({key})=>{   // wrote within {} ti indicate we'll pass multiple things
  return localStorage.removeItem(key);
};