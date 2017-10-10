/**
 * Из полученной строки создаем DOM-разметку
 * @param {string} string строка с HTML кодом
 * @return {DOM-object}
 */
const createElement = (string) => {
  let template = document.createElement(`template`);
  template.innerHTML = string;
  return template.firstChild;
};

export default createElement;
