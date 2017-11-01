import controllerConditions from '../../controller-conditions.js';
import checkAnswer from '../../points/check-answer.js';
import LevelArtistView from './level-artist-view.js';
import openScreen from '../../open-screen.js';
import tick from '../../utils/getTimer.js';

/**
 * Получить шаблон экрана с угадыванием артиста
 * @param {object} currentState текущие настройки игры
 * @param {object} currentQuestion текущий вопрос
 * @return {DOM-object}
 */
const getScreenLevelArtist = (currentState, currentQuestion) => {
  const screenLevelArtist = new LevelArtistView(currentState, currentQuestion);
  const timer = setTimeout(() => {
    openScreen(getScreenLevelArtist(tick(currentState, currentQuestion)));
  }, 1000);

  /**
   * Отследить нажатие на инпут
   * @param {Event} evt объект события
   */
  screenLevelArtist.onSendAnswer = (evt) => {
    const currentAnswer = evt.target.closest(`.js-main-answer-r`).value;
    checkAnswer(currentState, currentQuestion, currentAnswer);
    controllerConditions(currentState);
  };

  return screenLevelArtist;
};

export default getScreenLevelArtist;
