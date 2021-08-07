import { stopwatchTab } from '../components/pages/stopwatch-tab.js';
import { navigationHandler } from '../handlers/navigationHandlers.js';
import { stopwatchHandler } from '../handlers/stopwatchHandlers.js';

document
  .getElementById('nav-tabs')
  .addEventListener('click', navigationHandler);

document.getElementById('root').appendChild(stopwatchTab());

document
  .getElementById('stopwatch-button-panel')
  .addEventListener('click', stopwatchHandler);
