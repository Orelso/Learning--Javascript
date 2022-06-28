let monkey = [20, 45, 46, 48, 496, 65, 32]

let divideMonkey = monkey => monkey / 2;

let dividedMonkey = monkey.map(divideMonkey);

console.log(dividedMonkey)