/*
Set Date Methods
Set Date methods are used for setting a part of a date:

Method	            Description
setDate()	        Set the day as a number (1-31)
setFullYear()	    Set the year (optionally month and day)
setHours()	        Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	    Set the minutes (0-59)
setMonth()	        Set the month (0-11)
setSeconds()	    Set the seconds (0-59)
setTime()	        Set the time (milliseconds since January 1, 1970)
*/

//setFullYear()

const d = new Date();
d.setFullYear(2012);
console.log(d);
d.setFullYear(2012, 12, 12);
console.log(d);

//setMonth

d.setMonth(9);
console.log(d);

// setDate()

d.setDate(14);
console.log(d);

//setHours

d.setHours(23);
console.log(d);
//minutes
d.setMinutes(23);
console.log(d);
//seconds
d.setSeconds(23);
console.log(d);

//compare dates

let emty = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    emty = "Today is before January 14, 2100";
} else {
    emty = "Today is after January 14, 2100";
}
console.log(emty);
