import createElement from '../create-element.js';
import controllerConditions from '../controller-conditions.js';
import getCopyright from './copyright.js';

const strWelcome = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>${getCopyright()}`;

/**
 * Получить приветственный экран
 * @param {object} state начальные настройки игры
 * @return {DOM-object}
 */
const getScreenWelcome = (state) => {
  const screenWelcome = createElement(strWelcome);
  const btnMainPlay = screenWelcome.content.querySelector(`.main-play`);
  /**
   * Показать следующий экран по нажатию на кнопку
   * @param {Event} evt объект события
   */
  btnMainPlay.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    controllerConditions(state);
  });
  return screenWelcome;
};

export default getScreenWelcome;
