import { state } from '../data.js';

export const getFormattedTime = (date) => {
  const formattedTime = {
    milliseconds: date.getUTCMilliseconds().toString(),
    seconds: date.getUTCSeconds().toString(),
    minutes: date.getUTCMinutes().toString(),
    hours: date.getUTCHours().toString(),
  };

  while (formattedTime.milliseconds.length < 3) {
    formattedTime.milliseconds = '0' + formattedTime.milliseconds;
  }

  while (formattedTime.seconds.length < 2) {
    formattedTime.seconds = '0' + formattedTime.seconds;
  }

  while (formattedTime.minutes.length < 2) {
    formattedTime.minutes = '0' + formattedTime.minutes;
  }

  while (formattedTime.hours.length < 2) {
    formattedTime.hours = '0' + formattedTime.hours;
  }

  return formattedTime;
};

export const checkTimerSettings = () => {
  const hrsElement = document.getElementById('timer-HRS');
  const minElement = document.getElementById('timer-MIN');
  const secElement = document.getElementById('timer-SEC');

  const hrs = parseInt(hrsElement.innerText);
  if (Number.isInteger(hrs) && 0 < hrs && hrs < 100) {
    state.timerSettings.hours = hrs;
  } else {
    state.timerSettings.hours = 0;
  }

  const min = parseInt(minElement.innerText);
  if (Number.isInteger(min) && 0 < min && min < 60) {
    state.timerSettings.minutes = min;
  } else {
    state.timerSettings.minutes = 0;
  }

  const sec = parseInt(secElement.innerText);
  if (Number.isInteger(sec) && 0 < sec && sec < 60) {
    state.timerSettings.seconds = sec;
  } else {
    state.timerSettings.seconds = 0;
  }

  state.timerSettings.totalSeconds =
    state.timerSettings.seconds +
    60 * state.timerSettings.minutes +
    60 * 60 * state.timerSettings.hours;

  console.log(state.timerSettings);
};

export const getFormattedRemainingTimerTime = () => {
  const startDate = new Date(
    1000 *
      (state.timerSettings.hours * 3600 +
        state.timerSettings.minutes * 60 +
        state.timerSettings.seconds) -
      state.timerTotalPassedMilliseconds
  );

  const formattedTime = {
    hours: startDate.getUTCHours().toString(),
    minutes: startDate.getUTCMinutes().toString(),
    seconds: startDate.getUTCSeconds().toString(),
  };

  while (formattedTime.seconds.length < 2) {
    formattedTime.seconds = '0' + formattedTime.seconds;
  }

  while (formattedTime.minutes.length < 2) {
    formattedTime.minutes = '0' + formattedTime.minutes;
  }

  while (formattedTime.hours.length < 2) {
    formattedTime.hours = '0' + formattedTime.hours;
  }

  return formattedTime;
};
