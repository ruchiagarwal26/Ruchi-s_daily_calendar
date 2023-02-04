// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(document).ready(function(){
$(function () {
 
//dayjs for finding current hour
var currentHour = dayjs().hour();

//for logs and testing
console.log ("currentHour " , currentHour);

//Variable to save all time slots that will be displayed on webpage
var hourList = [];

//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours

function calendarDisplay () {

    //so that each hour id is rendered through
$('.time-block').each(function (){

    //If I had id prefixed with hour like hour9
    //parseInt($(this).attr("id").split("hour")[1]);
    var hourDisplay = parseInt($(this).attr("id"));
    
 // pushing all the hours to an array
    hourList.push(hourDisplay);

 // for logs and testing   
    console.log("hourDisplay", hourDisplay);
    console.log("hourList ", hourList);


//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//validating the currenthour with all displayed working hours
if (hourDisplay < currentHour){
    // if displayed hours are less than current hour select color code from css where class is past
                $(this).addClass('past');
                $(this).removeClass("future");
                $(this).removeClass("present");
    //cannot save text if current hour is passed
                $(this).children().last().prop("disabled",true);
            }
            else if (hourDisplay === currentHour) {
    // if displayed hours is equal to current hour select color code from css where class is present            
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
    //can save text if current hour is passed            
                $(this).children().last().prop("disabled",false);
            }
            else {
    // if displayed hours is greater than current hour select color code from css where class is future            
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
    //cannot save text if current hour is passed            
                $(this).children().last().prop("disabled",false);
            }
});

};

calendarDisplay ();

//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
$('.saveBtn').click(function(){

   console.log("this", this);
    //var id = $(this).data("id")
   var dayHr =  $(this).parent().attr("id"); 
   var inputText =  $(this).siblings(".description").val(); 

   console.log(dayHr, inputText);

   localStorage.setItem(dayHr, inputText);

});

//WHEN I refresh the page
//THEN the saved events persist

for (i in hourList){
    // i will be the index number in the list
    var hourFor = hourList[i];
    console.log("hourFor ", hourFor);
    // find respective id and then find the create the variable for getitem
    var hourTextArea =  $("#"+ hourFor).find( ".description").eq(0)
    console.log("hourTextArea ", hourTextArea);
    //hourTextArea.val("test")
    hourTextArea.val(localStorage.getItem(hourFor))

}

});