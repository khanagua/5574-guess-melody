import controllerConditions from '../../controller-conditions.js';
import checkAnswer from '../../points/check-answer.js';
import LevelGenreView from './level-genre-view.js';
import {initialState} from '../../data/game-settings.js';

/**
 * Получить шаблон экрана с угадыванием жанра
 * @param {object} currentQuestion текущий вопрос
 * @return {DOM-object}
 */
const getScreenLevelGenre = (currentQuestion) => {
  const screenLevelGenre = new LevelGenreView(initialState.getProperty(), currentQuestion);
  screenLevelGenre.onSendAnswer = (evt, answersCheckedInputs) => {
    evt.preventDefault();
    const currentAnswer = answersCheckedInputs.map((checkedInput) => checkedInput.value);
    checkAnswer(currentQuestion, currentAnswer);
    controllerConditions();
  };
  return screenLevelGenre;
};

export default getScreenLevelGenre;
