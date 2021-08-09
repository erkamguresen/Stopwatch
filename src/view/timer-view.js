import { state } from '../data.js';

export const startTimer = () => {
  console.log(document.getElementById('timer-HRS'));

  console.log(
    'timer started ',
    state.timerSettings.hours,
    state.timerSettings.minutes,
    state.timerSettings.seconds
  );
};
export const pauseTimer = () => {
  console.log('timer paused');
};
export const resetTimer = () => {
  console.log('timer reseted');
};
