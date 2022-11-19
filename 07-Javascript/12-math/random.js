console.log(Math.random());
//Math.random() always returns a number lower than 1.

//JavaScript Random Integers

//Math.random() used with Math.floor() can be used to return random integers.

console.log(Math.floor(Math.random() * 10)); 
console.log(Math.floor(Math.random() * 100)); console.log(Math.floor(Math.random() * 100) + 1); 


// a proper random function

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log("random function", getRndInteger(0, 5))