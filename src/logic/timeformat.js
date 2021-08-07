export const getFormattedTime = (date) => {
  const formattedTime = {
    milliseconds: date.getMilliseconds().toString(),
    seconds: date.getSeconds().toString(),
    minutes: date.getMinutes().toString(),
    hours: (date.getHours() - 1).toString(),
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
