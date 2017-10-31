import AbstractView from '../abstract-view.js';
import getHeaderTemplate from '../header.js';
import getCopyright from '../copyright.js';

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

export default class LevelArtistView extends AbstractView {
  constructor(currentState, currentQuestion) {
    super();
    this.currentQuestion = currentQuestion;
    this.currentState = currentState;
  }


  get template() {
    return `${getHeaderTemplate(this.currentState)}<section class="main main--level main--level-artist">
    <div class="main-wrap">
      ${getTemplateTitle(this.currentQuestion.title)};
      ${getTemplateQuestion(this.currentQuestion.songSrc)};
      <form class="main-list js-main-list">
        ${this.currentQuestion.optionAnswer.reduce((answers, answer, answerIndex) => answers + getTemplateAnswer(answerIndex + 1, answer.artist, answer.image), ``)}
      </form>
    </div>
  </section>${getCopyright()}`.trim();
  }

  bind() {
    const btnMainAnswer = this.element.querySelector(`.main-list`);
    btnMainAnswer.addEventListener(`click`, (evt) => {
      if (evt.target.closest(`.js-main-answer-r`)) {
        this.onSendAnswer(evt);
      }
    });
  }

  onSendAnswer() {}
}
