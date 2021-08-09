import { checkTimerSettings } from '../logic/timeformat.js';
import { pauseTimer, resetTimer, startTimer } from '../view/timer-view.js';

export const timerButtonHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  switch (event.target.id) {
    case 'timer-start-button':
      startTimer();
      break;

    case 'timer-pause-button':
      pauseTimer();
      break;

    case 'timer-reset-button':
      resetTimer();
      break;

    default:
      break;
  }
};

export const timerEditHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  switch (event.type) {
    case 'dblclick':
      if (event.target.tagName === 'CODE') {
        event.target.setAttribute('contentEditable', true);
        console.log('edit enabled');
      }

      break;

    case 'focusout':
      if (event.target.tagName === 'CODE') {
        event.target.setAttribute('contentEditable', true);

        //  check the edited thing
        checkTimerSettings();
        //TODO reRenderTimerPanel();
        console.log('edit disabled');
      }

      break;

    default:
      break;
  }
};
