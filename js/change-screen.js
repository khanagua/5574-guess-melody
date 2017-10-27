const app = document.getElementsByClassName(`main`)[0];

/**
 * Вывести на экран полученный шаблон экрана
 * @param {DOM-object} screen шаблон экрана
 */
const openScreen = (screen) => {
  app.innerHTML = ``;
  app.appendChild(screen.content);
};

export default openScreen;
