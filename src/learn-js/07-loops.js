for (var i = 0; i < 3; i++) {
    console.log(i);
}
// 1.Initialization - Initializes the iterator variable i. In this example, we initialize i to 0.
// 2.Condition - As long as the condition is met, the loop continues to execute. In this example, we check that i is less than 3.
// 3.Increment - A directive which increments the iterator. In our case, we increment it by 1 on every loop.
/*----------------------------------------------------------------------------------------------------*/

var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++) {
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}
// The member of myArray in index 0 is A
// The member of myArray in index 1 is B
// The member of myArray in index 2 is C
/*----------------------------------------------------------------------------------------------------*/

var i = 99;
while (true) {
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 0) {
        break;
    }
}
// The while statement is a more simple version of the for statement which checks if an expression evaluates to true and runs as long as it says true.
// The break statement allows to stop the execution of a loop. For example, we can create a loop that loops forever using while(true) and use the break statement to break inside the loop instead by checking that a certain condition was met.
/*----------------------------------------------------------------------------------------------------*/

for (var i = 0; i < 100; i++) {
    // check that the number is even
    if (i % 2 == 0) {
        continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}
// The continue statement skips the rest of the loop and jumps back to the beginning of the loop. For example, if we would want to print only odd numbers using a for statement, we can do the following:
