$(document).ready(function () {

  const $userHandler = $('#user-handler');
  const $tweetContainer = $('.tweet-container');

  $tweetContainer.hover(
    function() {
      $userHandler.addClass('show');
    }, function() {
      $userHandler.removeClass('show');
    }


  );

});

