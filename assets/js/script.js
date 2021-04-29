// variables for DOM elements.


// get today's date in appropriate format and append to timeblock.
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// variable to retrieve current hour
var currentHour = moment().format("H");
console.log(currentHour);

var plans = [];
var plans = JSON.parse(window.localStorage.getItem("planData")) || []

//make time blocks