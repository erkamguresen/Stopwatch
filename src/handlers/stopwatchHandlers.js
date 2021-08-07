export const stopwatchHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  switch (event.target.id) {
    case 'stopwatch-start-button':
      console.log(event.target.id);
      break;

    case 'stopwatch-pause-button':
      console.log(event.target.id);
      break;

    case 'stopwatch-reset-button':
      console.log(event.target.id);
      break;

    case 'stopwatch-add-lap-button':
      console.log(event.target.id);
      break;

    default:
      console.log(event.target);
      break;
  }
};
