const app = document.getElementsByClassName(`main`)[0];

/**
 * Вывести на экран полученный шаблон экрана
 * @param {class} view шаблон экрана
 */
const openScreen = (view) => {
  app.innerHTML = ``;
  // app.appendChild(view.element);
  app.appendChild(view._element.content);
};

export default openScreen;
