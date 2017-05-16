
$(function() {

var position = 0
var userId = 1

  var makeAnotherRequest = function() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId,
      method: 'GET',
    }).then(function(data) {

      if (position < data.length - 1){
        console.log(data[position]["body"]);
        $('.target').html(data[position]["body"]);
        position = position + 1;
      } else {
        position = 0;
        userId = userId + 1;
        console.log('going to next user: ', userId);
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
