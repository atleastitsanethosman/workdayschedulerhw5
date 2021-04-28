// variables for DOM elements.


// get today's date in appropriate format and append to timeblock.
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
