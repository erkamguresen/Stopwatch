export const state = {
  //stopwatch
  stopwatchStartTime: null,
  isStopwatchRunning: false,
  totalPassedTime: null, //updates when paused or reset
  laps: [], // in milliseconds from start

  // reset
  resetStopWatch: function () {
    state.stopwatchStartTime = null;
    state.isStopwatchRunning = false;
    state.totalPassedTime = null;
    state.laps = [];
  },

  // timer
  isTimerRunning: false,
  timerSettings: {
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0,
  },
  timerTotalPassedSeconds: 0,
};
