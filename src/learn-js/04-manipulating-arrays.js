// The push and pop methods insert and remove variables from the end of an array.

/*The unshift and shift methods are similar to push and pop, only they work from the beginning of the array. 
We can use the push and shift methods consecutively to utilize an array as a queue. */

/*---------------------------------------------------------------------------------------------------- */

var myStack = []; // Empty array.
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); // Will remove the last number (3) and console it - the result from myStack.pop().
console.log(myStack); // Will console only (1) & (2) - what myStack contains now.


let myAnimal = ["cat", "dog", "monkey"]
myAnimal.push("elephant");
myAnimal.push("deer")
console.log(myAnimal); // Will print ['cat', 'dog', 'monkey', 'elephant', 'deer']
console.log(myAnimal); // Will print ['cat', 'dog', 'monkey', 'elephant']

/*---------------------------------------------------------------------------------------------------- */

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift()); // Removes 1.
console.log(myQueue.shift()); // Removes 2.
console.log(myQueue.shift()); // Removes 3.
console.log(myQueue) // Consoles out [] because everything was removed.

let myList = [];
myList.push(100)
myList.push(1000)
myList.push(10000)

console.log(myList.shift()); // Removes 100
console.log(myList.shift()); // Removes 1000
console.log(myList) // Consoles 10000

/*----------------------------------------------------------------------------------------------------*/

var myArray = [1,2,3];
myArray.unshift(0); // Will add 0 to the beginning of the array.
console.log(myArray);  

let myNumber = [20, 30, 40];
myNumber.unshift(10); // Wil ladd 10 to the beginning of the array
console.log(myNumber)

/*----------------------------------------------------------------------------------------------------*/
// Splicing arrays in JavaScript removes a certain part from an array to create a new array, made up from the part we took out.

var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5); // First number is the array number [0] second number is how many numbers move to the new array.

console.log(splice); // will print out 3,4,5,6,7
console.log(myArray); // will print out 0,1,2,8,9

let doubleMa = [10,20,30,40,50,60,70,80,90,100];
let splice = doubleMa.splice(5,4);

console.log(splice); // Will print [60, 70, 80, 90]
console.log(doubleMa); // Will print [10, 20, 30, 40, 50, 100]