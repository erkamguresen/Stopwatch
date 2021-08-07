import {
  startStopWatch,
  pauseStopWatch,
  resetStopWatch,
  addLapStopWatch,
} from '../view/stopwatch.js';

export const stopwatchHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  switch (event.target.id) {
    case 'stopwatch-start-button':
      startStopWatch();
      break;

    case 'stopwatch-pause-button':
      pauseStopWatch();
      break;

    case 'stopwatch-reset-button':
      resetStopWatch();
      break;

    case 'stopwatch-add-lap-button':
      addLapStopWatch();
      break;

    default:
      break;
  }
};
