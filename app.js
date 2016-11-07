//function for adding to total boxes
//function for appending box to DOM

var count = 0;

$( document ).ready(function() {
  $(".color-button").on("click", addToDom);

});

function addToDom() {
  var color = $(this).data("color");
  $(".container").append("<div class='color-cube " + color + "'></div>");
  count++;
  $("#" + color).empty().text()
}
