import { getPhotoDescriptions } from "./create-photo-descriptions.js";
import { renderPhoto } from "./render-photo.js";
import { renderModal } from "./render-modal.js";

const renderGallery = () => {
  const photoDescriptionsArray = getPhotoDescriptions();
  renderPhoto(photoDescriptionsArray);
  renderModal(photoDescriptionsArray);
};

export { renderGallery };

