import AbstractView from '../abstract-view.js';
import getCopyright from '../copyright.js';

export default class ResaltFail extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>${getCopyright()}`.trim();
  }

  bind() {
    const btnMainReplay = this._element.querySelector(`.main-replay`);
    btnMainReplay.addEventListener(`click`, this.onReload);
  }

  onReload() {}
}
