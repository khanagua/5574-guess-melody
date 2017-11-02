import {PlaySettings, currentPlayer, testResultsPlayers} from './data/game-settings.js';
import openScreen from './open-screen.js';
import getScreenResultFail from './templates/result/result-fail.js';
import choiceQuestion from './utils/choice-question.js';
import getPoints from './points/get-points.js';
import {showPlayerResult} from './points/show-player-result';
import getScreenResult from './templates/result/result-win.js';

/**
 * Проверить условия окончания игры или перехода к следующему вопросу
 * @param {object} state начальные настройки игры
 */
const controllerConditions = (state) => {
  if (!state.time) { // Закончилось общее время игры
    state.tagOfLoss = `TimeOut`;
    openScreen(getScreenResultFail(state.tagOfLoss, state));
    state.resetDefault();
    return;
  }
  if (state.mistakes === PlaySettings.COUNT_MISTAKES + 1) { // Закончились жизни
    state.tagOfLoss = `AttemptOut`;
    openScreen(getScreenResultFail(state.tagOfLoss, state));
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
