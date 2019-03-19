// var app = require('../../app');
// var http = require('http').Server(app);
// var io = require('socket.io').listen(http);

// function skio() {
//   // Socket.IO
//  http.listen(app.get('port'), function() {
//       console.log('listening!!!');
//       io.on('connection', function(socket){
//         console.log('a user connected');
//       });
//       // io.sockets.on('connection', function(socket) {
//       //   console.log("connection");
//       //   // メッセージを受けたときの処理
//       //   socket.on('message', function(data) {
//       //     // つながっているクライアント全員に送信
//       //     console.log("message");
//       //     io.sockets.emit('message', { value: data.value });
//       //   });
//       // })
//   });
// }
//   // socket.on('message', function(data) {
//   //   // つながっているクライアント全員に送信
//   //   console.log("message");
//   //   io.sockets.emit('message', { value: data.value });
//   // });
  
//   // // クライアントが切断したときの処理
//   // socket.on('disconnect', function(){
//   //   console.log("disconnect");
//   // });



// module.exports = skio;