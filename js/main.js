const getRandomInt = (a, b) => { // Получение рандомного числа
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

const getIntNoRepeat = () => { // Получение рандомного неповторяющегося числа, используя замыкание
  let array = [];

  return function (a, b) {
    let randomNumber = getRandomInt(a, b);

    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
      return randomNumber;
    } else {
      while (array.includes(randomNumber)) {
        randomNumber = getRandomInt(a, b);
      }
      array.push(randomNumber);
      return randomNumber;
    }
  }
}

const getRandomMessage = () => { // Получение рандомного сообщения из объекта
  let randomNumber = getRandomInt(1, 6);
  let messages = {
    1: 'Всё отлично!',
    2: 'В целом всё неплохо. Но не всё.',
    3: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    4: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    5: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    6: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  }

  return messages[randomNumber];
}

const getRandomName = () => { // Получение рандомного имени из объекта
  let randomNumber = getRandomInt(1, 10);
  let names = {
    1: 'Владимир',
    2: 'Игорь',
    3: 'Егор',
    4: 'Евгений',
    5: 'Андрей',
    6: 'Александра',
    7: 'Екатерина',
    8: 'Татьяна',
    9: 'Валерия',
    10: 'Зинаида',
  }

  return names[randomNumber];
}

const getPhotosComment = () => { // Получение рандомного коммента
  let userID = getIntNoRepeat();
  let photosComment = {
    id: userID(1, 1000),
    avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
    message: getRandomMessage(),
    name: getRandomName(),
  }

  return photosComment;
}

const getCommentsArray = () => { // Получение массива с рандомным количеством рандомных комментов
  let commentsArray = [];
  let commentsCount = getRandomInt(1, 5);

  while (commentsArray.length < commentsCount) {
    commentsArray.push(getPhotosComment());
  }

  return commentsArray;
}

const getDescriptionsPhotoArray = () => { // Окончательный результат - массив из 25 объектов с описаниями фото
  let descriptionPhotosArray = [];
  let photosID = getIntNoRepeat();
  let photosURL = getIntNoRepeat();

  while (descriptionPhotosArray.length < 25) {
    descriptionPhotosArray.push(
      {
        id: photosID(1, 25),
        url: 'photos/' + photosURL(1, 25) + '.jpg',
        description: 'something',
        likes: getRandomInt(15, 200),
        comment: getCommentsArray(),
      }
    );
  }

  return descriptionPhotosArray;
}
