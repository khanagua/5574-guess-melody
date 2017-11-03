import {PlaySettings, initialState, currentPlayer} from '../data/game-settings.js';


/**
 * Проверить корректность ответов и записать их
 * @param {object} currentQuestion текущий вопрос
 * @param {string} currentAnswer правильный ответ
 */
const checkAnswer = (currentQuestion, currentAnswer) => {

  const timeAnswer = PlaySettings.GAME_TIME - initialState.getTime();

  /**
   * Записать результат ответа
   * @param {boolean} isAnswer корректность ответа
   */
  const addAnswer = (isAnswer) => {
    currentPlayer.answers.push({
      correctly: isAnswer,
      time: timeAnswer,
    });
  };

  /**
   * Найти выбранный ответ среди верных
   * @param {array} arr массив ответов
   * @param {string} elem искомый элемент
   * @return {boolean}
   */
  const findElemInArr = (arr, elem) => {
    const elementIndex = arr.indexOf(elem);
    return elementIndex > -1;
  };

  /**
   * Увеличить количество ошибок в случае неверного ответа
   * @param {boolean} isAnswer корректность ответа
   */
  const checkCorrectly = (isAnswer) => {
    if (!isAnswer) {
      initialState.increaseMistakes();
    }
  };

  if (currentQuestion.type === `artist`) {
    let isAnswer = currentAnswer === currentQuestion.correctAnswer;
    addAnswer(isAnswer);
    checkCorrectly(isAnswer);
  }
  if (currentQuestion.type === `genre`) {
    let isAnswer = currentAnswer.every((answerItem) => findElemInArr(currentQuestion.correctAnswer, answerItem));
    addAnswer(isAnswer);
    checkCorrectly(isAnswer);
  }
};

export default checkAnswer;
