import { state } from '../data.js';
import { getFormattedTime } from '../logic/timeformat.js';

let interval;

export const startStopWatch = () => {
  state.stopwatchStartTime = Date.now();
  state.isStopwatchCounting = true;

  // hide start button
  const startButton = document.getElementById('stopwatch-start-button');
  startButton.style.display = 'none';

  // show pause button
  const pauseButton = document.getElementById('stopwatch-pause-button');
  pauseButton.style.display = 'block';

  interval = setInterval(renderStopWatchDisplay, 11);
};

export const pauseStopWatch = () => {
  state.isStopwatchCounting = false;
  clearInterval(interval);
};

export const resetStopWatch = () => {
  state.stopwatchStartTime = null;
  state.laps = [];

  // hide pause button
  const pauseButton = document.getElementById('stopwatch-pause-button');
  pauseButton.style.display = 'none';

  // show start button
  const startButton = document.getElementById('stopwatch-start-button');
  startButton.style.display = 'block';

  resetStopWatchDisplay();
};

export const addLapStopWatch = () => {};

const renderStopWatchDisplay = () => {
  const stopwatchHRS = document.getElementById('stopwatch-HRS');
  const stopwatchMIN = document.getElementById('stopwatch-MIN');
  const stopwatchSEC = document.getElementById('stopwatch-SEC');
  const stopwatchMS = document.getElementById('stopwatch-MS');

  const displayDate = getFormattedTime(
    new Date(Date.now() - state.stopwatchStartTime)
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
