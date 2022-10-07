
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    [min, max] = [max, min];
  }
  if (min < 0 || max < 0) {
    throw Error('Ошибка поиска');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

getRandomNumber();
checkStringLength();
