// The const keyword was introduced in ES6(2015)
//Variables defined with const cannot be Redeclared.

//Variables defined with const cannot be Reassigned.

//Variables defined with const have Block Scope.
var x = 2; // Allowed
const x = 2; // Not allowed

{
    let x = 2; // Allowed
    const x = 2; // Not allowed
}

{
    const x = 2; // Allowed
    const x = 2; // Not allowed
}

//=====================
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
