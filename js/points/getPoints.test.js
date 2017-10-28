import assert from 'assert';
import getPoints from './getPoints.js';

let playerAnswers;

describe(`Player points`, () => {
  it(`less than 10 answers`, () => { // меньше 10 ответов
    playerAnswers = [];
    for (let i = 0; i < 9; i++) {
      assert.equal(getPoints(playerAnswers, 0), -1);
      playerAnswers.push({correctly: true, time: 35});
    }
  });

  it(`all the answers are correct, but not quick`, () => { // все ответы верные, но не быстрые
    playerAnswers = [
      {correctly: true, time: 45},
      {correctly: true, time: 75},
      {correctly: true, time: 80},
      {correctly: true, time: 50},
      {correctly: true, time: 36},
      {correctly: true, time: 45},
      {correctly: true, time: 31},
      {correctly: true, time: 51},
      {correctly: true, time: 36},
      {correctly: true, time: 78},
    ];
    assert.equal(getPoints(playerAnswers, 3), 10);
  });

  it(`all the answers are correct and quick`, () => { // все ответы верные и быстрые
    playerAnswers = [
      {correctly: true, time: 15},
      {correctly: true, time: 25},
      {correctly: true, time: 8},
      {correctly: true, time: 5},
      {correctly: true, time: 3},
      {correctly: true, time: 15},
      {correctly: true, time: 29},
      {correctly: true, time: 18},
      {correctly: true, time: 28},
      {correctly: true, time: 28},
    ];
    assert.equal(getPoints(playerAnswers, 3), 20);
  });

  it(`all the answers are correct, some of them quick`, () => { // все ответы верные, часть из них быстрая
    playerAnswers = [
      {correctly: true, time: 15},
      {correctly: true, time: 25},
      {correctly: true, time: 80},
      {correctly: true, time: 50},
      {correctly: true, time: 36},
      {correctly: true, time: 15},
      {correctly: true, time: 29},
      {correctly: true, time: 18},
      {correctly: true, time: 28},
      {correctly: true, time: 28},
    ];
    assert.equal(getPoints(playerAnswers, 3), 17);
  });

  it(`part of the answers are correct, but not quick`, () => { // часть ответов верные, но не быстрые
    playerAnswers = [
      {correctly: true, time: 50},
      {correctly: true, time: 51},
      {correctly: false, time: 80},
      {correctly: true, time: 50},
      {correctly: false, time: 36},
      {correctly: true, time: 45},
      {correctly: true, time: 36},
      {correctly: false, time: 80},
      {correctly: true, time: 32},
      {correctly: true, time: 31},
    ];
    assert.equal(getPoints(playerAnswers, 0), 1);
  });

  it(`part of the answers are correct and quick`, () => { // часть ответов верная и быстрая
    playerAnswers = [
      {correctly: true, time: 5},
      {correctly: true, time: 51},
      {correctly: false, time: 8},
      {correctly: true, time: 50},
      {correctly: false, time: 36},
      {correctly: true, time: 45},
      {correctly: true, time: 29},
      {correctly: false, time: 18},
      {correctly: true, time: 32},
      {correctly: true, time: 31},
    ];
    assert.equal(getPoints(playerAnswers, 0), 3);
  });
});
