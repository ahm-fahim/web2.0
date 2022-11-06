/*
JavaScript BigInt variables are used to store big integer values that are too big to be represented by a a normal JavaScript Number.
*/
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345);

console.log(a);
console.log(b);
console.log(typeof b);

let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x * y;
console.log(z);

//bigInt decimal

//a bigInt can't have decimals

let c = 5n;
// let d = c / 2;
//console.log(d);// Error: Cannot mix BigInt and other types, use explicit conversion.

let e = Number(c) / 2;
console.log(e);

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(`hex ${hex} \noct ${oct} \nbin ${bin}`);

//precision curiosity

console.log(9007199254740992 === 9007199254740993);


console.log("Number.MAX_SAFE_INTEGER ", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER ", Number.MIN_SAFE_INTEGER);
