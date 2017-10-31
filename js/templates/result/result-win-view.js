import AbstractView from '../abstract-view.js';
import getCopyright from '../copyright.js';

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

export default class ResultWin extends AbstractView {
  constructor(resultPhrase, currentPlayer, state) {
    super();
    this.resultPhrase = resultPhrase;
    this.currentPlayer = currentPlayer;
    this.state = state;
  }
  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    ${getTemplateStat(this.resultPhrase, this.currentPlayer, this.state)};
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>${getCopyright()}`.trim();
  }

  bind() {
    const btnMainReplay = this.element.querySelector(`.main-replay`);
    btnMainReplay.addEventListener(`click`, this.onReload);
  }

  onReload() {}
}

