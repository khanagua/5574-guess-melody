/**
 * Запускаем тикать таймер
 * @param {number} seconds количество секунд
 * @return {object}
 */
const getTimer = (seconds) => {
  return {
    value: seconds,
    tick() {
      return (this.value === 0) ? false : getTimer(this.value - 1);
    }
  };
};

export default getTimer;
