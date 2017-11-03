import controllerConditions from '../../controller-conditions.js';
import checkAnswer from '../../points/check-answer.js';
import LevelArtistView from './level-artist-view.js';
import {initialState} from '../../data/game-settings.js';

/**
 * Получить шаблон экрана с угадыванием артиста
 * @param {object} currentState текущие настройки игры
 * @param {object} currentQuestion текущий вопрос
 * @return {DOM-object}
 */
const getScreenLevelArtist = (currentQuestion) => {
  const screenLevelArtist = new LevelArtistView(initialState.getProperty(), currentQuestion);

  /**
   * Отследить нажатие на инпут
   * @param {Event} evt объект события
   */
  screenLevelArtist.onSendAnswer = (evt) => {
    const currentAnswer = evt.target.closest(`.js-main-answer-r`).value;
    // checkAnswer(initialState.getProperty(), currentQuestion, currentAnswer);
    checkAnswer(currentQuestion, currentAnswer);
    controllerConditions();
  };

  return screenLevelArtist;
};

export default getScreenLevelArtist;
