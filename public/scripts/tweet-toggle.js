$(document).ready(function () {
  $('#arrow-button').click(function () {
    $('.new-tweet').toggle();
    $('#tweet-box').focus();
  });

  //fix the time stamp using timeago plugin from jquery
  // $('.time-stamp').text(timeago());


});