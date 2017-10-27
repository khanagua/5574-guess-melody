/**
 * Подсчитываем количество очков по итогам игры
 * @param {array} playerAnswers массив с корректностью ответа и затраченным временем текущего игрока
 * @param {number} remainingNotes количество оставшихся жизней
 * @return {number}
 */
const getPoints = (playerAnswers, remainingNotes) => {
  if (playerAnswers.length < 10 || remainingNotes < 0) {
    return -1;
  }
  return playerAnswers.reduce((resultPoints, answer) => {
    if (!answer.correctly) {
      return resultPoints - 2; // отсеем неверные ответы
    }
    if (answer.time <= 30) { // выделим быстрые ответы среди верных
      return resultPoints + 2;
    }
    return resultPoints + 1;
  }, 0);
};

export default getPoints;
