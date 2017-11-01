import arrQuestions from '../data/questions.js';
import openScreen from '../open-screen.js';
import getScreenLevelArtist from '../templates/level-artist/level-artist.js';
import getScreenLevelGenre from '../templates/level-genre/level-genre.js';

/**
 * Выбрать следующий вопрос
 * @param {object} currentState текущие настройки игры
 */
const choiceQuestion = (currentState) => {
  let index = currentState.level;
  let currentQuestion = arrQuestions[index];
  if (currentQuestion.type === `artist`) {
    openScreen(getScreenLevelArtist(currentState, currentQuestion), currentState);
  }
  if (currentQuestion.type === `genre`) {
    openScreen(getScreenLevelGenre(currentState, currentQuestion), currentState);
  }
};

export default choiceQuestion;
