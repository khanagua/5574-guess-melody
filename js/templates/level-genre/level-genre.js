import controllerConditions from '../controller-conditions.js';
import checkAnswer from '../points/check-answer.js';
import LevelGenreView from './level-genre-view.js';

/**
 * Получить шаблон экрана с угадыванием жанра
 * @param {object} currentState текущие настройки игры
 * @param {object} currentQuestion текущий вопрос
 * @return {DOM-object}
 */
const getScreenLevelGenre = (currentState, currentQuestion) => {
  const screenLevelGenre = new LevelGenreView(currentState, currentQuestion);
  const formGenre = screenLevelGenre.querySelector(`.genre`);
  btnAnswerSend.setAttribute(`disabled`, `disabled`);

  /**
   * Проверить, есть ли выбранные чекбоксы
   */
  const validateCheckedInputs = () => {
    btnAnswerSend.disabled = formGenre.querySelectorAll(`input[name="answer"]:checked`).length === 0;
  };

  formGenre.addEventListener(`click`, validateCheckedInputs);

  /**
   * Отследить нажатие на кнопку
   * @param {Event} evt объект события
   */
  btnAnswerSend.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const answersCheckedInputs = Array.from(formGenre.querySelectorAll(`input[name="answer"]:checked`));
    const currentAnswer = answersCheckedInputs.map((checkedInput) => checkedInput.value);
    checkAnswer(currentState, currentQuestion, currentAnswer);
    controllerConditions(currentState);
  });
  return screenLevelGenre;
};

export default getScreenLevelGenre;
