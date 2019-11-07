$(document).ready(function () {

  const $userHandler = $('#user-handler');
  const $alltweets = $('.all-tweets');

  $alltweets.hover(
    function() {
      $userHandler.addClass('show');
    }, function() {
      $userHandler.removeClass('show');
    }
  );
});

