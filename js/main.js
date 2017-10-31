import {initialState} from './data/game-settings.js';
import getScreenWelcome from './templates/welcome/welcome.js';
import openScreen from './open-screen.js';

openScreen(getScreenWelcome(initialState));
