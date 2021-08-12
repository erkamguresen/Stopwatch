import { state } from "../data.js";
import { getFormattedTime } from "../logic/timeformat.js";
import { getTimerRingColor } from "../logic/timer-color.js";

let timerDisplayInterval;

export const startTimer = () => {
  if (state.timerStartTime === null) {
    state.timerStartTime = Date.now();
  } else {
    state.timerStartTime = Date.now() - state.timerTotalPassedMilliseconds;
    state.totalPassedTime = null;
  }

  state.isTimerRunning = true;

  // hide start button
  const startButton = document.getElementById("timer-start-button");
  startButton.style.display = "none";

  // show pause button
  const pauseButton = document.getElementById("timer-pause-button");
  pauseButton.style.display = "block";

  timerDisplayInterval = setInterval(renderTimerDisplay, 50);
};

const renderTimerDisplay = (time = Date.now()) => {
  const timerHRS = document.getElementById("timer-HRS");
  const timerMIN = document.getElementById("timer-MIN");
  const timerSEC = document.getElementById("timer-SEC");
  const timerChartElement = document.getElementById("timer-chart");

  state.timerTotalPassedMilliseconds = time - state.timerStartTime;

  const displayDate = getFormattedTime(
    new Date(
      state.timerSettings.getTotalMiliSeconds() -
        state.timerTotalPassedMilliseconds
    )
  );

  if (timerSEC && timerMIN && timerHRS && timerChartElement) {
    timerHRS.innerText = displayDate.hours;
    timerMIN.innerText = displayDate.minutes;
    timerSEC.innerText = displayDate.seconds;

    let percentage =
      100 -
      (state.timerTotalPassedMilliseconds /
        state.timerSettings.getTotalMiliSeconds()) *
        100;

    const ringColor = getTimerRingColor();

    timerChartElement.style.background = `conic-gradient(
    rgb(${ringColor.red}, 
      ${ringColor.green}, 
      ${ringColor.blue}) ${percentage}%, white 0)`;
  }

  if (
    state.timerSettings.getTotalMiliSeconds() -
      state.timerTotalPassedMilliseconds <=
    0
  ) {
    clearInterval(timerDisplayInterval);

    reRenderTimerPanel();
    alertTimerFinished();
  }
};

const alertTimerFinished = () => {
  alertify.alert("Timer Alert", "Time is up !", function () {
    state.resetTimer();
    reRenderTimerPanel();

    const pauseButton = document.getElementById("timer-pause-button");
    const startButton = document.getElementById("timer-start-button");

    if (pauseButton && startButton) {
      // hide pause button
      pauseButton.style.display = "none";

      // show start button
      startButton.style.display = "block";
    }
  });
};

export const pauseTimer = () => {
  const pauseTime = Date.now();

  clearInterval(timerDisplayInterval);

  state.isTimerRunning = false;

  // hide pause button
  const pauseButton = document.getElementById("timer-pause-button");
  pauseButton.style.display = "none";

  // show start button
  const startButton = document.getElementById("timer-start-button");
  startButton.style.display = "block";

  state.timerTotalPassedMilliseconds = pauseTime - state.timerStartTime;

  reRenderTimerPanel();
};
export const resetTimer = () => {
  clearInterval(timerDisplayInterval);

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
  const timerChartElement = document.getElementById("timer-chart");

  if (timerHRS && timerMIN && timerSEC && timerChartElement) {
    timerHRS.innerText = formattedTime.hours;
    timerMIN.innerText = formattedTime.minutes;
    timerSEC.innerText = formattedTime.seconds;

    let percentage =
      100 -
      (state.timerTotalPassedMilliseconds /
        state.timerSettings.getTotalMiliSeconds()) *
        100;

    timerChartElement.style.background = `conic-gradient(#0d6efd ${percentage}%, white 0)`;
  }
};
