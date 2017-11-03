import controllerConditions from '../../controller-conditions.js';
import WelcomeView from './welcome-view.js';

/**
 * Получить приветственный экран
 * @return {DOM-object}
 */
const getScreenWelcome = () => {
  const screenWelcome = new WelcomeView();

  /**
   * Показать следующий экран по нажатию на кнопку
   */
  screenWelcome.onStart = () => {
    controllerConditions();
  };
  return screenWelcome;
};

export default getScreenWelcome;
