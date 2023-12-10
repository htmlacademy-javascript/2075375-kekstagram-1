const DESCRIPTIONS_COUNT = 25;
const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const URL_MIN = 1;
const URL_MAX = 25;
const DESCRIPTION_PHOTO = 'Description';
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const USER_ID_MIN = 1;
const USER_ID_MAX = 1000;
const AVATAR_NUMBER_MIN = 1;
const AVATAR_NUMBER_MAX = 6;
const COMMENT_MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENT_NAMES = ['Владимир', 'Игорь', 'Егор', 'Евгений', 'Андрей', 'Александра', 'Екатерина', 'Татьяна', 'Валерия', 'Зинаида'];

const getRandomInt = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getIntUniq = (min, max) => {
  const array = [];

  return function () {
    let randomNumber = getRandomInt(min, max);

    if (array.length >= (max - min + 1)) {
      console.error('Перебраны все значения функции getIntUniq');
      return;
    }

    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
      return randomNumber;
    } else {
      while (array.includes(randomNumber)) {
        randomNumber = getRandomInt(min, max);
      }
      array.push(randomNumber);
      return randomNumber;
    }
  };
};

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
