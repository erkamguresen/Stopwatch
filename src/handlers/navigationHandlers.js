import {
  renderPomodoro,
  renderStopwatch,
  renderTimer,
} from '../init/routes.js';

export const navigationHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  switch (event.target.id) {
    case 'timer-tab':
      renderTimer();
      break;

    case 'pomodoro-tab':
      renderPomodoro();
      break;

    case 'stopwatch-tab':
    default:
      renderStopwatch();
      break;
  }
};
