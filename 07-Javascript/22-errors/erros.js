/* 
Throw, and Try...Catch...Finally
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.


*/

try {
    adddlert("welcome!");
} catch (err) {
    console.log(err.message);
}

//throw

function throwFunc(value) {
    try {
        if (value == " ") throw "emty";
        if (isNaN(value)) throw "not a number";
        value = Number(value);
        if (value < 5) throw "too low";
        if (value > 5) throw "too high";
    } catch (err) {
        console.log(`Input is ${err}`);
    }
}

throwFunc(" ");

//finally

function finallyFunc(value) {
    try {
        if (value == " ") throw "Is emty";
        if (isNaN(value)) throw "Is not a number";
        value = Number(value);
        if (value < 5) throw "Is too Loww";
        if (value > 10) throw "Is too High";
    } catch (err) {
        console.log(err);
    } finally {
        console.log(value);
    }
}

finallyFunc(4);

// range error
let num = 1;

try {
    num.toPrecision(500);
} catch (error) {
    console.log(error.name);
}

// referance error

let x = 5;
try {
    x = y + 1; // y cannot be used (referenced)
} catch (err) {
    console.log(err.name);
}

//syntax error

try {
    eval("alert('Hello)"); // Missing ' will produce an error
} catch (err) {
    console.log(err.name);
}

//type error

let n = 1;
try {
    n.toUpperCase(); // You cannot convert a number to upper case
} catch (err) {
    console.log(err.name);
}

// URI (Uniform Resource Identifier) Error
// A URIError is thrown if you use illegal characters in a URI function:

// Example
try {
    decodeURI("%%%"); // You cannot URI decode percent signs
} catch (err) {
    console.log(err.name);
}
