import controllerConditions from '../../controller-conditions.js';
import ResaltFail from './resalt-fail-view.js';

/**
 * Получить приветственный экран
 * @param {object} state начальные настройки игры
 * @return {DOM-object}
 */
const getScreenResaltFail = (state) => {
  const screenResaltFail = new ResaltFail(state);

  /**
   * Показать следующий экран по нажатию на кнопку
   */
  screenResaltFail.onReload = () => {
    controllerConditions(state);
    document.location.reload(true);
  };

  return screenResaltFail;
};

export default getScreenResaltFail;

