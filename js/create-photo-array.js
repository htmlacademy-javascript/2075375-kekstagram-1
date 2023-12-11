import { getRandomInt, getIntUniq } from "./utils.js";
import { DESCRIPTION_PHOTO, COMMENT_MESSAGE, COMMENT_NAMES } from "./data.js";

const DESCRIPTIONS_COUNT = 25;
const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const URL_MIN = 1;
const URL_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const USER_ID_MIN = 1;
const USER_ID_MAX = 1000;
const AVATAR_NUMBER_MIN = 1;
const AVATAR_NUMBER_MAX = 6;

const getRandomMessage = () => Array.from({length: getRandomInt(1, 2)}, () => COMMENT_MESSAGE[getRandomInt(0, COMMENT_MESSAGE.length - 1)]).join(' ');


const getRandomName = () => COMMENT_NAMES[getRandomInt(0, COMMENT_NAMES.length - 1)];

const userID = getIntUniq(USER_ID_MIN, USER_ID_MAX);
const getPhotosComment = () => {
  const photosComment = {
    id: userID(),
    avatar: 'img/avatar-' + getRandomInt(AVATAR_NUMBER_MIN, AVATAR_NUMBER_MAX) + '.svg',
    message: getRandomMessage(),
    name: getRandomName(),
  };

  return photosComment;
};

const getCommentsArray = () => Array.from({length: getRandomInt(1, 5)}, () => (getPhotosComment()));

const getDescriptionsPhotoArray = () => {
  const photosID = getIntUniq(PHOTO_ID_MIN, PHOTO_ID_MAX);
  const photosURL = getIntUniq(URL_MIN, URL_MAX);

  return Array.from({length: DESCRIPTIONS_COUNT}, () => (
    {
      id: photosID(),
      url: 'photos/' + photosURL() + '.jpg',
      description: DESCRIPTION_PHOTO,
      likes: getRandomInt(LIKES_MIN, LIKES_MAX),
      comment: getCommentsArray(),
    }
  ));
};

export { getDescriptionsPhotoArray };
