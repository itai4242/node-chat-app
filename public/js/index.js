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
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function (message) {
  var li = jQuery('<li></li>');
  var a = jQuery('<a trget = "_blank">My current location</a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);
});


// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'hi'
// }, function (data){
//   console.log('Got it', data);
// });

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if(!navigator.geolocation) {
    return alert('Geolocation not supported by your browser')
  }
  navigator.geolocation.getCurrentPosition(function (posiotion) {
    socket.emit('createLocationMessage',{
      latitude:posiotion.coords.latitude,
      longitude:posiotion.coords.longitude,    
    });
  }, function () {
    alert('Unable to fetch location');
  })
})
