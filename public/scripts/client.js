/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//To escape the script tweets that could be sent by users and wipe the innerhtml
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
//creates tweets with the input from user and random avatars, usernames and user handles created
//in the user-helper.js
const createTweetElement = function(tweetObject) {
  //using the escape function to get only the innerhtml of the user input and pass it into the p tag
  const $safeHtml = `<p class='tweet-text'>${escape(
    tweetObject.content.text
  )}</p>`;
  const markup = `<article class="tweet-container">
  <div class="tweet-header">

  <img src="${tweetObject.user.avatars}" alt="girl-avatar" class="tweet-avatar">
  <p class="user-name">${tweetObject.user.name}</p>
  <p class="user-handle">${tweetObject.user.handle}</p>
  </div>
    
${$safeHtml}
  
    <footer class="tweet-footer">
  <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
  <p class="time-stamp">${moment(tweetObject.created_at).fromNow()}</p>
</footer>
    </article>`;

  return markup;
};

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  const $tweetContainer = $(".all-tweets");
  $tweetContainer.empty();
  for (const user of tweets) {
    $tweetContainer.prepend(createTweetElement(user));
  }
};

const loadTweets = function() {
  $.ajax("/tweets", { method: "GET" }).then(function(data) {
    renderTweets(data);
  });
};

$(document).ready(function() {
  loadTweets();
  $("#tweet-form").submit(function(event) {
    //prevents the default page refresh every time the form is submitted
    event.preventDefault();

    const $userTweet = $("#tweet-box");
    //Serialize gives a string
    const dataReceived = $("#tweet-form").serialize();
    //validation is to check the length of the tweet
    const $validationError = $(".validation");
    const $errorMsg = $(".validation-msg");
    //validation error slides up on page load to only be called to slide down in case of a tweet length problem
    $validationError.slideUp();

    if ($userTweet.val().length >= 140) {
      $validationError.slideDown();
      $errorMsg.text(
        `Seems like you have a lot to say! Let's just use 140 characters for now, eh?`
      );
    } else if ($userTweet.val().length === 0) {
      $validationError.slideDown();
      $errorMsg.text(`Did you type anything?`);
    } else {
      //$.ajax(route, data, cb(){}) is another syntax for this
      $.post("/tweets", dataReceived, function() {
        loadTweets();
      });
      //Once the new tweet is posted the text-area is cleared
      $("#tweet-form").trigger("reset");
      //The counter is reset to 140 after each tweet post
      $("#counter-btn").text(140);
      //The text area is type ready after each tweet post
      $("#tweet-box").focus();
    }
  });
});
