// receive message from server and add it to the chat window.
$(function() {
  socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
  });
});
