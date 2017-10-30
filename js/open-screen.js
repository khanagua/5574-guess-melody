const app = document.querySelector(`.app`);

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
