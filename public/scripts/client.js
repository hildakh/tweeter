/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "This is just to see what we can see here! Alors, on va jeter un coup d'oeil et decider quoi faire ensuite 🤪"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function $(tweetObject) {
  const markup = `<article class="tweet-container">
      <header class="tweet-header">
        <img src="${tweetObject.user.avatars}" alt="girl-avatar" class="tweet-avatar">
        <p id="user-name">${tweetObject.user.name}</p>
        <p id="user-handler">${tweetObject.user.handle}</p>
      </header>
      <p id="tweet-text">
        ${tweetObject.content.text}
      </p>
      <footer id="tweet-footer">
        <div id="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
        <p id="time-stamp">${tweetObject.created_at}</p>
      </footer>
    </article>`
  return markup;
}

const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  const $tweetContainer = $('.tweet-container');
  for (const user of tweets) {
    $tweetContainer.append(createTweetElement(user));
  }

}

$(document).ready(function () {
  renderTweets(data);

  $('.button').submit(function (event) {
    // alert(“Handler for .submit() called.“);
    event.preventDefault();
    $.ajax({
      url: '/',
      datatype: 'text',
      data: $(this).serialize(),
    }).then((response) => {
      console.log(response);
    });
  });
});