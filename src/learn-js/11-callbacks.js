//This code waits 5 seconds and prints out "Done!" when the 5 seconds are up.

var callback = function () {
    console.log("Done!");
}

setTimeout(callback, 5000);

let zoneOut = function () {
    console.log('Finished')
}

setTimeout(zoneOut, 10000)
/*----------------------------------------------------------------------------------------------------*/

//It is also possible to define callbacks as anonymous functions, like so:

setTimeout(function () {
    console.log("Done!");
}, 5000);

setTimeout(function () {
    console.log('Valmis');
}, 10000)