import { getFormattedRemainingTimerTime } from '../../logic/timeformat.js';
import { createCodeElement } from '../shared/codeElement.js';
import { createDivElement } from '../shared/divElement.js';
import { createSpanElement } from '../shared/spanElement.js';

export const timerDisplayPanel = () => {
  const displayPanel = createDivElement(
    'text-center p-2 mb-2 d-flex flex-row justify-content-center',
    'timer-display'
  );

  const countDownChart = createDivElement('chart', 'timer-chart');

  const countDownCircle = createDivElement(
    'circle d-flex flex-column justify-content-center'
  );
  countDownChart.appendChild(countDownCircle);

  const timerClock = createTimerClock();

  const timerText = createDivElement(
    'justify-content-center align-self-center',
    'timer-text'
  );
  timerText.innerHTML = `<span class='timerAbbs fs-5'>HRS : MIN : SEC</span>`;

  countDownCircle.appendChild(timerClock);
  countDownCircle.appendChild(timerText);

  displayPanel.appendChild(countDownChart);

  return displayPanel;
};

const createTimerClock = () => {
  const timerClock = createDivElement(
    'justify-content-center align-self-center',
    'timer-clock'
  );

  const formattedTimer = getFormattedRemainingTimerTime();

  timerClock.appendChild(
    createCodeElement(
      'timerDisplay fs-1 text-dark',
      'timer-HRS',
      formattedTimer.hours
    )
  );

  timerClock.appendChild(createSpanElement('fs-1', '', ` : `));

  timerClock.appendChild(
    createCodeElement(
      'timerDisplay fs-1 text-dark',
      'timer-MIN',
      formattedTimer.minutes
    )
  );

  timerClock.appendChild(createSpanElement('fs-1', '', ` : `));

  timerClock.appendChild(
    createCodeElement(
      'timerDisplay fs-1 text-dark',
      'timer-SEC',
      formattedTimer.seconds
    )
  );

  return timerClock;
};
