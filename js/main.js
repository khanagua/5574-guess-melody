import {initialState} from './data/game-settings.js';
import screenWelcome from './templates/welcome/welcome.js';
import openScreen from './open-screen.js';

openScreen(screenWelcome(initialState));
