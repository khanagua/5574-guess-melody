const app = document.querySelector(`.app`);

/**
 * Вывести на экран полученный шаблон экрана
 * @param {class} view шаблон экрана
 * @param {class} currentState текущие настройки игры
 */
const openScreen = (view) => {
  app.innerHTML = ``;
  app.appendChild(view.element);
};

export default openScreen;
