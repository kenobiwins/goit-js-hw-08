export const storage = {
  readItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(`Local Storage is empty`);
    }
  },
  updateItem(key, value) {
    try {
      return storage.readItem === null
        ? undefined
        : localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`${error}`);
    }
  },
  deleteItem(key) {
    return localStorage.removeItem(key);
  },
};
