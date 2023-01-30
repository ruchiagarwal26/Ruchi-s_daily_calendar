// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(document).ready(function(){


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//})

 
var currentHour = dayjs().hour();
var html = document.getElementById("createRows").innerHTML;
//console.log("checking" + html.attr("class","all"));
var timeHr = document.getElementById("time");
//timeHr.innerHTML = start;
console.log (html);
console.log ("currentHour " , currentHour);

//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours


function calendarDisplay () {

$('#initialHour').each(function (){
 
 for (start =9; start < 17; start++ ){

    //timeHr.innerHTML = start;
    //  $('#time').text(start);
      $('.container-lg').append(html);
      
     };
});

console.log($(".container-lg".indexOf()));

//var rootEl= $('#initialHour');
var rootEl = document.getElementById("initialHour");
//var backEl= addClass('backColor');
var backEl;


if (start < currentHour){
  document.getElementById("backColor").className = 'past';
  console.log (document.getElementById("backColor").className = 'past');
  //backEl.css('border', 'rgb(122, 242, 242) 5px solid');
  };
if(start = currentHour ){
  document.getElementById("backColor").className = 'present';
  console.log (document.getElementById("backColor").className = 'present');
  //backEl.css('border', 'rgb(122, 242, 242) 5px solid');
    };
if (start > currentHour) {
  document.getElementById("backColor").className = 'future';
  console.log (document.getElementById("backColor").className = 'future');
  //backEl.css('border', 'rgb(122, 242, 242) 5px solid');
}         ;


};

calendarDisplay ();

//for(i=9;i<17;i++){
  
  //if (i < currentHour){
    //$('#hour-9');
  //}
  //else if(i = currentHour ){
    //$('#hour-10');
  //}
  //else {
    //$('#hour-11');
  //}
//};

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

});