import { createDivElement } from '../shared/divElement.js';

export const createTimeDiv = (id = '', abbreviation = '', defaultText = '') => {
  const divElement = createDivElement('p-3');

  const timeElement = document.createElement('code');
  timeElement.id = id;
  timeElement.className = 'stopwatchDisplay fs-1 text-dark';
  timeElement.innerText = defaultText;
  divElement.appendChild(timeElement);

  const abbreviationElement = document.createElement('span');
  abbreviationElement.innerText = abbreviation;
  divElement.appendChild(abbreviationElement);

  return divElement;
};
