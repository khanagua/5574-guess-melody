const app = document.querySelector(`div`);
const templates = document.getElementById(`templates`);
const screens = templates.content.children;
const FIRST_SCREEN = 0;
const lastScreen = screens.length - 1;
let currentScreen = 0;

const keysCode = {
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39
};

  /**
  * Вывести на экран один из шаблонов экрана
  * @param {number} numberScreen номер шаблона в массиве
  */
const openScreen = (numberScreen) => {
  app.replaceChild(screens[numberScreen].cloneNode(true), app.querySelector(`section`));
};

  /**
  * Отследить нажатие клавиши Alt и стрелок управления
  * @param {Event} evt объект события
  */
const changeScreen = (evt) => {
  const altAndLeft = (evt.keyCode === keysCode.ARROW_LEFT) && evt.altKey;
  const altAndRight = (evt.keyCode === keysCode.ARROW_RIGHT) && evt.altKey;
  if (altAndLeft) {
    currentScreen = (currentScreen === FIRST_SCREEN) ? lastScreen : --currentScreen;
    openScreen(currentScreen);
  } else if (altAndRight) {
    currentScreen = (currentScreen < lastScreen) ? ++currentScreen : FIRST_SCREEN;
    openScreen(currentScreen);
  }
};

document.addEventListener(`keydown`, (evt) => changeScreen(evt));

openScreen(currentScreen);
