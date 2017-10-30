import createElement from '../create-element.js';
import getCopyright from './copyright.js';

/**
 * Получить строку фразу-шаблон со статистикой
 * @param {string} resultPhrase текущие настройки игры
 * @param {object} currentPlayer текущий вопрос
 * @param {object} state текущие настройки игры
 * @return {string}
 */
const getTemplateStat = (resultPhrase, currentPlayer, state) => {
  return `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${currentPlayer.score} баллов (8 быстрых)
      <br>совершив ${state.mistakes} ошибки</div>
    <span class="main-comparison">${resultPhrase}</span>`;
};

/**
 * Получить строку экрана результата
 * @param {string} resultPhrase текущие настройки игры
 * @param {object} currentPlayer текущий вопрос
 * @param {object} state текущие настройки игры
 * @return {string}
 */
const srtResult = (resultPhrase, currentPlayer, state) => {
  return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    ${getTemplateStat(resultPhrase, currentPlayer, state)};
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>${getCopyright()}`;
};

/**
 * Получить шаблон экрана результата
 * @param {string} resultPhrase текущие настройки игры
 * @param {object} currentPlayer текущий вопрос
 * @param {object} state текущие настройки игры
 * @return {DOM-object}
 */
const getScreenResult = (resultPhrase, currentPlayer, state) => {
  const screenResult = createElement(srtResult(resultPhrase, currentPlayer, state));
  const btnMainReplay = screenResult.content.querySelector(`.main-replay`);

  /**
   * Отследить нажатие на ссылку возврата к началу игры
   * @param {Event} evt объект события
   */
  btnMainReplay.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    document.location.reload(true);
  });

  return screenResult;
};

export default getScreenResult;
