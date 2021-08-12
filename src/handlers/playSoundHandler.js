import { state } from "../data.js";

export const togglePlaySoundHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const hasTimerSound = event.target.checked;

  state.hasTimerSound = hasTimerSound;
};
