/**
 * Добавить 0 в конец числа
 * @param {number} number число
 * @return {string}
 */
const addZero = (number) => {
  if (number > 9) {
    return number.toString();
  } else {
    return `0` + number;
  }
};

/**
 * Конвертировать общее количество секунд в минуты и секунды
 * @param {number} seconds текущие настройки игры
 * @return {object}
 */
const convertSecInMinutes = (seconds) => {
  const convertedMinutes = Math.floor(seconds / 60);
  const convertedSeconds = Math.floor(seconds % 60);
  return {
    min: convertedMinutes,
    sec: addZero(convertedSeconds),
  };
};

export default convertSecInMinutes;
