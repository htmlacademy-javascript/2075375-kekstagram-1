const renderModal = (photoDescriptionsArray) => {
  const modal = document.querySelector('.big-picture');
  const fragment = document.createDocumentFragment();
  const modalComments = modal.querySelector('.social__comments');
  const loadCommentsButton = modal.querySelector('.comments-loader');
  const commentsCount = modal.querySelector('.social__comment-count');

  function openModal () {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  function renderModalContent (currentPhotoObject) {
    modal.querySelector('.big-picture__img').querySelector('img').src = currentPhotoObject.photoURL;
    modal.querySelector('.likes-count').textContent = currentPhotoObject.likes;
    modal.querySelector('.social__caption').textContent = currentPhotoObject.description;
  }

  function renderMoreComments () {
    if (fragment.children.length <= 5) {
      modalComments.append(fragment);
      loadCommentsButton.classList.add('hidden');
    } else {
      Object.values(fragment.children).slice(0, 5).forEach((comment) => {
        modalComments.append(comment);
      });
    }
  }

  function clearFragment () {
    modalComments.append(fragment);
    modalComments.innerHTML = '';
  }

  function closeModal () {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    loadCommentsButton.classList.remove('hidden');
    loadCommentsButton.removeEventListener('click', renderMoreComments);
    clearFragment();
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

      currentPhotoObject.comments.forEach((comment) => {
        const newComment = document.createElement('li');
        newComment.classList.add('social__comment');
        newComment.insertAdjacentHTML('afterbegin', `<p class="social__text">${comment.message}</p>`);
        newComment.insertAdjacentHTML('afterbegin', `<img
        class="social__picture"
        src=${comment.avatar}
        alt=${comment.name}
        width="35" height="35">`);

        fragment.append(newComment);
      });

      modalComments.innerHTML = '';

      const renderCommentsCounter = () => {
        commentsCount.innerHTML = '';
        commentsCount.insertAdjacentHTML('afterbegin', `${modalComments.children.length} из ${currentPhotoObject.comments.length} комментариев`);

        if (fragment.children.length === 0) {
          loadCommentsButton.removeEventListener('click', renderCommentsCounter);
        }
      };

      if (fragment.children.length <= 5) {
        modalComments.append(fragment);
        loadCommentsButton.classList.add('hidden');
      } else {
        Object.values(fragment.children).slice(0, 5).forEach((comment) => modalComments.append(comment));
        renderCommentsCounter();
        loadCommentsButton.addEventListener('click', renderMoreComments);
        loadCommentsButton.addEventListener('click', renderCommentsCounter);
      }
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
