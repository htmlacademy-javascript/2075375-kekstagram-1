const getRandomInt = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getIntUniq = (min, max) => {
  let array = [];

  return function () {
    let randomNumber = getRandomInt(min, max);

    if (array.length >= max) {
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
  }
}

export { getRandomInt, getIntUniq };
