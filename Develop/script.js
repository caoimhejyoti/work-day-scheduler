// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// global vars
var timeDisplayEl = $('#currentDay');
var currentHour = dayjs().hour();
console.log(currentHour);
let calendarArray = JSON.parse(localStorage.getItem("calendarArray")) || [];
let eventHour= $(this).attr("id");
// let eventText = $(this).

$(function () {

// COMPELTE! Function to save calendar event to local storage
  $(".saveBtn").on('click', function (e) {
    e.preventDefault();
    var time = $(this).parent().attr('id');
    var event = $(this).siblings(".description").val();
    // console.log(time);
    // console.log(event);

    var calendarEvent = {
      time: time,
      event: event,
    };
    console.log(calendarEvent);

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


// Task 3
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  


  // FIXME: Change date format to include ordinal.function to display current date in the header of the page.
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
  
});

// Task 1
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


// Task 2
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?




// Task 4
  //  Add code to display the current date in the header of the page.

// possible development
  // clearBtn.addEventListener('click', function(e){
  //   e.preventDefault();
  //   localStorage.clear();
  //   window.location.reload();
