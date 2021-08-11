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

  timerDisplayInterval = setInterval(renderTimerDisplay, 50);
};

const renderTimerDisplay = (time = Date.now()) => {
  const timerHRS = document.getElementById('timer-HRS');
  const timerMIN = document.getElementById('timer-MIN');
  const timerSEC = document.getElementById('timer-SEC');

  state.timerTotalPassedMilliseconds = time - state.timerStartTime;

  const displayDate = getFormattedTime(
    new Date(
      state.timerSettings.getTotalMiliSeconds() -
        state.timerTotalPassedMilliseconds
    )
  );

  if (timerSEC) timerSEC.innerText = displayDate.seconds;
  if (timerMIN) timerMIN.innerText = displayDate.minutes;
  if (timerHRS) timerHRS.innerText = displayDate.hours;

  let percentage =
    100 -
    (state.timerTotalPassedMilliseconds /
      state.timerSettings.getTotalMiliSeconds()) *
      100;

  const timerChartElement = document.getElementById('timer-chart');
  timerChartElement.style.background = `conic-gradient(#0d6efd ${percentage}%, white 0)`;

  if (
    state.timerSettings.getTotalMiliSeconds() -
      state.timerTotalPassedMilliseconds <=
    0
  ) {
    clearInterval(timerDisplayInterval);
    state.resetTimer();
    reRenderTimerPanel();
    alertTimerFinished();
  }
};

const alertTimerFinished = () => {
  console.log('Time is up !');
  alertify.alert('Timer Alert', 'Time is up !', function () {
    // alertify.warning('Time is up !');
  });
};

export const pauseTimer = () => {
  console.log('timer paused');
};
export const resetTimer = () => {
  console.log('timer reseted');
};

export const reRenderTimerPanel = (
  date = Math.max(
    state.timerSettings.getTotalMiliSeconds() -
      state.timerTotalPassedMilliseconds,
    0
  )
) => {
  const formattedTime = getFormattedTime(new Date(date));

  document.getElementById('timer-HRS').innerText = formattedTime.hours;
  document.getElementById('timer-MIN').innerText = formattedTime.minutes;
  document.getElementById('timer-SEC').innerText = formattedTime.seconds;

  let percentage =
    100 -
    (state.timerTotalPassedMilliseconds /
      state.timerSettings.getTotalMiliSeconds()) *
      100;

  const timerChartElement = document.getElementById('timer-chart');
  timerChartElement.style.background = `conic-gradient(#0d6efd ${percentage}%, white 0)`;
};
