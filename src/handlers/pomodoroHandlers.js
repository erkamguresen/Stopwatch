import {
  pausePomodoro,
  resetPomodoro,
  startPomodoro,
} from "../view/pomodoro-view.js";

export const pomodoroButtonHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  switch (event.target.id) {
    case "pomodoro-start-button":
      startPomodoro();
      break;

    case "pomodoro-pause-button":
      pausePomodoro();
      break;

    case "pomodoro-reset-button":
      resetPomodoro();
      break;

    default:
      break;
  }
};
