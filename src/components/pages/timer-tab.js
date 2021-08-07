import { timerDisplayPanel } from '../layout/timer-display-panel.js';
import { createButtonElement } from '../shared/buttonElement.js';
import { createDivElement } from '../shared/divElement.js';

export const timerTab = () => {
  const timerTabDiv = document.createElement('div');
  timerTabDiv.className = 'my-3 text-center';

  const timerDisplayEl = timerDisplayPanel();
  timerTabDiv.appendChild(timerDisplayEl);

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
      'Reset',
      'button',
      'btn btn-outline-primary',
      'stopwatch-reset-button'
    )
  );

  timerTabDiv.appendChild(buttonPanel);
  // timerTabDiv.innerText = 'Timer is not yet implemented';

  return timerTabDiv;
};
