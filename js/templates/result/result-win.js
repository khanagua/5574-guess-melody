import ResultWin from './result-win-view.js';
import {initialState} from '../../data/game-settings.js';

/**
 * Получить шаблон экрана результата
 * @param {string} resultPhrase текущие настройки игры
 * @param {object} currentPlayer текущий вопрос
 * @param {object} state текущие настройки игры
 * @return {DOM-object}
 */
const getScreenResult = (resultPhrase, currentPlayer) => {
  const screenResultWin = new ResultWin(resultPhrase, currentPlayer, initialState.getProperty());

  /**
   * Отследить нажатие на ссылку возврата к началу игры
   * @param {Event} evt объект события
   */
  screenResultWin.onReload = () => {
    document.location.reload(true);
  };
  return screenResultWin;
};

export default getScreenResult;
