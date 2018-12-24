var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'Andrew',
  //   text: 'Yup, that works for me.'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// socket.on('new', function(message){
//   console.log(message.text);
// })
// socket.on('messageOthers', function(message){
//   console.log(message.text);
// })

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
