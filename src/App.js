let numbers = [3, 5, 8, 9, 2];

const multiplyByTwo = number => number * 2;

let multipliedNumbers = numbers.map(multiplyByTwo);

console.log(multipliedNumbers); // prints out: 6, 10, 16, 18, 4
/*----------------------------------------------------------------------------------------------------*/

let monkey = [20, 45, 46, 48, 496, 65, 32]

let divideMonkey = monkey => monkey / 2;

let dividedMonkey = monkey.map(divideMonkey);

console.log(dividedMonkey); //prints: 10, 22.5, 23, 24, 248, 32.5, 16