import {PlaySettings, PointsForAnswer} from '../data/game-settings.js';

/**
 * Подсчитываем количество очков по итогам игры
 * @param {array} playerAnswers массив с корректностью ответа и затраченным временем текущего игрока
 * @param {number} remainingNotes количество оставшихся жизней
 * @return {number}
 */
const getPoints = (playerAnswers, remainingNotes) => {
  if (playerAnswers.length < PlaySettings.COUNT_ANSWERS || remainingNotes < PlaySettings.MIN_COUNT_NOTES) {
    return -1;
  }
  return playerAnswers.reduce((resultPoints, answer) => {
    if (!answer.correctly) {
      return resultPoints - PointsForAnswer.FOR_INCORRECT; // отсеем неверные ответы
    }
    if (answer.time <= PlaySettings.ANSWER_TIME) { // выделим быстрые ответы среди верных
      return resultPoints + PointsForAnswer.FOR_QUICK;
    }
    return resultPoints + PointsForAnswer.FOR_CORRECT;
  }, 0);
};

export default getPoints;
