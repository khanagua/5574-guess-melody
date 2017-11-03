import controllerConditions from '../../controller-conditions.js';
import WelcomeView from './welcome-view.js';
import displayTime from '../../utils/display-time.js';

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
    displayTime();
  };
  return screenWelcome;
};

export default getScreenWelcome;
