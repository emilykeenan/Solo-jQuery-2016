//declaring initial global color count variables, set at 0 to start
var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

//declaring global color variable so it is available to both functions
var color;

$( document ).ready(function() {
//listeners for color-button
  $(".color-button").on("click", addToDom);
  $(".color-button").on("click", addTotalColor);
});


//function to add colored div to the DOM
function addToDom() {
//redefining color variable
  color = $(this).data("color");
  $(".container").append("<div class='color-cube " + color + "'></div>");
}

//function to add to total color count, cycling through four colors and adding to total of appropriate color
//there is no need to redeclare the color variable as it will already be available from addToDom function
function addTotalColor() {
  switch (color) {
    case "red":
      redCount++;
      $("#" + color).text("Total " + color + ": " + redCount);
      break;
    case "yellow":
      yellowCount++;
      $("#" + color).text("Total " + color + ": " + yellowCount);
      break;
    case "green":
      greenCount++;
      $("#" + color).text("Total " + color + ": " + greenCount);
      break;
    case "blue":
      blueCount++;
      $("#" + color).text("Total " + color + ": " + blueCount);
      break;
  }
}
