import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


const galleryRef = document.querySelector(".gallery");
insertElement(createElement(galleryItems))

function createElement(arr) {
    return arr.reduce((acc, { original, preview, description }) => acc += `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" loading="lazy"/>
    </a>`, '');
}

function insertElement(string) {
    return galleryRef.insertAdjacentHTML("beforeend",string);
}


var lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "outside",
    heightRatio: 0.8,
    closeText:"",
    captionDelay: 250,
    showCounter: false,
    animationSpeed: 450,
    fadeSpeed: 350,
    // scaleImageToRatio: true,
});