const inputArgs = process.argv.slice(2)

inputArgs.filter(time => !isNaN(time))
inputArgs.filter(time => time >= 0);

inputArgs.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});