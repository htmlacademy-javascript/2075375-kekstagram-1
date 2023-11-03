// /* ЗАДАНИЕ № 1 */ Проверка строки на палиндром

// 1 способ
/* function palindromeCheck (word) {
  if (word.toLowerCase().replaceAll(' ', '') === word.toLowerCase().replaceAll(' ', '').split('').reverse().join('')) {
    return 'Это палиндром';
  }

  return 'Это не палиндром';
} */

// 2 способ
/* function palindromeCheck (word) {
  let enteredWord = word.toLowerCase().replaceAll(' ', '');
  let wordMid = enteredWord.length / 2;

  for (let i = 0; i < wordMid; i++) {
    if (enteredWord[i] !== enteredWord[enteredWord.length - 1 - i]) {
      return 'Это не палиндром';
    }
  }

  return 'Это палиндром';
} */


// /* ЗАДАНИЕ № 2 */ Извлечение числа из строки

// 1 способ
/* function numberFromString (string) {
  let enteredString = string.replaceAll(' ', '');
  let numbers = [];

  for (i = 0; i <= enteredString.length; i++) {
    if ((typeof Number(enteredString[i]) === 'number') && (isNaN(enteredString[i]) === false)) {
      numbers.push(Number(enteredString[i]));
    }
  }

  return parseInt((numbers.join('')), 10);
} */

// 2 способ
/* function numberFromString (string) {
  let enteredString = string.replaceAll(' ', '');
  let numbers = '';

  for (i = 0; i <= enteredString.length; i++) {
    if ((typeof Number(enteredString[i]) === 'number') && (isNaN(enteredString[i]) === false)) {
      numbers += String(enteredString[i]);
    }
  }

  return parseInt(numbers, 10);
} */


// /* ЗАДАНИЕ № 3 */ Добавление символов в строку

/* function stringTransform (startString, minLength, addElement) {
  let result = '';
  let addString = '';
  let sumSymbols = (addElement + startString).length;

  if (startString.length < minLength) { // Дополняет строку указанными символами до заданной длины (работает корректно, если закомментировать остальные программы)
    let startStringLength = startString.length;
    let addElementLength = addElement.length;

    while (startStringLength < minLength) {
      addString += addElement;
      startStringLength += addElementLength;
      result = addString + startString;
    }
  }

  if (startString.length >= minLength) { // Если исходная строка превышает заданную длину, она не обрезается
    result += startString;
  }

  if (sumSymbols > minLength) { // Обрезание "добивки", если длина слова вместе с ней больше необходимой длины.
    addString = addElement;

    while (sumSymbols > minLength) {
      addString = addString.slice(0, -1);
      sumSymbols -= 1;
      result = addString + startString;
    }
  } else if (sumSymbols < minLength) { // Добавляет "добивку" в необходимом объеме, согласно тз.
    let resultLength;

    result = startString;
    resultLength = result.length;

    while (resultLength < minLength) {
      addString = addElement;
      resultLength += addElement.length;
      result = addString + result;
    }

    let differenceRatio = resultLength - minLength; // коэффициент "обрубания" последней добавляемой части строки
    let addStringFinal = addString.slice(0, -(differenceRatio)); // "обрубленная часть строки, добавляемая в конце программы"

    result = addStringFinal + result.slice(differenceRatio + 1);
  }

  return result;
} */


/* ЗАДАНИЕ № 4 - ФУНКЦИЯ ПРОВЕРКИ ДЛИНЫ СТРОКИ */
/* function strLengthCheck (str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }

  return false;
} */

