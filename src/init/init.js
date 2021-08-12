import { stopwatchTab } from "../components/pages/stopwatch-tab.js";
import { createAudioElement } from "../components/shared/audioElement.js";
import { navigationHandler } from "../handlers/navigationHandlers.js";

document
  .getElementById("nav-tabs")
  .addEventListener("click", navigationHandler);

document.getElementById("root").appendChild(stopwatchTab());

const audio = [
  { src: "../../../public/sound/Timer-Sound-Effect.ogg", type: "audio/ogg" },
  { src: "../../../public/sound/Timer-Sound-Effect.mp3", type: "audio/mpeg" },
];

document
  .querySelector("footer")
  .appendChild(createAudioElement(audio, "timer-audio"));
