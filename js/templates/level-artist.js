import createElement from '../create-element.js';
import controllerConditions from '../controller-conditions.js';
import checkAnswer from '../points/check-answer.js';
import getHeaderTemplate from './header.js';

/**
 * Получить строку шаблона заголовка экрана
 * @param {string} title заголовок
 * @return {string}
 */
const getTemplateTitle = (title) => {
  return `<h2 class="title main-title">${title}</h2>`;
};

/**
 * Получить строку шаблона вопроса
 * @param {string} songSrc ссылка на песню
 * @return {string}
 */
const getTemplateQuestion = (songSrc) => {
  return `<div class="player-wrapper">
            <div class="player">
              <audio src="${songSrc}"></audio>
              <button class="player-control player-control--play js-song-play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>`;
};

/**
 * Получить строку шаблона ответа
 * @param {number} answerNumber номер ответа
 * @param {string} artistName имя артиста
 * @param {string} artistImage логотип
 * @return {string}
 */
const getTemplateAnswer = (answerNumber, artistName, artistImage) => {
  return `<div class="main-answer-wrapper">
            <input class="main-answer-r js-main-answer-r" type="radio" id="answer-${answerNumber}" name="answer" value="${artistName}"/>
            <label class="main-answer" for="answer-${answerNumber}">
              <img class="main-answer-preview" src="${artistImage}" alt="${artistName}" width="134" height="134">
              ${artistName}
            </label>
          </div>`;
};

/**
 * Получить строку экрана с угадыванием артиста
 * @param {object} currentQuestion текущий вопрос
 * @param {object} currentState текущие настройки игры
 * @return {string}
 */
const srtLevelArtist = (currentQuestion, currentState) => {
  return `${getHeaderTemplate(currentState)}<section class="main main--level main--level-artist">
    <div class="main-wrap">
      ${getTemplateTitle(currentQuestion.title)};
      ${getTemplateQuestion(currentQuestion.songSrc)};
      <form class="main-list js-main-list">
        ${currentQuestion.optionAnswer.reduce((answers, answer, answerIndex) => answers + getTemplateAnswer(answerIndex + 1, answer.artist, answer.image), ``)}
      </form>
    </div>
  </section>`;
};

/**
 * Получить шаблон экрана с угадыванием артиста
 * @param {object} currentState текущие настройки игры
 * @param {object} currentQuestion текущий вопрос
 * @return {DOM-object}
 */
const getScreenLevelArtist = (currentState, currentQuestion) => {
  const screenLevelArtist = createElement(srtLevelArtist(currentQuestion, currentState));
  const btnMainAnswer = screenLevelArtist.content.querySelector(`.main-list`);

  /**
   * Отследить нажатие на инпут
   * @param {Event} evt объект события
   */
  btnMainAnswer.addEventListener(`click`, (evt) => {
    if (evt.target.closest(`.js-main-answer-r`)) {
      const currentAnswer = evt.target.closest(`.js-main-answer-r`).value;
      checkAnswer(currentState, currentQuestion, currentAnswer);
      controllerConditions(currentState);
    }
  });
  return screenLevelArtist;
};

export default getScreenLevelArtist;
