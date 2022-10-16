import throttle from 'lodash.throttle';
import { storage } from './storageMethods';

const refForm = document.querySelector('.feedback-form');

const { email, message } = refForm;
const KEY_FOR_FORM = 'feedback-form-state';
const formStorage = {};

refForm.addEventListener('input', throttle(eventOnTextArea, 500));
refForm.addEventListener('submit', sumbitForm);
addEventListener('DOMContentLoaded', readLocalStorage);

function readLocalStorage(e) {
  const savedProperty = storage.readItem(KEY_FOR_FORM);
  if (savedProperty) {
    email.value = savedProperty.email;
    message.value = savedProperty.message;
  }
}

function eventOnTextArea(e) {
  const { name, value } = e.target;
  formStorage[name] = value;
  storage.updateItem(KEY_FOR_FORM, formStorage);
}

function sumbitForm(e) {
  e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log({ name: name, value: value });
  //   });
  console.log(formStorage);
  e.currentTarget.reset();
  storage.deleteItem(KEY_FOR_FORM);
}
