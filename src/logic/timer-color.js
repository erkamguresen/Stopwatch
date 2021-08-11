import { state, fixedSettings } from "../data.js";

export const getTimerRingColor = () => {
  return {
    red: getColorRatio("red"),
    green: getColorRatio("green"),
    blue: getColorRatio("blue"),
  };
};

const getColorRatio = (color) => {
  const startColor = fixedSettings.timerColorBlue[color];
  const endColor = fixedSettings.timerColorRed[color];
  let percentage = state.getTimerPercentage();

  if (percentage < 50) {
    percentage -= 20;
  }

  return Math.round(
    (percentage * startColor + (100 - percentage) * endColor) / 100
  );
};
