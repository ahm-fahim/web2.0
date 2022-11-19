/*

Comparison Operators
Comparison operators are used in logical statements to determine equality or difference between variables or values.

Given that x = 5, the table below explains the comparison operators:

Operator	    Description	                    Comparing	Returns	
_______________________________________________________________________________
==	            equal to	                    x == 8	    false	
                                                x == 5	    true	
                                                x == "5"	true
______________________________________________________________________________
===	            equal value and equal type	    x === 5	    true	
                                                x === "5"	false	
______________________________________________________________________________
!=	            not equal	                    x != 8	    true	
______________________________________________________________________________
!==	            not equal value or not 
                equal type	                    x !== 5	    false	
                                                x !== "5"	true	
                                                x !== 8	    true	
______________________________________________________________________________
>	            greater than	                x > 8	    false	
______________________________________________________________________________
<	            less than	                    x < 8	    true
______________________________________________________________________________
>=	            greater than or equal to	    x >= 8	    false	
______________________________________________________________________________
<=	            less than or equal to	        x <= 8	    true
______________________________________________________________________________
*/

/*
Logical Operators
Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	Description	            Example	
&&	        and	                (x < 10 && y > 1) is true	
||	        or	                (x == 5 || y == 5) is false	
!	        not	                !(x == y) is true	

*/

/*
Conditional (Ternary) Operator
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax
variablename = (condition) ? value1:value2 
*/

// The Nullish Coalescing Opearator(??)

// let name = null;
// let text = "missing";
// let result = name ?? text;

// console.log(result);

const car = { type: "Fiat", model: "500", color: "white" };
let carName = car?.carName;
console.log(carName);
