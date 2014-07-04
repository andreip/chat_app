// on form submit, submit message to server
// to which the socket has a connection with
// (by default the one that sent the page to client).
$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});
