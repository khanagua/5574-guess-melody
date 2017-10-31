import createElement from '../create-element.js';
import controllerConditions from '../controller-conditions.js';
import checkAnswer from '../points/check-answer.js';
import getHeaderTemplate from './header.js';
import getCopyright from './copyright.js';

/**
 * Получить строку шаблона заголовка экрана
 * @param {string} title заголовок
 * @return {string}
 */
const getTemplateTitle = (title) => {
  return `<h2 class="title">${title}</h2>`;
};

/**
 * Получить строку шаблона ответов
 * @param {number} answerNumber номер ответа
 * @param {string} songSrc ссылка на песню
 * @param {string} songName название песни
 * @return {string}
 */
const getTemplateAnswer = (answerNumber, songSrc, songName) => {
  return `<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${songSrc}"></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="${songName}" id="a-${answerNumber}">
          <label class="genre-answer-check" for="a-${answerNumber}"></label>
        </div>`;
};

/**
 * Получить строку экрана с угадыванием жарна
 * @param {object} currentQuestion текущий вопрос
 * @param {object} currentState текущие настройки игры
 * @return {string}
 */
const strLevelGenre = (currentQuestion, currentState)=> {
  return `${getHeaderTemplate(currentState)}<section class="main main--level main--level-genre">
    <div class="main-wrap">
      ${getTemplateTitle(currentQuestion.title)};
      <form class="genre">
        ${currentQuestion.optionAnswer.reduce((answers, answer, answerIndex) => answers + getTemplateAnswer(answerIndex + 1, answer.src, answer.name), ``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>${getCopyright()}`;
};

/**
 * Получить шаблон экрана с угадыванием жанра
 * @param {object} currentState текущие настройки игры
 * @param {object} currentQuestion текущий вопрос
 * @return {DOM-object}
 */
const getScreenLevelGenre = (currentState, currentQuestion) => {
  const screenLevelGenre = createElement(strLevelGenre(currentQuestion, currentState));
  const btnAnswerSend = screenLevelGenre.querySelector(`.genre-answer-send`);
  const formGenre = screenLevelGenre.querySelector(`.genre`);
  btnAnswerSend.setAttribute(`disabled`, `disabled`);

  /**
   * Проверить, есть ли выбранные чекбоксы
   */
  const validateCheckedInputs = () => {
    btnAnswerSend.disabled = formGenre.querySelectorAll(`input[name="answer"]:checked`).length === 0;
  };

  formGenre.addEventListener(`click`, validateCheckedInputs);

  /**
   * Отследить нажатие на кнопку
   * @param {Event} evt объект события
   */
  btnAnswerSend.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const answersCheckedInputs = Array.from(formGenre.querySelectorAll(`input[name="answer"]:checked`));
    const currentAnswer = answersCheckedInputs.map((checkedInput) => checkedInput.value);
    checkAnswer(currentState, currentQuestion, currentAnswer);
    controllerConditions(currentState);
  });
  return screenLevelGenre;
};

export default getScreenLevelGenre;
