export const stopwatchTab = () => {
  const stopwatchTabDiv = document.createElement('div');
  stopwatchTabDiv.innerHTML = `
    <div
          id="stopwatch-display"
          class="text-center p-5 mb-2 d-flex flex-row justify-content-center"
        >
          <div class="p-3">
            <span id="stopwatch-HRS" class="fs-1">00</span>
            <span> HRS </span>
          </div>
          <div class="p-3">
            <span id="stopwatch-MIN" class="fs-1">00</span>
            <span class=""> MIN </span>
          </div>
          <div class="p-3">
            <span id="stopwatch-SEC" class="fs-1">00</span>
            <span> SEC </span>
          </div>
          <div class="p-3">
            <span id="stopwatch-MS" class="fs-1">000</span>
            <span> MS</span>
          </div>
        </div>

        <div
          id="stopwatch-button-panel"
          class="d-flex flex-row justify-content-center my-2 p-2"
        >
          <button 
            type="button" 
            class="btn btn-outline-primary" 
            id='stopwatch-start-button'>Start</button>

          <button
            type="button"
            class="btn btn-outline-primary"
            id='stopwatch-pause-button'
            style="display: none"            
          >
            Pause
          </button>

          <button 
            type="button" 
            class="btn btn-outline-primary"
            id="stopwatch-add-lap-button">Add Lap</button>
          <button 
            type="button" 
            class="btn btn-outline-primary"
            id="stopwatch-reset-button">Reset</button>
        </div>

        <div
          id="Laps-panel"
          class="d-flex flex-column justify-content-center my-5 p-5 text-center"
        >
          <h5 class="mb-3">Laps</h5>
          <p>To add a lap, press the "Add Lap" button.</p>
        </div>`;

  //TODO: fix the listener later
  //   document
  //     .getElementById('stopwatch-button-panel')
  //     .addEventListener('click', stopwatchHandler);
  return stopwatchTabDiv;
};
