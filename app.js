//declaring initial color count variables, set at 0
var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

$( document ).ready(function() {

  //click listeners for color-button
  $(".color-button").on("click", addToDom);
  $(".color-button").on("click", addTotalColor);
});


//function to add colored div to the DOM
function addToDom() {
  //declaring color variable
  var color = $(this).data("color");
  $(".container").append("<div class='color-cube " + color + "'></div>");
}

//function to add to total color count
function addTotalColor() {

  //delclaring color variable
  var color = $(this).data("color");

  //cycling through to add to correct color total
  if (color == "red") {
    redCount++;
    $("#" + color).text("Total " + color + ": " + redCount);

  } else if (color == "yellow") {
    yellowCount++;
    $("#" + color).text("Total " + color + ": " + yellowCount);
    
  } else if (color == "green") {
    greenCount++;
    $("#" + color).text("Total " + color + ": " + greenCount);

  } else {
    blueCount++;
    $("#" + color).text("Total " + color + ": " + blueCount);

  }
}
