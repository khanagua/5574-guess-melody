import createElement from '../create-element.js';
import getCopyright from './copyright.js';

const strResultTimeOut = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>${getCopyright()}`;

const screenResultTimeOut = createElement(strResultTimeOut);
const btnMainReplay = screenResultTimeOut.querySelector(`.main-replay`);

/**
* Отследить нажатие на ссылку возврата к началу игры
* @param {Event} evt объект события
*/
btnMainReplay.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  document.location.reload(true);
});

export default screenResultTimeOut;
