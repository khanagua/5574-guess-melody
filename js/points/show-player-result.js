import {PlaySettings} from '../data/game-settings.js';

const PHRASE = {
  failTime: `Время вышло! Вы не успели отгадать все мелодии`,
  failNotes: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  win: (placePlayer, amountPlayers, roundPercent) => {
    return `Вы заняли ${placePlayer}-ое место из ${amountPlayers} игроков. Это лучше чем у ${roundPercent}% игроков`;
  }
};

/**
 * Подсчитываем количество очков у тех, кто ответил на все вопросы
 * @param {array} resultAllPlayer массив результатов игр других игроков
 * @param {object} currentPlayer объект результата с кол-вом набранных баллов, кол-вом оставшихся нот и кол-вом оставшегося времени
 * @return {string}
 */

const showPlayerResult = (resultAllPlayer, currentPlayer) => {
  if (currentPlayer.remainingTime === PlaySettings.MIN_TIME) {
    return PHRASE.failTime;
  }
  if (currentPlayer.remainingNotes < PlaySettings.MIN_COUNT_NOTES) {
    return PHRASE.failNotes;
  }
  const playersStatistics = resultAllPlayer.slice();
  playersStatistics.push(currentPlayer.score);
  playersStatistics.sort((a, b) => {
    return b - a;
  });
  const placePlayer = playersStatistics.indexOf(currentPlayer.score) + 1;
  const amountPlayers = playersStatistics.length;
  const percent = (amountPlayers - placePlayer) / amountPlayers * 100;
  const roundPercent = Math.round(percent);
  return PHRASE.win(placePlayer, amountPlayers, roundPercent);
};

export {PHRASE, showPlayerResult};
