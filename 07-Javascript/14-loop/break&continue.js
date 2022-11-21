/*

The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.
*/

//Break statement 
let emty = "";
for (let i = 0; i < 10; i++){
    if (i == 3) {
        break;
    }
    emty += i + ", ";
}
console.log(`The number is ${emty}.For this reason this loop is break`);

//continue
//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.


let emty2 = "";
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    emty2 += i + ", ";
}
console.log(`The number is ${emty2}.For this reason this loop is break`);