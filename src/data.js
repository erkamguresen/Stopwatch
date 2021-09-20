export const state = {
  //stopwatch
  stopwatchStartTime: null,
  isStopwatchRunning: false,
  stopwatchTotalPassedTimeInMS: null, //updates when paused or reset
  laps: [], // in milliseconds from start

  // reset stopwatch
  resetStopWatch: function () {
    state.stopwatchStartTime = null;
    state.isStopwatchRunning = false;
    state.stopwatchTotalPassedTimeInMS = null;
    state.laps = [];
  },

  // timer
  timerStartTime: null,
  isTimerRunning: false,
  timerSettings: {
    hours: 0,
    minutes: 0,
    seconds: 10,
    getTotalSeconds: function () {
      return (
        state.timerSettings.hours * 60 * 60 +
        state.timerSettings.minutes * 60 +
        state.timerSettings.seconds
      );
    },

    getTotalMilliseconds: function () {
      return state.timerSettings.getTotalSeconds() * 1000;
    },
  },
  timerTotalPassedMilliseconds: 0,

  getTimerPercentage: function () {
    return (
      100 -
      (state.timerTotalPassedMilliseconds /
        state.timerSettings.getTotalMilliseconds()) *
        100
    );
  },

  //reset timer
  resetTimer: function () {
    state.timerStartTime = null;
    state.isTimerRunning = false;
    state.timerSettings.hours = 0;
    state.timerSettings.minutes = 10;
    state.timerSettings.seconds = 0;

    state.timerTotalPassedMilliseconds = 0;
    state.timerRingColor = { red: 13, green: 110, blue: 253 };
  },

  hasTimerSound: true,

  // pomodoro
  pomodoroStartTime: null,
  isPomodoroRunning: false,
  pomodoroSettings: {
    hours: 0,
    minutes: 25,
    seconds: 0,
    getTotalSeconds: function () {
      return (
        state.pomodoroSettings.hours * 60 * 60 +
        state.pomodoroSettings.minutes * 60 +
        state.pomodoroSettings.seconds
      );
    },

    getTotalMilliseconds: function () {
      return state.pomodoroSettings.getTotalSeconds() * 1000;
    },
  },
  pomodoroTotalPassedMilliseconds: 0,

  //reset pomodoro
  resetPomodoro: function () {
    state.pomodoroStartTime = null;
    state.isPomodoroRunning = false;
    state.pomodoroSettings.hours = 0;
    state.pomodoroSettings.minutes = 0;
    state.pomodoroSettings.seconds = 10;

    state.pomodoroTotalPassedMilliseconds = 0;
  },

  hasPomodoroSound: false,
};

export const fixedSettings = {
  timerColorBlue: { red: 13, green: 110, blue: 253 },
  timerColorRed: { red: 220, green: 53, blue: 69 },
};
