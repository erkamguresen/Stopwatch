import { createDivElement } from "../shared/divElement.js";
import { createTimeDiv } from "../shared/timeDivElement.js";

export const pomodoroDisplayPanel = () => {
  const displayPanel = createDivElement(
    "text-center p-2 mb-2 d-flex flex-row justify-content-center",
    "stopwatch-display"
  );

  displayPanel.appendChild(createTimeDiv("stopwatch-HRS", "HRS", "00"));
  displayPanel.appendChild(createTimeDiv("stopwatch-MIN", "MIN", "00"));
  displayPanel.appendChild(createTimeDiv("stopwatch-SEC", "SEC", "00"));

  return displayPanel;
};
