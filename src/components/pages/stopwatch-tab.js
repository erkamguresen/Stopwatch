import { renderLaps } from '../../view/laps.js';
import { createButtonElement } from '../shared/buttonElement.js';
import { createDivElement } from '../shared/divElement.js';
import { stopwatchHandler } from '../../handlers/stopwatchHandlers.js';
import { stopwatchDisplayPanel } from '../layout/stopwatch-display-panel.js';
import { state } from '../../data.js';

export const stopwatchTab = () => {
  const stopwatchTabDiv = document.createElement('div');
  const stopwatchDisplayEl = stopwatchDisplayPanel();
  stopwatchTabDiv.appendChild(stopwatchDisplayEl);

  const buttonPanel = createDivElement(
    'd-flex flex-row justify-content-center my-2 p-2',
    'stopwatch-button-panel'
  );

  const startButton = createButtonElement(
    'Start',
    'button',
    'btn btn-outline-primary',
    'stopwatch-start-button'
  );
  buttonPanel.appendChild(startButton);

  const pauseButton = createButtonElement(
    'Pause',
    'button',
    'btn btn-outline-primary',
    'stopwatch-pause-button'
  );
  buttonPanel.appendChild(pauseButton);

  buttonPanel.appendChild(
    createButtonElement(
      'Add Lap',
      'button',
      'btn btn-outline-primary',
      'stopwatch-add-lap-button'
    )
  );

  buttonPanel.appendChild(
    createButtonElement(
      'Reset',
      'button',
      'btn btn-outline-primary',
      'stopwatch-reset-button'
    )
  );

  stopwatchTabDiv.appendChild(buttonPanel);

  const lapPanel = createDivElement(
    'd-flex flex-column justify-content-center my-5 p-5 text-center',
    'Laps-panel'
  );

  stopwatchTabDiv.appendChild(lapPanel);

  renderLaps(lapPanel);

  stopwatchTabDiv.addEventListener('click', stopwatchHandler);

  if (state.isStopwatchRunning) {
    startButton.style.display = 'none';
    pauseButton.style.display = 'block';
  } else {
    startButton.style.display = 'block';
    pauseButton.style.display = 'none';
  }

  return stopwatchTabDiv;
};
