import { state } from '../data.js';
import { getFormattedTime } from '../logic/timeformat.js';

let timerDisplayInterval;

export const startTimer = () => {
  console.log(
    'timer started ',
    state.timerSettings.hours,
    state.timerSettings.minutes,
    state.timerSettings.seconds
  );

  if (state.timerStartTime === null) {
    state.timerStartTime = Date.now();
  } else {
    state.timerStartTime = Date.now() - state.timerTotalPassedMilliseconds;
    state.totalPassedTime = null;
  }

  state.isTimerRunning = true;

  // hide start button
  const startButton = document.getElementById('timer-start-button');
  startButton.style.display = 'none';

  // show pause button
  const pauseButton = document.getElementById('timer-pause-button');
  pauseButton.style.display = 'block';

  timerDisplayInterval = setInterval(renderTimerDisplay, 20);
};

const renderTimerDisplay = (time = Date.now()) => {
  const timerHRS = document.getElementById('timer-HRS');
  const timerMIN = document.getElementById('timer-MIN');
  const timerSEC = document.getElementById('timer-SEC');

  console.log(
    state.timerSettings.getTotalSeconds() - (time - state.timerStartTime)
  );
  const displayDate = getFormattedTime(
    new Date(
      state.timerSettings.getTotalSeconds() - (time - state.timerStartTime)
    )
  );

  if (timerSEC) timerSEC.innerText = displayDate.seconds;
  if (timerMIN) timerMIN.innerText = displayDate.minutes;
  if (timerHRS) timerHRS.innerText = displayDate.hours;
};

export const pauseTimer = () => {
  console.log('timer paused');
};
export const resetTimer = () => {
  console.log('timer reseted');
};

export const reRenderTimerPanel = (
  hours = state.timerSettings.hours,
  minutes = state.timerSettings.minutes,
  seconds = state.timerSettings.seconds
) => {
  document.getElementById('timer-HRS').innerText = hours;
  document.getElementById('timer-MIN').innerText = minutes;
  document.getElementById('timer-SEC').innerText = seconds;
};
