import { state } from "../data.js";
import { getFormattedTime } from "../logic/timeformat.js";

let pomodoroDisplayInterval;

export const startPomodoro = () => {
  console.log("startPomodoro");

  if (state.pomodoroStartTime === null) {
    state.pomodoroStartTime = Date.now();
  } else {
    state.pomodoroStartTime =
      Date.now() - state.pomodoroTotalPassedMilliseconds;
    state.pomodoroTotalPassedMilliseconds = null;
  }

  state.isPomodoroRunning = true;

  // hide start button
  const startButton = document.getElementById("pomodoro-start-button");
  startButton.style.display = "none";

  // show pause button
  const pauseButton = document.getElementById("pomodoro-pause-button");
  pauseButton.style.display = "block";

  pomodoroDisplayInterval = setInterval(renderPomodoroDisplay, 50);
};

const renderPomodoroDisplay = (time = Date.now()) => {
  const pomodoroHRS = document.getElementById("pomodoro-HRS");
  const pomodoroMIN = document.getElementById("pomodoro-MIN");
  const pomodoroSEC = document.getElementById("pomodoro-SEC");

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

    

  if (
    state.timerSettings.getTotalMiliSeconds() -
      state.timerTotalPassedMilliseconds <=
    0
  ) {
    clearInterval(pomodoroDisplayInterval);

    const soundWarning = document.getElementById("timer-audio");

    if (soundWarning && state.hasTimerSound) {
      soundWarning.play();
    }

    reRenderTimerPanel();
    alertTimerFinished(soundWarning);
  }
};

const alertTimerFinished = (soundWarning) => {
  alertify.alert("Timer Alert", "Time is up !", function () {
    state.resetTimer();
    reRenderTimerPanel();

    const pauseButton = document.getElementById("pomodoro-pause-button");
    const startButton = document.getElementById("pomodoro-start-button");

    if (pauseButton && startButton) {
      // hide pause button
      pauseButton.style.display = "none";

      // show start button
      startButton.style.display = "block";
    }

    soundWarning.pause();
    soundWarning.currentTime = 0;
  });
};

export const pausePomodoro = () => {
  const pauseTime = Date.now();

  clearInterval(pomodoroDisplayInterval);

  state.isTimerRunning = false;

  // hide pause button
  const pauseButton = document.getElementById("timer-pause-button");
  pauseButton.style.display = "none";

  // show start button
  const startButton = document.getElementById("timer-start-button");
  startButton.style.display = "block";

  state.timerTotalPassedMilliseconds = pauseTime - state.pomodoroStartTime;

  reRenderTimerPanel();
  };
  
export const resetPomodoro = () => {
  clearInterval(pomodoroDisplayInterval);

  state.resetTimer();

  reRenderTimerPanel();

  // hide pause button
  const pauseButton = document.getElementById("timer-pause-button");
  pauseButton.style.display = "none";

  // show start button
  const startButton = document.getElementById("timer-start-button");
  startButton.style.display = "block";
  console.log("timer reseted");
};

export const reRenderTimerPanel = (
    date = Math.max(
      state.timerSettings.getTotalMiliSeconds() -
      state.timerTotalPassedMilliseconds,
      0
    )
  ) => {
    const formattedTime = getFormattedTime(new Date(date));

    const timerHRS = document.getElementById("timer-HRS");
    const timerMIN = document.getElementById("timer-MIN");
    const timerSEC = document.getElementById("timer-SEC");

    if (timerHRS && timerMIN && timerSEC) {
      timerHRS.innerText = formattedTime.hours;
      timerMIN.innerText = formattedTime.minutes;
      timerSEC.innerText = formattedTime.seconds;
    };
  };
