import { createButtonElement } from '../shared/buttonElement.js';
import { createDivElement } from '../shared/divElement.js';
import { pomodoroButtonHandler } from '../../handlers/pomodoroHandlers.js';
import { pomodoroDisplayPanel } from '../layout/pomodoro-display-panel.js';
import { state } from '../../data.js';

export const pomodoroTab = () => {
  const pomodoroTabDiv = document.createElement('div');

  const titlePanel = createDivElement(
    'd-flex flex-row justify-content-center text-danger p-2 pt-4',
    'pomodoro-title-panel'
  );

  const titleElement = document.createElement('h3');
  titleElement.innerText = 'Pomodoro Timer';
  titlePanel.appendChild(titleElement);

  pomodoroTabDiv.appendChild(titlePanel);

  const pomodoroDisplayEl = pomodoroDisplayPanel();
  pomodoroTabDiv.appendChild(pomodoroDisplayEl);

  const buttonPanel = createDivElement(
    'd-flex flex-row justify-content-center my-2 p-2',
    'pomodoro-button-panel'
  );

  const startButton = createButtonElement(
    'Start',
    'button',
    'btn btn-outline-danger',
    'pomodoro-start-button'
  );
  buttonPanel.appendChild(startButton);

  const pauseButton = createButtonElement(
    'Pause',
    'button',
    'btn btn-outline-danger',
    'pomodoro-pause-button'
  );
  buttonPanel.appendChild(pauseButton);

  buttonPanel.appendChild(
    createButtonElement(
      'Reset',
      'button',
      'btn btn-outline-danger',
      'pomodoro-reset-button'
    )
  );

  pomodoroTabDiv.appendChild(buttonPanel);

  pomodoroTabDiv.addEventListener('click', pomodoroButtonHandler);

  if (state.isPomodoroRunning) {
    startButton.style.display = 'none';
    pauseButton.style.display = 'block';
  } else {
    startButton.style.display = 'block';
    pauseButton.style.display = 'none';
  }

  const textPanel = createDivElement(
    'd-flex flex-column justify-content-center mt-2 mb-5 p-3 text-center',
    'explanation-panel'
  );
  textPanel.innerHTML = `<p>The Pomodoro Technique uses a timer to break down work into intervals,
    traditionally 25 minutes in length, are called pomodoros. </p>
    <p>A short 5 minute break separates consecutive pomodoros. </p>
    <p>Three pomodoros form a set. A longer 15 to 30 minute break is taken between sets.</p>`;

  pomodoroTabDiv.appendChild(textPanel);

  return pomodoroTabDiv;
};
