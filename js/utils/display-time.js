import getTimer from './getTimer.js';
import convertSecInMinutes from './convert-sec-in-minutes.js';
import {PlaySettings} from '../data/game-settings.js';
import openScreen from '../open-screen.js';
import getScreenResultFail from '../templates/result/result-fail.js';

const displayTime = (state) => {
  const colorTime = document.querySelector(`.timer-value`);
  const min = document.querySelector(`.timer-value-mins`);
  const sec = document.querySelector(`.timer-value-secs`);
  let timer = getTimer(state.time);
  const timeout = () => {
    setTimeout(() => {
      const time = convertSecInMinutes(timer.value);
      min.innerHTML = time.min;
      sec.innerHTML = time.sec;
      timer = timer.tick();
      if (timer) {
        timeout();
      }
      if (timer.value < PlaySettings.DANGEROUS_TIME) {
        colorTime.setAttribute('style', 'color: red;');
      }
      if (!timer.value) {
        state.tagOfLoss = `TimeOut`;
        openScreen(getScreenResultFail(state.tagOfLoss, state));
        state.resetDefault();
      }
    }, 1000);
  };
  timeout(timer);
  state.time = timer.value;
  return state;
};

export default displayTime;
