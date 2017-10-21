import createElement from '../createElement.js';
import openScreen from '../changeScreen.js';
import screenLevelArtist from './mainLevelArtist.js';

const strWelcome = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;

const screenWelcome = createElement(strWelcome);
const btnMainPlay = screenWelcome.content.querySelector(`.main-play`);

/**
* Показать следующий экран по нажатию на кнопку
* @param {Event} evt объект события
*/
btnMainPlay.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  openScreen(screenLevelArtist);
});

export default screenWelcome;
