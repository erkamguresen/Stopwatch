import { state } from '../data.js';

export const renderLaps = () => {
  const lapsDisplay = document.getElementById('Laps-panel');

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

    lapsDisplay.appendChild(
      state.laps
        .map((lap) => {
          const liEl = document.createElement('li');
          liEl.innerText = `${lap.hours} : ${lap.minutes} : ${lap.seconds} : ${lap.milliseconds}`;
          return liEl;
        })
        .reduce((olEl, liEl) => {
          console.log(olEl, liEl);
          olEl.appendChild(liEl);
          return olEl;
        }, document.createElement('ol'))
    );
  }
};
