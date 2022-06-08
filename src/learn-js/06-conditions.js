/*The if statement allows us to check if an expression is equal to true or false, and 
execute different code according to the result. */
/*----------------------------------------------------------------------------------------------------*/
/*To evaluate whether two variables are equal, the == operator is used. There is also another equality operator in JavaScript, ===, which does a strict 
comparison. This means that it will be true only if the two things you are comparing are the same type as well as same content. */

console.log("1" == 1); // true
console.log("5" == 5); // true
console.log("1" === 1); // false
console.log("10" === 10); //false
/*----------------------------------------------------------------------------------------------------*/

let myNumber = 50
if (myNumber == 50) {
    console.log("The number equals 50");
}
/*----------------------------------------------------------------------------------------------------*/

let foo = 1;
let bar = 2;

if (foo < bar) {
    console.log('foo is too small.')
}
/*----------------------------------------------------------------------------------------------------*/
/*Two or more expressions can be evaluated together using logical operators to check if two expressions evaluate to true together, or at least one of them. To 
check if two expressions both evaluate to true, use the AND operator &&. To check if at least one of the expressions evaluate to true, use the OR operator ||. */

let alpha = 1;
let beta = 2;
let gamma =3;

if (alpha < beta && gamma > beta) {
    console.log('beta is bigger than alpha AND gamma is bigger than beta')
}

if (alpha < beta || gamma > beta) {
    console.log('beta is bigger than alpha OR gamma is bigger than beta')
}

function checkNumber(myNumber) {
    if (myNumber === 42){
        console.log('correct')
    } else {
        console.log('incorrect')
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);
/*----------------------------------------------------------------------------------------------------*/
/*The switch statement is used to select between more than two different options, and to run the same code for more than one option. */

function multiple (val) {
    var answer = "";
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = 'low';
        break;
      case 4:
      case 5:
      case 6:
        answer = 'mid';
        break;
      case 7:
      case 8:
      case 9:
        answer = 'high';
        break;
    }
    return answer;
  }
  console.log(multiple(2)); // Will print low
  console.log(multiple(8)); // Will print High


  function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
      answer = "stuff";
        break;
  }
  return answer;
  }
  console.log(caseInSwitch("a")); // Will print apple
  console.log(caseInSwitch("b")); // Will print bird
  console.log(caseInSwitch(55)); // Will print stuff


  
