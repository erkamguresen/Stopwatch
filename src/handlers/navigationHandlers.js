export const navigationHandler = (event) => {
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
