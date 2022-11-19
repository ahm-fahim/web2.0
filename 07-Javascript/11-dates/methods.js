/*
Date Get Methods

Method	                Description
getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()	    Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970)
*/

const date = new Date("2021-03-25");
console.log(date.getFullYear());
const currentyear = new Date();
console.log("Current Year", currentyear.getFullYear());
console.log("Month", date.getMonth());
console.log("current Month", currentyear.getMonth() + 1);

// month name list
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let month = months[date.getMonth()];
console.log("2021-03-25", month);

let currentMonth = months[currentyear.getMonth()];
console.log(currentMonth);

// getDate

console.log(date.getDate());

//getHours()

console.log(currentyear.getHours());
console.log(currentyear.getMinutes());
console.log(currentyear.getSeconds());
console.log(currentyear.getMilliseconds());
console.log(currentyear.getTime());

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

console.log("Today", days[currentyear.getDay()]);

//Date.now();

console.log("Date.now = ", Date.now());

// Calculate the number of years since 1970/01/01
console.log("Calculate the number of years since 1970/01/01");

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log(years);

/*
UTC Date Get Methods

Method	                Same As	            Description

getUTCDate()	        getDate()	        Returns the UTC date
getUTCFullYear()	    getFullYear()	    Returns the UTC year
getUTCMonth()	        getMonth()	        Returns the UTC month
getUTCDay()	            getDay()	        Returns the UTC day
getUTCHours()	        getHours()	        Returns the UTC hour
getUTCMinutes()	        getMinutes()	    Returns the UTC minutes
getUTCSeconds()	        getSeconds()	    Returns the UTC seconds
getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds
*/

//The getTimezoneOffset() Method

console.log("The getTimezoneOffset() Method", date.getTimezoneOffset());