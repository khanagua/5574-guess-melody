import getTimer from './getTimer.js';
import convertSecInMinutes from './convert-sec-in-minutes.js';
import {PlaySettings, initialState} from '../data/game-settings.js';
import openScreen from '../open-screen.js';
import getScreenResultFail from '../templates/result/result-fail.js';

const displayTime = () => {
  const colorTime = document.querySelector(`.timer-value`);
  const min = document.querySelector(`.timer-value-mins`);
  const sec = document.querySelector(`.timer-value-secs`);
  let timer = getTimer(initialState.getTime());
  const timeout = () => {
    setTimeout(() => {
      timer = timer.tick();
      if (timer) {
        timeout();
        initialState.setTime(timer.value);
      }
      if (timer.value < PlaySettings.DANGEROUS_TIME) {
        colorTime.setAttribute('style', 'color: red;');
      }
      if (!timer.value) {
        initialState.setTagOfLoss(`TimeOut`);
        openScreen(getScreenResultFail(initialState.getProperty().tagOfLoss, initialState.getProperty()));
        initialState.resetDefault();
      }
      const time = convertSecInMinutes(timer.value);
      min.innerHTML = time.min;
      sec.innerHTML = time.sec;
    }, 1000);
  };
  timeout();
};

export default displayTime;
