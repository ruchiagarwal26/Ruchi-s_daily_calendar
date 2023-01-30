// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(document).ready(function(){
$(function () {
 
//dayjs for finding current hour
var currentHour = dayjs().hour();

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
    console.log("hourDisplay", hourDisplay);
    console.log("hourList ", hourList);


//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

if (hourDisplay < currentHour){
                $(this).addClass('past');
                $(this).removeClass("future");
                $(this).removeClass("present");
                //cannot save text if current hour is passed
                $(this).children().last().prop("disabled",true);
            }
            else if (hourDisplay === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).children().last().prop("disabled",false);
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
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
    var hourFor = hourList[i];
    $("#hourFor .description").val(localStorage.getItem("hourFor"))

    // validate if getItem is working as desired
    if( $("#hourFor .description").val(localStorage.getItem("hourFor")) === null){
            console.log("not working");
         } else {
            console.log("its working " , hourFor);
         }
}

});