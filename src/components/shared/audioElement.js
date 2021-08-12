export const createAudioElement = (sources = [], id = "audio") => {
  const audioElement = document.createElement("audio");
  audioElement.id = id;

  for (let index = 0; index < sources.length; index++) {
    const source = sources[index];
    audioElement.appendChild(createSource(source));
  }

  audioElement.appendChild(
    document.createTextNode("Your browser does not support the audio element.")
  );

  return audioElement;
};

const createSource = (source) => {
  const sourceElement = document.createElement("source");
  sourceElement.src = source.src;
  sourceElement.type = source.type;

  return sourceElement;
};
