/*
The JavaScript Switch Statement
Use the switch statement to select one of many code blocks to be executed.

Syntax
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/
let day = "";
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thusday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(day);

/*
The break Keyword
When JavaScript reaches a break keyword, it breaks out of the switch block.

This will stop the execution inside the switch block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
*/

// THE default Keyword

let discriptDay = "";
switch (new Date().getDay()) {
    case 6:
        discriptDay = "Today is Saturday";
        break;
    default:
        discriptDay = "Looking forward to the Weekend";
}
console.log(discriptDay);

//Common code blocks

let text = "";
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text);

//strict comparison

let x = "0";
let value = "";
switch (x) {
    case 0:
        value = "Off";
        break;

    case 1:
        value = "On";
        break;

    default:
        value = "No Value Found!";
        break;
}
console.log(value);
