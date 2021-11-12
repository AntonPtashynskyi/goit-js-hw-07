import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const markupGallery = makeGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markupGallery);
galleryContainer.addEventListener('click', onGallerySelectedImg);

const instance = basicLightbox.create(``);

function onGallerySelectedImg(evt) {
  evt.preventDefault();
  console.log(evt.target.dataset.source);

  const instance = basicLightbox
    .create(
      `<img src="${evt.target.dataset.source}" width="800" height="600" /> `,
      { closable: true }
    )
    .show();
}

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
  </div>
  `;
    })
    .join('');
}
