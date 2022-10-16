export const storage = {
  readItem(key, value) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error.name);
    }
  },
  updateItem(key, value) {
    try {
      return storage.readItem === null
        ? undefined
        : localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error.massage);
    }
  },
  deleteItem(key) {
    return localStorage.removeItem(key);
  },
};
