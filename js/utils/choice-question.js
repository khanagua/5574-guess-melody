import arrQuestions from '../data/questions.js';
import openScreen from '../change-screen.js';
import getScreenLevelArtist from '../templates/level-artist.js';
import getScreenLevelGenre from '../templates/level-genre.js';

/**
 * Выбрать следующий вопрос
 * @param {object} currentState текущие настройки игры
 */
const choiceQuestion = (currentState) => {
  let index = currentState.level;
  let currentQuestion = arrQuestions[index];
  if (currentQuestion.type === `artist`) {
    openScreen(getScreenLevelArtist(currentState, currentQuestion));
  }
  if (currentQuestion.type === `genre`) {
    openScreen(getScreenLevelGenre(currentState, currentQuestion));
  }
};

export default choiceQuestion;
