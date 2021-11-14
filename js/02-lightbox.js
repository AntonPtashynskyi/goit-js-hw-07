import { galleryItems } from './gallery-items.js';

const markupGallery = makeGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt title="${description}" />
      </a>
      `;
    })
    .join('');
}
