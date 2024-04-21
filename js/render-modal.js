import { getPhotoDescriptions } from "./create-photo-descriptions.js";
import { renderPhoto } from "./render-photo.js";

const photoDescriptionsArray = getPhotoDescriptions();
renderPhoto(photoDescriptionsArray);

const renderModal = () => {
  const modal = document.querySelector('.big-picture');

  function openModal () {
    modal.classList.remove('hidden');
    modal.querySelector('.social__comment-count').classList.add('hidden');
    modal.querySelector('.social__comments-loader').classList.add('hidden');
    document.body.classList.add('modal-open');
  }

  function closeModal () {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  function renderModalContent (currentPhotoObject) {
    modal.querySelector('.big-picture__img').querySelector('img').src = currentPhotoObject.photoURL;
    modal.querySelector('.likes-count').textContent = currentPhotoObject.likes;
    modal.querySelector('.social__caption').textContent = currentPhotoObject.description;
  }

  function renderComments (currentPhotoObject) {
    const fragment = document.createDocumentFragment();

    currentPhotoObject.comments.forEach((comment) => {
      const newComment = document.createElement('li');

      newComment.classList.add('social__comment');
      newComment.insertAdjacentHTML('afterbegin', `<p class="social__text">${comment.message}</p>`);
      newComment.insertAdjacentHTML('afterbegin', `<img
      class="social__picture
      src=${comment.avatar}
      alt=${comment.name}
      width="35" height="35">`);

      fragment.append(newComment);
    });

    const modalComments = modal.querySelector('.social__comments');
    modalComments.innerHTML = '';
    modalComments.append(fragment);
  }


  document.querySelector('.pictures').addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.closest('.picture')) {
      openModal();

      const currentPhotoObject = photoDescriptionsArray.find((element) => {
        if (+evt.target.closest('.picture').querySelector('img').id === element.photoID) {
          return true;
        }
      });

      renderModalContent(currentPhotoObject);
      renderComments(currentPhotoObject);
    }
  });

  modal.querySelector('#picture-cancel').addEventListener('click', (evt) => {
    if (evt.target.closest('#picture-cancel')) {
      closeModal();
    }
  });

  modal.addEventListener('click', (evt) => {
    if (!evt.target.closest('.big-picture__preview')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  });
};

export { renderModal };
