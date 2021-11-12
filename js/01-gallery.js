import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const markupGallery = makeGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markupGallery);
galleryContainer.addEventListener('click', onGallerySelectedImg);

function onGallerySelectedImg(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const onEscape = (evt) => {
    if (evt.key === 'Escape') {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"/> `,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscape);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscape);
      },
    }
  );

  instance.show();
}

function isImage(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
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
