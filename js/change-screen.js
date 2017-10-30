const app = document.querySelector(`.app`);

/**
 * Вывести на экран полученный шаблон экрана
 * @param {DOM-object} screen шаблон экрана
 */
const openScreen = (screen) => {
  app.innerHTML = ``;
  app.appendChild(screen.content);
};

export default openScreen;
