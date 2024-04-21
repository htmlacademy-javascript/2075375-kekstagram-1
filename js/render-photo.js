const renderPhoto = (array) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const fragment = document.createDocumentFragment();
  const pictures = document.querySelector('.pictures');

  array.forEach((element) => {
    const pictureTemplateCopy = pictureTemplate.cloneNode(true);
    pictureTemplateCopy.querySelector('.picture__img').src = element.photoURL;
    pictureTemplateCopy.querySelector('.picture__img').id = element.photoID;
    pictureTemplateCopy.querySelector('.picture__likes').textContent = element.likes;
    pictureTemplateCopy.querySelector('.picture__comments').textContent = element.comments.length;
    fragment.append(pictureTemplateCopy);
  });

  return pictures.append(fragment);
};

export { renderPhoto };


