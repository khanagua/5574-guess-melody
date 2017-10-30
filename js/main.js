import {initialState} from './data/game-settings.js';
import getScreenWelcome from './templates/welcome.js';
import openScreen from './change-screen.js';

openScreen(getScreenWelcome(initialState));
