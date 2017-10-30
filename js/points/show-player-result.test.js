import assert from 'assert';
import {PHRASE, showPlayerResult} from './show-player-result';

const resultAllPlayer = [10, 12, 15, 19];

describe(`The player has lost`, () => {
  it(`Over time`, () => {
    const playerResult = {remainingTime: 0, remainingNotes: 3, score: 5};
    assert.equal(showPlayerResult(resultAllPlayer, playerResult), PHRASE.failTime);
  });
  it(`Ended attempts`, () => {
    const playerResult = {remainingTime: 25, remainingNotes: -1, score: 15};
    assert.equal(showPlayerResult(resultAllPlayer, playerResult), PHRASE.failNotes);
  });
});

describe(`The player wins`, () => {
  it(`The player ranked first`, () => {
    const playerResult = {remainingTime: 25, remainingNotes: 1, score: 20};
    assert.equal(showPlayerResult(resultAllPlayer, playerResult), PHRASE.win(1, 5, 80));
  });
  it(`The player ranked last`, () => {
    const playerResult = {remainingTime: 25, remainingNotes: 1, score: 5};
    assert.equal(showPlayerResult(resultAllPlayer, playerResult), PHRASE.win(5, 5, 0));
  });
  it(`The player does not first and not last place`, () => {
    const playerResult = {remainingTime: 25, remainingNotes: 1, score: 18};
    assert.equal(showPlayerResult(resultAllPlayer, playerResult), PHRASE.win(2, 5, 60));
  });
});
