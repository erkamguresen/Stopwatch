import { stopwatchTab } from '../components/pages/stopwatch-tab.js';
import { timerTab } from '../components/pages/timer-tab.js';
import { pomodoroTab } from '../components/pages/pomodoro-tab.js';

export const renderTimer = () => {
  console.log('rendering Timer');

  const timerEl = document.getElementById('timer-tab');
  const rootDiv = document.getElementById('root');

  if (!timerEl.classList.contains('active')) {
    removeActiveClass();

    emptyRootDiv();

    timerEl.classList.add('active');

    rootDiv.appendChild(timerTab());
  }
};

export const renderPomodoro = () => {
  console.log('rendering Pomodoro');

  const pomodoroEl = document.getElementById('pomodoro-tab');
  const rootDiv = document.getElementById('root');

  if (!pomodoroEl.classList.contains('active')) {
    removeActiveClass();

    emptyRootDiv();

    pomodoroEl.classList.add('active');

    rootDiv.appendChild(pomodoroTab());
  }
};

export const renderStopwatch = () => {
  const stopwatchEl = document.getElementById('stopwatch-tab');
  const rootDiv = document.getElementById('root');

  if (!stopwatchEl.classList.contains('active')) {
    removeActiveClass();

    stopwatchEl.classList.add('active');
  }

  emptyRootDiv();

  rootDiv.appendChild(stopwatchTab());
};

const removeActiveClass = () => {
  const navEl = document.getElementById('nav-tabs');

  for (let index = 0; index < navEl.children.length; index++) {
    const element = navEl.children[index];
    element.classList.remove('active');
  }
};

const emptyRootDiv = () => {
  const rootDiv = document.getElementById('root');

  while (rootDiv.lastElementChild) {
    rootDiv.removeChild(rootDiv.lastElementChild);
  }
};
