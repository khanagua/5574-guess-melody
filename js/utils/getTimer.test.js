import assert from 'assert';
import getTimer from './getTimer.js';

describe(`Answer of timer`, () => {
  it(`Time out`, () => {
    assert.equal(getTimer(1).tick().value, false);
  });
  it(`Time is reduced for a second`, () => {
    assert.equal(getTimer(5).tick().value, 4);
    assert.equal(getTimer(150).tick().value, 149);
  });
  it(`Run seconds`, () => {
    for (let i = 300; i >= 0; i--) {
      if (i === 0) {
        assert.equal(getTimer(i).tick(), false);
      } else if (i !== 0) {
        assert.equal(getTimer(i).tick().value, (i - 1));
      }
    }
  });
});
