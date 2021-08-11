export const state = {
  //stopwatch
  timerStartTime: null,
  isStopwatchRunning: false,
  totalPassedTime: null, //updates when paused or reset
  laps: [], // in milliseconds from start

  // reset stopwatch
  resetStopWatch: function () {
    state.timerStartTime = null;
    state.isStopwatchRunning = false;
    state.totalPassedTime = null;
    state.laps = [];
  },

  // timer
  timerStartTime: null,
  isTimerRunning: false,
  timerSettings: {
    hours: 0,
    minutes: 10,
    seconds: 0,
    getTotalSeconds: function () {
      return (
        state.timerSettings.hours * 60 * 60 +
        state.timerSettings.minutes * 60 +
        state.timerSettings.seconds
      );
    },
  },
  timerTotalPassedMilliseconds: 0,

  //reset timer
  resetTimer: function () {
    state.timerStartTime = null;
    state.isTimerRunning = false;
    state.timerSettings.hours = 0;
    state.timerSettings.minutes = 10;
    state.timerSettings.seconds = 0;

    state.timerTotalPassedSeconds = 0;
  },
};
