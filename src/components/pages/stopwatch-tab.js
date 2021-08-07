import { renderLaps } from '../../view/laps.js';
import { createButtonElement } from '../shared/buttonElement.js';
import { createDivElement } from '../shared/divElement.js';
import { stopwatchHandler } from '../../handlers/stopwatchHandlers.js';
import { stopwatchDisplayPanel } from '../layout/stopwatch-display-panel.js';

export const stopwatchTab = () => {
  const stopwatchTabDiv = document.createElement('div');
  stopwatchTabDiv.appendChild(stopwatchDisplayPanel());

  const buttonPanel = createDivElement(
    'd-flex flex-row justify-content-center my-2 p-2',
    'stopwatch-button-panel'
  );

  buttonPanel.appendChild(
    createButtonElement(
      'Start',
      'button',
      'btn btn-outline-primary',
      'stopwatch-start-button'
    )
  );

  const pauseButton = createButtonElement(
    'Pause',
    'button',
    'btn btn-outline-primary',
    'stopwatch-pause-button'
  );
  pauseButton.style.display = 'none';
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

  return stopwatchTabDiv;
};
