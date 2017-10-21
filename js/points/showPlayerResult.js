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
 * @param {object} playerResult объект результата с кол-вом набранных баллов, кол-вом оставшихся нот и кол-вом оставшегося времени
 * @return {string}
 */
const showPlayerResult = (resultAllPlayer, playerResult) => {
  if (playerResult.remainingTime === 0) {
    return PHRASE.failTime;
  }
  if (playerResult.remainingNotes === -1) {
    return PHRASE.failNotes;
  }
  const playersStatistics = resultAllPlayer.slice();
  playersStatistics.push(playerResult.points);
  playersStatistics.sort((a, b) => {
    return b - a;
  });
  const placePlayer = playersStatistics.indexOf(playerResult.points) + 1;
  const amountPlayers = playersStatistics.length;
  const percent = (amountPlayers - placePlayer) / amountPlayers * 100;
  const roundPercent = Math.round(percent);
  return PHRASE.win(placePlayer, amountPlayers, roundPercent);
};

export {PHRASE, showPlayerResult};
