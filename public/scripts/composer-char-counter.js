$(document).ready(function () {
  //checking that the page loads before the alert is read
  // alert('quelque chose de bien');
  // --- our code goes here ---
  let $counterBtn = $('#counter-btn');
  // find an element by id
  const $tweetBox = $('#tweet-box');
  // assign it to a variable
  // add an event listener to it
  // log the event
  $tweetBox.on('input', function () {
    // console.log('keyup', $(this).val().length);
    // set a variable to record the number of characters
    const $charCount = $(this).val().length;
    $counterBtn.text(140 - $charCount);
    if ($counterBtn.text() <= 0) {
      $counterBtn.addClass('red');
    } else if ($counterBtn.text() > 0) {
      $counterBtn.removeClass('red');
    }
  });



});

