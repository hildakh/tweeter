$(document).ready(function() {
  $("#arrow-button").click(function() {
    //toggle the compose box down on the click of the arrow button
    $(".new-tweet").toggle();
    //makes the text-area type area as soon as the compose box appears
    $("#tweet-box").focus();
  });
});
