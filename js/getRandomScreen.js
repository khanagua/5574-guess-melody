import screenResult from './screens/mainResult.js';
import screenResultAttemptsOut from './screens/mainResultAttemptsOut.js';
import screenResultTimeOut from './screens/mainResultTimeOut.js';

const arrScreenResult = [screenResult, screenResultAttemptsOut, screenResultTimeOut];
let randomNumber = Math.floor(Math.random() * arrScreenResult.length);
let randomScreen = arrScreenResult[randomNumber];

export default randomScreen;
