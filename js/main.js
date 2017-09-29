const app = document.querySelector(`div`);
const templates = document.getElementById(`templates`);
const screens = templates.content.children;
const firstScreen = 0;
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
  if ((evt.keyCode === keysCode.ARROW_LEFT) && (evt.altKey)) {
    if (currentScreen === firstScreen) {
      currentScreen = lastScreen;
      openScreen(lastScreen);
    } else {
      openScreen(--currentScreen);
    }
  } else if ((evt.keyCode === keysCode.ARROW_RIGHT) && (evt.altKey)) {
    if (currentScreen < lastScreen) {
      openScreen(++currentScreen);
    } else {
      currentScreen = firstScreen;
      openScreen(currentScreen);
    }
  }
};

document.addEventListener(`keydown`, function (evt) {
  changeScreen(evt);
});

openScreen(currentScreen);
