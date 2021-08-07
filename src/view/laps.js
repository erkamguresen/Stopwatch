import { createDivElement } from '../components/shared/divElement.js';
import { state } from '../data.js';

export const renderLaps = (
  lapsDisplay = document.getElementById('Laps-panel')
) => {
  while (lapsDisplay.lastElementChild) {
    lapsDisplay.removeChild(lapsDisplay.lastElementChild);
  }

  if (state.laps.length === 0) {
    lapsDisplay.innerHTML = `<h5 class="mb-3">Laps</h5>
    <p>To add a lap, press the "Add Lap" button.</p>`;
  } else {
    const titleEl = document.createElement('h5');
    titleEl.innerText = 'Laps';
    titleEl.className = 'mb-3';

    lapsDisplay.appendChild(titleEl);

    const listDiv = createDivElement('align-self-center');
    lapsDisplay.appendChild(listDiv);

    listDiv.appendChild(
      state.laps
        .map((lap) => {
          const liEl = document.createElement('li');
          liEl.innerHTML = `
            <span>
              ${lap.hours} : ${lap.minutes} : ${lap.seconds} : ${lap.milliseconds}
            </span>`;
          return liEl;
        })
        .reduce((olEl, liEl) => {
          olEl.appendChild(liEl);
          return olEl;
        }, document.createElement('ol'))
    );
  }
};
