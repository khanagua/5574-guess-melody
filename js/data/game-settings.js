const PlaySettings = {
  GAME_TIME: 300,
  ANSWER_TIME: 30,
  DANGEROUS_TIME: 30,
  MIN_TIME: 0,
  COUNT_MISTAKES: 3,
  MARK_LOSS: -1,
  COUNT_ANSWERS: 10,
  MIN_COUNT_NOTES: 0,
};

const PointsForAnswer = {
  FOR_QUICK: 2,
  FOR_CORRECT: 1,
  FOR_INCORRECT: 2,
};

class State {
  constructor(time, mistakes, level, tagOfLoss, elapsedTime) {
    this.time = 6;
    this.mistakes = 0;
    this.level = 0;
    this.tagOfLoss = ``;
    this.elapsedTime = 0;
  }

  resetDefault() {
    this.time = PlaySettings.GAME_TIME;
    this.mistakes = 0;
    this.level = 0;
    this.tagOfLoss = ``;
  }

  getProperty() {
    return {
      time: this.time,
      mistakes: this.mistakes,
      level: this.level,
      tagOfLoss: this.tagOfLoss,
      elapsedTime: this.elapsedTime,
    };
  }

  increaseMistakes() {
    this.mistakes = this.mistakes + 1;
  }

  setTagOfLoss(tagOfLoss) {
    this.tagOfLoss = tagOfLoss;
  }

  getTime() {
    return this.time;
  }

  setTime(time) {
    this.time = time;
  }

  nextLevel() {
    this.level++;
  }
}

const initialState = new State();

const currentPlayer = {
  score: 0,
  remainingTime: initialState.getProperty().time,
  spentTime: PlaySettings.GAME_TIME - initialState.getProperty().time,
  remainingNotes: 3,
  answers: [],
  resetToDefault() {
    this.score = 0;
    this.remainingTime = initialState.getProperty().time;
    this.spentTime = PlaySettings.GAME_TIME - initialState.getProperty().time;
    this.remainingNotes = PlaySettings.COUNT_MISTAKES - initialState.getProperty().time;
    this.answers = [];
  }
};

const testResultsPlayers = [0, 7, 10, 12, 13, 14, 20];
const testTimePlayer = 35;

export {PlaySettings, PointsForAnswer, initialState, currentPlayer, testResultsPlayers, testTimePlayer};
