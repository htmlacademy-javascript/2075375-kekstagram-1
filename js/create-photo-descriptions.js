import { getRandomInt, getIntUniq } from "./utils.js";
import { PHOTO_DESCRIPTION, MESSAGES, NAMES } from "./data.js";


const DESCRIPTION_COUNT = 25;
const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const PHOTO_URL_MIN = 1;
const PHOTO_URL_MAX = 25;
const COMMENT_ID_MIN = 1;
const COMMENT_ID_MAX = 5;

const getComments = (minCount, maxCount) => {
  let commentID = getIntUniq(COMMENT_ID_MIN, COMMENT_ID_MAX);

  return Array.from({length: getRandomInt(minCount, maxCount)}, (comment) => {
    return comment = {
      commentID: commentID(),
      avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
      message: Array.from({length: getRandomInt(1, 2)}, () => MESSAGES[getRandomInt(0, MESSAGES.length - 1)]).join(' '),
      name: NAMES[getRandomInt(0, NAMES.length - 1)],
    };
  });
};

const getPhotoDescriptions = () => {
  let photoID = getIntUniq(PHOTO_ID_MIN, PHOTO_ID_MAX);
  let photoURL = getIntUniq(PHOTO_URL_MIN, PHOTO_URL_MAX);

  return Array.from({length: DESCRIPTION_COUNT}, (photoDescription) => {
    return photoDescription = {
      photoID: photoID(),
      photoURL: 'photos/' + photoURL() + '.jpg',
      description: PHOTO_DESCRIPTION[getRandomInt(0, PHOTO_DESCRIPTION.length - 1)],
      likes: getRandomInt(15, 200),
      comments: getComments(1, 5),
    };
  });
};

export { getPhotoDescriptions };
