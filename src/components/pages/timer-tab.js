import {
  timerButtonHandler,
  timerEditHandler,
} from "../../handlers/timerHandlers.js";
import { timerDisplayPanel } from "../layout/timer-display-panel.js";
import { createButtonElement } from "../shared/buttonElement.js";
import { createDivElement } from "../shared/divElement.js";
import { state } from "../../data.js";
import { createToggleButton } from "../shared/toggleButtonElement.js";
import { togglePlaySoundHandler } from "../../handlers/playSoundHandler.js";

export const timerTab = () => {
  const timerTabDiv = document.createElement("div");
  timerTabDiv.className = "mb-2 text-center";

  const timerDisplayEl = timerDisplayPanel();
  timerDisplayEl.addEventListener("dblclick", timerEditHandler);
  timerDisplayEl.addEventListener("click", timerEditHandler);
  timerDisplayEl.addEventListener("focusout", timerEditHandler);
  timerTabDiv.appendChild(timerDisplayEl);

  const buttonPanel = createDivElement(
    "d-flex flex-row justify-content-center my-2 p-2",
    "timer-button-panel"
  );

  const startButton = createButtonElement(
    "Start",
    "button",
    "btn btn-outline-primary",
    "timer-start-button"
  );
  buttonPanel.appendChild(startButton);

  const pauseButton = createButtonElement(
    "Pause",
    "button",
    "btn btn-outline-primary",
    "timer-pause-button"
  );
  buttonPanel.appendChild(pauseButton);

  buttonPanel.appendChild(
    createButtonElement(
      "Reset",
      "button",
      "btn btn-outline-primary",
      "timer-reset-button"
    )
  );

  if (state.isTimerRunning) {
    startButton.style.display = "none";
    pauseButton.style.display = "block";
  } else {
    startButton.style.display = "block";
    pauseButton.style.display = "none";
  }

  buttonPanel.addEventListener("click", timerButtonHandler);

  timerTabDiv.appendChild(buttonPanel);

  const soundButton = createToggleButton();
  soundButton.addEventListener("change", togglePlaySoundHandler);
  timerTabDiv.appendChild(soundButton);

  return timerTabDiv;
};
