import { getPhotoDescriptions } from "./create-photo-descriptions.js";

const renderPhoto = () => {
  const pictureTemplate = document.querySelector('#picture').content;
  const fragment = document.createDocumentFragment();
  const photoDescriptionsArray = getPhotoDescriptions();
  const pictures = document.querySelector('.pictures');

  photoDescriptionsArray.forEach((element) => {
    const pictureTemplateCopy = pictureTemplate.cloneNode(true);
    pictureTemplateCopy.querySelector('.picture__img').src = element.photoURL;
    pictureTemplateCopy.querySelector('.picture__likes').textContent = element.likes;
    pictureTemplateCopy.querySelector('.picture__comments').textContent = element.comments;
    fragment.append(pictureTemplateCopy);
  });

  return pictures.append(fragment);
};

export { renderPhoto };


