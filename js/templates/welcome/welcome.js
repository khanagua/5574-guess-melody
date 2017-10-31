import controllerConditions from '../../controller-conditions.js';
import WelcomeView from './welcome-view.js';

/**
 * Получить приветственный экран
 * @param {object} state начальные настройки игры
 * @return {DOM-object}
 */
const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomeView(state);

  /**
   * Показать следующий экран по нажатию на кнопку
   */
  screenWelcome.onStart = () => {
    controllerConditions(state);
  };
  return screenWelcome;
};

export default getScreenWelcome;

