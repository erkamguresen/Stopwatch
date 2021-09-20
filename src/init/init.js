import { stopwatchTab } from '../components/pages/stopwatch-tab.js';
import { createAudioElement } from '../components/shared/audioElement.js';
import { navigationHandler } from '../handlers/navigationHandlers.js';

document
  .getElementById('nav-tabs')
  .addEventListener('click', navigationHandler);

document.getElementById('root').appendChild(stopwatchTab());

const timerAudio = [
  { src: '../../public/sound/Timer-Sound-Effect.ogg', type: 'audio/ogg' },
  { src: '../../public/sound/Timer-Sound-Effect.mp3', type: 'audio/mpeg' },
];

document
  .querySelector('footer')
  .appendChild(createAudioElement(timerAudio, 'timer-audio'));

const pomodoroAudio = [
  { src: '../../public/sound/pomodoro-alarm.ogg', type: 'audio/ogg' },
  { src: '../../public/sound/pomodoro-alarm.mp3', type: 'audio/mpeg' },
];

document
  .querySelector('footer')
  .appendChild(createAudioElement(pomodoroAudio, 'pomodoro-audio'));
