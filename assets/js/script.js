// variables for DOM elements to append time blocks.
var eventList = $('.container');

// get today's date in appropriate format and append to timeblock.
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// variable to retrieve current hour
var currentHour = moment().format("H");
console.log(currentHour);

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
            // code to make hours display as 12hr clock instead of 24 hr clock
            var regTime = i;
            regTime -= 12;
            hourLabel.text(regTime + "PM")
        };
        timeBlock.append(hourLabel);
        var activityBlank = $('<textarea>').addClass('event col-10');
        timeBlock.append(activityBlank);
        var saveButton = $('<button>').addClass('saveBtn col-1 fas fa-save');
        timeBlock.append(saveButton);
        eventList.append(timeBlock);
    }
};


// put event data in local storage when clicking save button.
var plans = [];
// put event data in local storage when clicking save button.
$('.saveBtn').on('click', function() {
    console.log("save");
    $('.event').each(function(){
        console.log(this.value)
        plans.push(this.value);
    });
    console.log(plans)
} )


// var plans = JSON.parse(window.localStorage.getItem("planData")) || []


