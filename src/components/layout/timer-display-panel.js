import { createDivElement } from '../shared/divElement.js';
import { createTimeDiv } from '../shared/timeDivElement.js';

export const timerDisplayPanel = () => {
  const displayPanel = createDivElement(
    'text-center p-5 mb-2 d-flex flex-row justify-content-center',
    'timer-display'
  );

  const countDownChart = createDivElement('chart');

  const countDownCircle = createDivElement(
    'circle d-flex flex-column justify-content-center'
  );
  countDownChart.appendChild(countDownCircle);

  const timerClock = createDivElement(
    'justify-content-center align-self-center',
    'timer-clock'
  );

  timerClock.innerHTML = `<code 
  id='timer-HRS'
  class= 'stopwatchDisplay fs-1 text-dark'>00</code>
  <span class='fs-3'> : </span><code 
  id='timer-MIN'
  
  class= 'stopwatchDisplay fs-1 text-dark'>00</code><span class='fs-3'> : </span><code 
  id='timer-SEC' 
  class= 'stopwatchDisplay fs-1 text-dark'>00</code>`;

  const timerText = createDivElement(
    'justify-content-center align-self-center',
    'timer-text'
  );
  timerText.innerHTML = `<span class='fs-3'>HRS : MIN : SEC</span>`;

  countDownCircle.appendChild(timerClock);
  countDownCircle.appendChild(timerText);

  // countDownCircle.appendChild(createTimeDiv('stopwatch-HRS', 'HRS', '00'));
  // countDownCircle.appendChild(createTimeDiv('stopwatch-MIN', 'MIN', '00'));
  // countDownCircle.appendChild(createTimeDiv('stopwatch-SEC', 'SEC', '00'));

  displayPanel.appendChild(countDownChart);

  return displayPanel;
};
