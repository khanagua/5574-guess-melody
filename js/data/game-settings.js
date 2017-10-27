const PlaySettings = {
  GAME_TIME: 300,
  ANSWER_TIME: 30,
  COUNT_MISTAKES: 3,
  COUNT_ANSWERS: 10,
};

const initialState = {
  time: 299,
  mistakes: 0,
  level: 0,
  resetDefault() {
    this.time = PlaySettings.GAME_TIME;
    this.mistakes = 0;
    this.level = 0;
  }
};

const currentPlayer = {
  score: 0,
  remainingTime: initialState.time,
  spentTime: PlaySettings.GAME_TIME - initialState.time,
  remainingNotes: 3,
  answers: [],
  resetToDefault() {
    this.score = 0;
    this.remainingTime = initialState.time;
    this.spentTime = PlaySettings.GAME_TIME - initialState.time;
    this.remainingNotes = PlaySettings.COUNT_MISTAKES - initialState.mistakes;
    this.answers = [];
  }
};

const testResultsPlayers = [0, 7, 10, 12, 13, 14, 20];

export {PlaySettings, initialState, currentPlayer, testResultsPlayers};
