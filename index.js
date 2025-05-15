let result = (0.1 + 0.2).toFixed(2);
console.log(result);
// The result is 0.30, but it will be printed as 0.3


let a = "1";
let b = 2;
let x = a + b;
console.log(x);
// The result is 12


let flash = prompt('Введіть обсяг флеш-накопичувача в ГБ');
let files = console.log(flash * 820);
// The result is the number of files that can be stored on the flash drive


let sum = prompt('Введіть суму, грн')
let price = prompt('Введіть ціну шоколадки, грн')
prompt(sum / price)
// The result is the number of chocolate bars that can be bought with the given amount of money


let deposit = prompt('Введіть суму в гривнях')
let term = prompt('Введіть бажаний термін депозиту')
const annualRate = 5
console.log(deposit * term * annualRate)

2 && 0 && 3     // 0
2 || 0 || 3     // 2
2 && 0 || 3     // 3
