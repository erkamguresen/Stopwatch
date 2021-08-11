import { state } from '../data.js';
import { renderStopwatch } from '../init/routes.js';
import { getFormattedTime } from '../logic/timeformat.js';
import { renderLaps } from './laps.js';

let displayInterval;

export const startStopWatch = () => {
  if (state.stopwatchStartTime === null) {
    state.stopwatchStartTime = Date.now();
  } else {
    state.stopwatchStartTime = Date.now() - state.totalPassedTime;
    state.totalPassedTime = null;
  }

  state.isStopwatchRunning = true;

  // hide start button
  const startButton = document.getElementById('stopwatch-start-button');
  startButton.style.display = 'none';

  // show pause button
  const pauseButton = document.getElementById('stopwatch-pause-button');
  pauseButton.style.display = 'block';

  displayInterval = setInterval(renderStopWatchDisplay, 13);
};

export const pauseStopWatch = () => {
  const pauseTime = Date.now();

  clearInterval(displayInterval);

  state.isStopwatchRunning = false;

  // hide pause button
  const pauseButton = document.getElementById('stopwatch-pause-button');
  pauseButton.style.display = 'none';

  // show start button
  const startButton = document.getElementById('stopwatch-start-button');
  startButton.style.display = 'block';

  renderStopWatchDisplay(pauseTime);

  state.totalPassedTime = pauseTime - state.stopwatchStartTime;
};

export const resetStopWatch = () => {
  clearInterval(displayInterval);

  state.resetStopWatch();

  renderStopwatch();

  // console.log(state);
};

export const addLapStopWatch = () => {
  let lapTime;
  let formattedLapTime;

  switch (state.isStopwatchRunning) {
    case true:
      lapTime = new Date(Date.now() - state.stopwatchStartTime);

      formattedLapTime = getFormattedTime(lapTime);

      state.laps.push(formattedLapTime);

      renderLaps();
      break;

    case false:
      if (state.totalPassedTime !== null) {
        lapTime = new Date(state.totalPassedTime);

        formattedLapTime = getFormattedTime(lapTime);

        state.laps.push(formattedLapTime);

        renderLaps();
      }
      break;
  }
};

export const renderStopWatchDisplay = (time = Date.now()) => {
  const stopwatchHRS = document.getElementById('stopwatch-HRS');
  const stopwatchMIN = document.getElementById('stopwatch-MIN');
  const stopwatchSEC = document.getElementById('stopwatch-SEC');
  const stopwatchMS = document.getElementById('stopwatch-MS');

  const displayDate = getFormattedTime(
    new Date(time - state.stopwatchStartTime)
  );

  if (stopwatchMS) stopwatchMS.innerText = displayDate.milliseconds;
  if (stopwatchSEC) stopwatchSEC.innerText = displayDate.seconds;
  if (stopwatchMIN) stopwatchMIN.innerText = displayDate.minutes;
  if (stopwatchHRS) stopwatchHRS.innerText = displayDate.hours;
};

const resetStopWatchDisplay = () => {
  document.getElementById('stopwatch-HRS').innerText = '00';
  document.getElementById('stopwatch-MIN').innerText = '00';
  document.getElementById('stopwatch-SEC').innerText = '00';
  document.getElementById('stopwatch-MS').innerText = '000';
};
