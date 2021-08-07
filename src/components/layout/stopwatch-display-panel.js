import { createDivElement } from '../shared/divElement.js';

export const stopwatchDisplayPanel = () => {
  const displayPanel = createDivElement(
    'text-center p-5 mb-2 d-flex flex-row justify-content-center',
    'stopwatch-display'
  );

  displayPanel.appendChild(createTimeDiv('stopwatch-HRS', 'HRS', '00'));
  displayPanel.appendChild(createTimeDiv('stopwatch-MIN', 'MIN', '00'));
  displayPanel.appendChild(createTimeDiv('stopwatch-SEC', 'SEC', '00'));
  displayPanel.appendChild(createTimeDiv('stopwatch-MS', 'MS', '000'));

  return displayPanel;
};

const createTimeDiv = (id = '', abbreviation = '', defaultText = '') => {
  const divElement = createDivElement('p-3');

  const timeElement = document.createElement('span');
  timeElement.id = id;
  timeElement.className = 'fs-1';
  timeElement.innerText = defaultText;
  divElement.appendChild(timeElement);

  const abbreviationElement = document.createElement('span');
  abbreviationElement.innerText = abbreviation;
  divElement.appendChild(abbreviationElement);

  return divElement;
};
