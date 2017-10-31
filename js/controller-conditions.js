import {PlaySettings, currentPlayer, testResultsPlayers} from './data/game-settings.js';
import openScreen from './open-screen.js';
import screenResultTimeOut from './templates/result-time-out.js';
import getScreenResaltFail from './templates/resalt/resalt-fail.js';
import choiceQuestion from './utils/choice-question.js';
import getPoints from './points/get-points.js';
import {showPlayerResult} from './points/show-player-result';
import getScreenResult from './templates/result.js';

/**
 * Проверить условия окончания игры или перехода к следующему вопросу
 * @param {object} state начальные настройки игры
 */
const controllerConditions = (state) => {
  if (!state.time) { // Закончилось общее время игры
    openScreen(screenResultTimeOut);
    state.resetDefault();
    return;
  }
  if (state.mistakes === PlaySettings.COUNT_MISTAKES + 1) { // Закончились жизни
    openScreen(getScreenResaltFail(state));
    state.resetDefault();
    return;
  }
  if (state.level === PlaySettings.COUNT_ANSWERS) { // ответил на все вопросы
    const playerAnswers = currentPlayer.answers;
    const remainingNotes = currentPlayer.remainingNotes - state.mistakes;
    currentPlayer.score = getPoints(playerAnswers, remainingNotes);
    const resultPhrase = showPlayerResult(testResultsPlayers, currentPlayer);
    openScreen(getScreenResult(resultPhrase, currentPlayer, state));
    return;
  }
  if (state.level < PlaySettings.COUNT_ANSWERS) { // ответил еще не на все вопросы
    choiceQuestion(state);
    state.level++;
  }
};

export default controllerConditions;
