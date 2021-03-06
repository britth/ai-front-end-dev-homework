
$(function() {

var position = 0
var userId = 1

  var getUserInfo = function(userId) {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
    }).then(function(data) {
      var userArrayPosition = userId - 1
      if (typeof data[userArrayPosition] === "undefined") {
        $('.target-2').html('user unknown');
        $('.target-3').html('');
      } else {
        console.log(data[userArrayPosition]["name"]);
        $('.target-2').html(data[userArrayPosition]["name"] + ' (' + data[userArrayPosition]["username"] + ')');
        $('.target-3').html(data[userArrayPosition]["email"]);
      }

    }).catch(function(err) {
      // try bad endpoint, see an error
      console.log('we got an error!');
      console.log(err);
    });

  };

  var makeAnotherRequest = function() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId,
      method: 'GET',
    }).then(function(data) {
      if (position < data.length) {
        if (position == (data.length - 1)) {
          console.log('last post for this user: ', userId);
        }
        console.log('userId: ' + data[position]["userId"]);
        console.log('commentId: ' + data[position]["id"]);
        console.log(data[position]["body"]);
        $('.target').html(data[position]["body"]);
        getUserInfo(userId);
        if (position < (data.length - 1)){
          $('.example-2').html('');
          position = position + 1;
        } else {
          $('.example-2').html('Last post by this user');
          position = 0;
          userId = userId + 1;
        }
      }
    }).catch(function(err) {
      // try bad endpoint, see an error
      console.log('we got an error!');
      console.log(err);
    });
  };

  $('.load-stuff').on('click', function(event) {
    var _this = this;

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'GET',
    }).then(function(data) {
      makeAnotherRequest();
    }).catch(function(err) {
      //try bad endpoint, see an error
      console.log('we got an error!');
      console.log(err);
    });

  });

});
