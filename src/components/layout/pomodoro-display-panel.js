import { createDivElement } from "../shared/divElement.js";
import { createTimeDiv } from "../shared/timeDivElement.js";

export const pomodoroDisplayPanel = () => {
  const displayPanel = createDivElement(
    "text-center p-2 mb-2 d-flex flex-row justify-content-center",
    "pomodoro-display"
  );

  displayPanel.appendChild(createTimeDiv("pomodoro-HRS", "HRS", "00"));
  displayPanel.appendChild(createTimeDiv("pomodoro-MIN", "MIN", "00"));
  displayPanel.appendChild(createTimeDiv("pomodoro-SEC", "SEC", "00"));

  return displayPanel;
};
