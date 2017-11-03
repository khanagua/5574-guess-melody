import {PlaySettings, initialState, currentPlayer, testResultsPlayers} from './data/game-settings.js';
import openScreen from './open-screen.js';
import getScreenResultFail from './templates/result/result-fail.js';
import choiceQuestion from './utils/choice-question.js';
import getPoints from './points/get-points.js';
import {showPlayerResult} from './points/show-player-result';
import getScreenResult from './templates/result/result-win.js';
import displayTime from './utils/display-time.js';


/**
 * Проверить условия окончания игры или перехода к следующему вопросу
 * @param {object} state начальные настройки игры
 */
const controllerConditions = () => {
  const state = initialState.getProperty();
  if (state.mistakes === PlaySettings.COUNT_MISTAKES + 1) { // Закончились жизни
    state.tagOfLoss = `AttemptOut`;
    openScreen(getScreenResultFail(state.tagOfLoss, state));
    initialState.resetDefault();
    return;
  }
  if (state.level === PlaySettings.COUNT_ANSWERS) { // ответил на все вопросы
    const playerAnswers = currentPlayer.answers;
    const remainingNotes = currentPlayer.remainingNotes - state.mistakes;
    currentPlayer.score = getPoints(playerAnswers, remainingNotes);
    const resultPhrase = showPlayerResult(testResultsPlayers, currentPlayer, state);
    openScreen(getScreenResult(resultPhrase, currentPlayer));
    return;
  }
  if (state.level < PlaySettings.COUNT_ANSWERS) { // ответил еще не на все вопросы
    choiceQuestion(state);
    displayTime();
    initialState.nextLevel();
  }
};

export default controllerConditions;
