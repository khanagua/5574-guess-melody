import AbstractView from '../abstract-view.js';
import getCopyright from '../copyright.js';

export default class ResultFail extends AbstractView {
  constructor(tagOfLoss) {
    super();
    this.tagOfLoss = tagOfLoss;
  }

  get template() {
    const stringResultTimeOut = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>${getCopyright()}`.trim();
    const stringResultAttemptOut = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>${getCopyright()}`.trim();

    if (this.tagOfLoss === `TimeOut`) {
      return stringResultTimeOut;
    }
    return stringResultAttemptOut;
  }

  bind() {
    const btnMainReplay = this._element.querySelector(`.main-replay`);
    btnMainReplay.addEventListener(`click`, this.onReload);
  }

  onReload() {}
}
