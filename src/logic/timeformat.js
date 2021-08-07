export const getFormattedTime = (date) => {
  const formattedTime = {
    milliseconds: date.getUTCMilliseconds().toString(),
    seconds: date.getUTCSeconds().toString(),
    minutes: date.getUTCMinutes().toString(),
    hours: date.getUTCHours().toString(),
  };

  while (formattedTime.milliseconds.length < 3) {
    formattedTime.milliseconds = '0' + formattedTime.milliseconds;
  }

  while (formattedTime.seconds.length < 2) {
    formattedTime.seconds = '0' + formattedTime.seconds;
  }

  while (formattedTime.minutes.length < 2) {
    formattedTime.minutes = '0' + formattedTime.minutes;
  }

  while (formattedTime.hours.length < 2) {
    formattedTime.hours = '0' + formattedTime.hours;
  }

  return formattedTime;
};
