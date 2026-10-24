
const chalk = require('chalk');
const { celciusToFahrenheit } = require('./rumusSuhu');

const suhuCelsius = 30;
const hasil = celciusToFahrenheit(suhuCelsius);

console.log(chalk.cyan('=============================='));
console.log(chalk.bold.green('     PROGRAM KONVERSI SUHU'));
console.log(chalk.cyan('=============================='));
console.log(`Suhu Celsius    : ${suhuCelsius} °C`);
console.log(`Suhu Fahrenheit : ${hasil} °F`);
console.log(chalk.yellow('Konversi berhasil!'));
console.log(chalk.cyan('=============================='));
