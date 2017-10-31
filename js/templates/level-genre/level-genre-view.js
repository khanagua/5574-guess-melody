import AbstractView from '../abstract-view.js';
import getHeaderTemplate from '../header.js';
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


export default class LevelGenreView extends AbstractView {
  constructor(currentState, currentQuestion) {
    super();
    this.currentQuestion = currentQuestion;
    this.currentState = currentState;
  }


  get template() {
    return `${getHeaderTemplate(this.currentState)}<section class="main main--level main--level-genre">
    <div class="main-wrap">
      ${getTemplateTitle(this.currentQuestion.title)};
      <form class="genre">
        ${this.currentQuestion.optionAnswer.reduce((answers, answer, answerIndex) => answers + getTemplateAnswer(answerIndex + 1, answer.src, answer.name), ``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>${getCopyright()}`.trim();
  }

  bind() {
    const btnAnswerSend = this.element.querySelector(`.genre-answer-send`);
    btnAnswerSend.addEventListener(`click`, (evt) => {
      this.onSendAnswer(evt);
    });
  }

  onSendAnswer() {}
}
