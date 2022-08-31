const alarms = process.argv.slice(2);
alarms.forEach(time => {
  if (Number.isInteger(parseInt(time)) === true) {
    setTimeout(() => { console.log('beep') }, time * 1000)
  }
});