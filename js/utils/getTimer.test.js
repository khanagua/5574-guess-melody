import assert from 'assert';
import {TIME_MESSAGE, getTimer} from './getTimer.js';

describe(`Answer of timer`, () => {
  it(`Time out`, () => {
    assert.equal(getTimer(0).tick(), TIME_MESSAGE);
  });
  it(`Time is reduced for a second`, () => {
    assert.equal(getTimer(5).tick().value, 4);
    assert.equal(getTimer(150).tick().value, 149);
  });
  it(`Run seconds`, () => {
    for (let i = 300; i >= 0; i--) {
      if (i === 0) {
        assert.equal(getTimer(i).tick(), TIME_MESSAGE);
      } else if (i !== 0) {
        assert.equal(getTimer(i).tick().value, (i - 1));
      }
    }
  });
});
