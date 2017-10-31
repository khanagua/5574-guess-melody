import controllerConditions from '../../controller-conditions.js';
import checkAnswer from '../../points/check-answer.js';
import LevelGenreView from './level-genre-view.js';

/**
 * Получить шаблон экрана с угадыванием жанра
 * @param {object} currentState текущие настройки игры
 * @param {object} currentQuestion текущий вопрос
 * @return {DOM-object}
 */
const getScreenLevelGenre = (currentState, currentQuestion) => {
  const screenLevelGenre = new LevelGenreView(currentState, currentQuestion);
  screenLevelGenre.onSendAnswer = (evt, answersCheckedInputs) => {
    evt.preventDefault();
    const currentAnswer = answersCheckedInputs.map((checkedInput) => checkedInput.value);
    checkAnswer(currentState, currentQuestion, currentAnswer);
    controllerConditions(currentState);
  };
  return screenLevelGenre;
};

export default getScreenLevelGenre;
