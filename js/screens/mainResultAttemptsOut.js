import createElement from '../createElement.js';

const strResultAttemptsOut = `  <!-- Результат игры: проигрыш закончились попытки -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const screenResultAttemptsOut = createElement(strResultAttemptsOut);
const btnMainReplay = screenResultAttemptsOut.content.querySelector(`.main-replay`);

/**
* Отследить нажатие на ссылку возврата к началу игры
* @param {Event} evt объект события
*/
btnMainReplay.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  document.location.reload(true);
});

export default screenResultAttemptsOut;
