// variables for DOM elements.
var eventList = $('.container');

// get today's date in appropriate format and append to timeblock.
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// variable to retrieve current hour
var currentHour = moment().format("H");
console.log(currentHour);


var plans = [];

//make time blocks
// confirm if appointment data exists in local storage or not and populate time blocks.
if ( localStorage.getItem("planData") === null ) {
    console.log("no data ian")
    for ( var i=9; i < 18; i++){
        console.log(i);
        var timeBlock = $('<div>');
        timeBlock.addClass("row time-block");
            if ( i < currentHour ) {
                timeBlock.addClass('past');
            } else if ( i == currentHour ) {
                timeBlock.addClass('present');
            } else {
                timeBlock.addClass('future')
            }
        var hourLabel = $('<div>');
        hourLabel.addClass('hour col-1');
        if (i < 12 ) {
            hourLabel.text(i + "AM")
        } else if (i == 12) {
            hourLabel.text(i + "PM")
        } else {
            var regTime = i;
            regTime -= 12;
            hourLabel.text(regTime + "PM")
        };
        timeBlock.append(hourLabel);
        var activityBlank = $('<textarea>').addClass('col-10');
        timeBlock.append(activityBlank);
        var saveButton = $('<button>').addClass('saveBtn col-1 fas fa-save');
        timeBlock.append(saveButton);
        eventList.append(timeBlock);
    }
 
}
// var plans = JSON.parse(window.localStorage.getItem("planData")) || []


