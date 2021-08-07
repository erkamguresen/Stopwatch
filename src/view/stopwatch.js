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

  // hide start button
  const startButton = document.getElementById('stopwatch-start-button');
  startButton.style.display = 'none';

  // show pause button
  const pauseButton = document.getElementById('stopwatch-pause-button');
  pauseButton.style.display = 'block';

  displayInterval = setInterval(renderStopWatchDisplay, 13);

  state.isStopwatchRunning = true;
};

export const pauseStopWatch = () => {
  // hide pause button
  const pauseButton = document.getElementById('stopwatch-pause-button');
  pauseButton.style.display = 'none';

  // show start button
  const startButton = document.getElementById('stopwatch-start-button');
  startButton.style.display = 'block';

  const pauseTime = Date.now();

  renderStopWatchDisplay(pauseTime);

  state.totalPassedTime = pauseTime - state.stopwatchStartTime;

  clearInterval(displayInterval);

  state.isStopwatchRunning = false;
};

export const resetStopWatch = () => {
  state.resetStopWatch();

  renderStopwatch();

  // // hide pause button
  // const pauseButton = document.getElementById('stopwatch-pause-button');
  // pauseButton.style.display = 'none';

  // // show start button
  // const startButton = document.getElementById('stopwatch-start-button');
  // startButton.style.display = 'block';

  // clearInterval(displayInterval);

  // resetStopWatchDisplay();
  // renderLaps();

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

const renderStopWatchDisplay = (time = Date.now()) => {
  const stopwatchHRS = document.getElementById('stopwatch-HRS');
  const stopwatchMIN = document.getElementById('stopwatch-MIN');
  const stopwatchSEC = document.getElementById('stopwatch-SEC');
  const stopwatchMS = document.getElementById('stopwatch-MS');

  const displayDate = getFormattedTime(
    new Date(time - state.stopwatchStartTime)
  );

  stopwatchMS.innerText = displayDate.milliseconds;
  stopwatchSEC.innerText = displayDate.seconds;
  stopwatchMIN.innerText = displayDate.minutes;
  stopwatchHRS.innerText = displayDate.hours;
};

const resetStopWatchDisplay = () => {
  document.getElementById('stopwatch-HRS').innerText = '00';
  document.getElementById('stopwatch-MIN').innerText = '00';
  document.getElementById('stopwatch-SEC').innerText = '00';
  document.getElementById('stopwatch-MS').innerText = '000';
};
