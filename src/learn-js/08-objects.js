/*JavaScript is a functional language, and for object oriented programming it uses both objects 
and functions, but objects are usually used as a data structure, similar to a dictionary in Python or a map in Java. */

let personObject = {
    firstName: "John",
    lastName: "Marc"
}

personObject.age = 42;
personObject["salary"] = 1000;

for (let member in personObject) {
    if (personObject.hasOwnProperty(member)) {
        console.log('The memeber' + member + "of personObject is" + personObject[member])
    }
}
/*----------------------------------------------------------------------------------------------------*/
let pokemon = {
    name: 'Charizard',
    name1: 'Mew',
    name2: 'Muk',
    name3: 'Sandshrew'
}

for (let mon in pokemon) {
    if (pokemon.hasOwnProperty(mon)) {
        console.log("Do you like " + pokemon[mon] + "? ")
    }
}