// global vars
var timeDisplayEl = $('#currentDay');
var currentHour = dayjs().hour();
console.log(currentHour);
let calendarArray = JSON.parse(localStorage.getItem("calendarArray")) || [];
let eventHour= $(this).attr("id");

// MASTER FUNCTION: all other functions within this function to allow for the HTTP page to fully load before any js is triggered.
$(function () {

// COMPELTE! Function to save calendar event to local storage
  $(".saveBtn").on('click', function (e) {
    var time = $(this).parent().attr('id');
    var event = $(this).siblings(".description").val();
    e.preventDefault();

    // creates array of the users current event
    var calendarEvent = {
      time: time,
      event: event,
    };
    // console.log(calendarEvent); //used to test

    // adds the event to the globally stored array
    calendarArray.push(calendarEvent);
    localStorage.setItem("calendarArray", JSON.stringify(calendarArray));

  });

// COMPLETE! function for colourizing hours
  $(".time-block").each(function () {
    // create varible for hours within HTML element
    let hourBlock= parseInt( $(this).attr("id").split("hour-")[1]);
    // console.log(hourBlock);

    // comparing html hours to current hour and changing colour accordingly.
    if (hourBlock < currentHour) {
      $(this).addClass('past');
    }else if (hourBlock === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    }else {
      $(this).addClass('future');
      $(this).removeClass('past');
      $(this).removeClass('present');
    };
  });

// COMPLETE! Function for displaying information from the local storage. 
  $(".time-block").each(function () {
    // create varible for hours within HTML element
    let timeBlock= $(this).attr("id");
    // console.log(timeBlock); // used to test
    // console.log(calendarArray); // used to test

    // create variable for hours within stored data
    let localTime = JSON.parse(localStorage.getItem("calendarArray"));
        // console.log(localTime[0].time);// used to test

    //loop to idenitify if any objects within the array contain event data. 
    for (let i=0; i<calendarArray.length; i++){
      // if function to be called when event data is present.
      if (timeBlock==(localTime[i].time)) {
        // console.log(localTime[i].event); // used to test

        var message = localTime[i].event;
        // console.log(timeBlock.children[1]); // used to test

        // targeting specific child to input event message. 
        ($("#"+timeBlock).children(".description").text(message)); 

        console.log("working"); //used to cpnfirm this function is operational
      }
    };
  });

// FIXME: Change date format to include ordinal.function to display current date in the header of the page.
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
  
});

// possible development
  // clearBtn.addEventListener('click', function(e){
  //   e.preventDefault();
  //   localStorage.clear();
  //   window.location.reload();
