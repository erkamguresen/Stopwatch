import { navigationHandler } from './handlers/navigationHandlers.js';
import { stopwatchHandler } from './handlers/stopwatchHandlers.js';

document
  .getElementById('nav-tabs')
  .addEventListener('click', navigationHandler);

document
  .getElementById('stopwatch-button-panel')
  .addEventListener('click', stopwatchHandler);
