const app = document.querySelector(`div`);

/**
 * Вывести на экран полученный шаблон экрана
 * @param {DOM-object} screen шаблон экрана
 */
const openScreen = (screen) => {
  app.replaceChild(screen.content, app.querySelector(`section`));
};

export default openScreen;
