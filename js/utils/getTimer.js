const TIME_MESSAGE = `Истекло время игры`;

/**
 * Запускаем тикать таймер
 * @param {number} seconds количество секунд
 * @return {object}
 */
const getTimer = (seconds) => {
  return {
    value: seconds,
    tick() {
      return (seconds === 0) ? TIME_MESSAGE : getTimer(seconds - 1);
    }
  };
};

export {TIME_MESSAGE, getTimer};
