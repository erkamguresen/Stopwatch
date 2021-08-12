import { state } from '../data.js';
import { renderTimer } from '../init/routes.js';
import { getFormattedTime } from '../logic/timeformat.js';
import { startTimer } from './timer-view.js';

let pomodoroDisplayInterval;

export const startPomodoro = () => {
  if (state.pomodoroStartTime === null) {
    state.pomodoroStartTime = Date.now();
  } else {
    state.pomodoroStartTime =
      Date.now() - state.pomodoroTotalPassedMilliseconds;
    state.pomodoroTotalPassedMilliseconds = null;
  }

  state.isPomodoroRunning = true;

  // hide start button
  const startButton = document.getElementById('pomodoro-start-button');
  startButton.style.display = 'none';

  // show pause button
  const pauseButton = document.getElementById('pomodoro-pause-button');
  pauseButton.style.display = 'block';

  pomodoroDisplayInterval = setInterval(renderPomodoroDisplay, 50);
};

const renderPomodoroDisplay = (time = Date.now()) => {
  const pomodoroHRS = document.getElementById('pomodoro-HRS');
  const pomodoroMIN = document.getElementById('pomodoro-MIN');
  const pomodoroSEC = document.getElementById('pomodoro-SEC');

  state.pomodoroTotalPassedMilliseconds = time - state.pomodoroStartTime;

  const displayDate = getFormattedTime(
    new Date(
      state.pomodoroSettings.getTotalMilliseconds() -
        state.pomodoroTotalPassedMilliseconds
    )
  );

  if (pomodoroSEC && pomodoroMIN && pomodoroHRS) {
    pomodoroHRS.innerText = displayDate.hours;
    pomodoroMIN.innerText = displayDate.minutes;
    pomodoroSEC.innerText = displayDate.seconds;
  }

  if (
    state.pomodoroSettings.getTotalMilliseconds() -
      state.pomodoroTotalPassedMilliseconds <=
    0
  ) {
    clearInterval(pomodoroDisplayInterval);

    const soundWarning = document.getElementById('pomodoro-audio');

    if (soundWarning) {
      soundWarning.play();
    }

    reRenderPomodoroPanel();
    alertPomodoroFinished(soundWarning);
  }
};

const alertPomodoroFinished = (soundWarning) => {
  alertify.confirm(
    'Pomodoro Alert',
    "Enough work, let's have a break! Do you want to take a LONG BREAK?",
    function () {
      pomodoroResetProcedure(soundWarning);
      alertify.success('Long Break Then!');
      setTimeout(function () {
        state.timerSettings.hours = 0;
        state.timerSettings.minutes = 15;
        state.timerSettings.seconds = 0;
        renderTimer();
        startTimer();
      }, 1500);
    },
    function () {
      pomodoroResetProcedure(soundWarning);
      alertify.warning('Short Break Then!');
      setTimeout(function () {
        state.timerSettings.hours = 0;
        state.timerSettings.minutes = 5;
        state.timerSettings.seconds = 0;
        renderTimer();
        startTimer();
      }, 1500);
    }
  );
};

const pomodoroResetProcedure = (soundWarning) => {
  state.resetPomodoro();
  reRenderPomodoroPanel();

  const pauseButton = document.getElementById('pomodoro-pause-button');
  const startButton = document.getElementById('pomodoro-start-button');

  if (pauseButton && startButton) {
    // hide pause button
    pauseButton.style.display = 'none';

    // show start button
    startButton.style.display = 'block';
  }

  soundWarning.pause();
  soundWarning.currentTime = 0;
};

export const pausePomodoro = () => {
  const pauseTime = Date.now();

  clearInterval(pomodoroDisplayInterval);

  state.isPomodoroRunning = false;

  // hide pause button
  const pauseButton = document.getElementById('pomodoro-pause-button');
  pauseButton.style.display = 'none';

  // show start button
  const startButton = document.getElementById('pomodoro-start-button');
  startButton.style.display = 'block';

  state.pomodoroTotalPassedMilliseconds = pauseTime - state.pomodoroStartTime;

  reRenderPomodoroPanel();
};

export const resetPomodoro = () => {
  clearInterval(pomodoroDisplayInterval);

  state.resetPomodoro();

  reRenderPomodoroPanel();

  // hide pause button
  const pauseButton = document.getElementById('pomodoro-pause-button');
  pauseButton.style.display = 'none';

  // show start button
  const startButton = document.getElementById('pomodoro-start-button');
  startButton.style.display = 'block';
  console.log('pomodoro reseted');
};

export const reRenderPomodoroPanel = (
  date = Math.max(
    state.pomodoroSettings.getTotalMilliseconds() -
      state.pomodoroTotalPassedMilliseconds,
    0
  )
) => {
  const formattedTime = getFormattedTime(new Date(date));

  const pomodoroHRS = document.getElementById('pomodoro-HRS');
  const pomodoroMIN = document.getElementById('pomodoro-MIN');
  const pomodoroSEC = document.getElementById('pomodoro-SEC');

  if (pomodoroHRS && pomodoroMIN && pomodoroSEC) {
    pomodoroHRS.innerText = formattedTime.hours;
    pomodoroMIN.innerText = formattedTime.minutes;
    pomodoroSEC.innerText = formattedTime.seconds;
  }
};
