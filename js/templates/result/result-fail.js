import controllerConditions from '../../controller-conditions.js';
import ResultFail from './result-fail-view.js';

/**
* Получить приветственный экран
* @param {string} tagOfLoss тег, обозначающий, почему пользователь проиграл
* @param {object} state текущие настройки игры
* @return {DOM-object}
*/
const getScreenResultFail = (tagOfLoss, state) => {
  const screenResultFail = new ResultFail(tagOfLoss);

  /**
   * Показать следующий экран по нажатию на кнопку
   */
  screenResultFail.onReload = () => {
    controllerConditions(state);
    document.location.reload(true);
  };

  return screenResultFail;
};

export default getScreenResultFail;

