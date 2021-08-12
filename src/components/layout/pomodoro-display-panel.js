import { state } from '../../data.js';
import { getFormattedTime } from '../../logic/timeformat.js';
import { createDivElement } from '../shared/divElement.js';
import { createTimeDiv } from '../shared/timeDivElement.js';

export const pomodoroDisplayPanel = (
  date = Math.max(
    state.pomodoroSettings.getTotalMilliseconds() -
      state.pomodoroTotalPassedMilliseconds,
    0
  )
) => {
  const displayPanel = createDivElement(
    'text-center p-2 mb-2 d-flex flex-row justify-content-center',
    'pomodoro-display'
  );

  const formattedTime = getFormattedTime(new Date(date));

  displayPanel.appendChild(
    createTimeDiv('pomodoro-HRS', 'HRS', formattedTime.hours)
  );
  displayPanel.appendChild(
    createTimeDiv('pomodoro-MIN', 'MIN', formattedTime.minutes)
  );
  displayPanel.appendChild(
    createTimeDiv('pomodoro-SEC', 'SEC', formattedTime.seconds)
  );

  return displayPanel;
};
