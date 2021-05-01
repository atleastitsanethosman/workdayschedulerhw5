// variables for DOM elements to append time blocks.
var eventList = $('.container');

// get today's date in appropriate format and append to timeblock.
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// variable to retrieve current hour
var currentHour = moment().format("H");
console.log(currentHour);

//code to make time blocks and append to the container contained in the HTML.
for ( var i=9; i < 18; i++){
    console.log(i);
    var timeBlock = $('<div>');
    // adds color formating for the rows based on where they are relative to current time.
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
        // checks to see if there is saved datat to populate in the time blocks.
        if (localStorage.getItem("plansData") === null ) {
            activityBlank.text('');
        } else {
            var hourMatch = i;
            var oldEvent = JSON.parse(window.localStorage.getItem('plansData'));
            hourMatch -= 9;
            activityBlank.text(oldEvent[hourMatch]);
        };
    timeBlock.append(activityBlank);
    var saveButton = $('<button>').addClass('saveBtn col-1 fas fa-save');
    timeBlock.append(saveButton);
    eventList.append(timeBlock);
}


// variable to hold event data when entered in main page as an array.
var plans = [];
// put event data in local storage when clicking save button.
$('.saveBtn').on('click', function() {
    $('.event').each(function(){
        plans.push(this.value);
    });
    localStorage.setItem("plansData", JSON.stringify(plans));
} )



