const server = require('net').createServer();
let counter = 0;
let sockets = {}; //strucutre for the sockets

//each connection a different socket
server.on('connection', socket => {
  //I autogenerate ID for LocalTesting
    //Could have used something else that work locally and not?
  //each new socket another one to add to the socket structure
  socket.id = counter++;
  sockets[socket.id] = socket;

  console.log('Client connected');
  socket.write('Welcome new client!\n');

  socket.on('data', data => {
    //Broadcast to everyone
    //my socket is an array of sockets, so ID and Socket respectively
    //I only need the second since I have a for each
    Object.entries(sockets).forEach(([id, curSocket]) => {
      //I don't wanna talk with myself, any prettier way?
      if (data.toString().charCodeAt()!==10 && id != socket.id)
        curSocket.write(`${socket.id}: ${data}`);
    });
  });

  // I can't seem to trigger this
  // ECONNRESET error is what i have if I close the netcat
  socket.on('end', () => {
    delete sockets[socket.id];
    console.log('Client disconnected');
  });
});

server.listen(8000, () => console.log('Server bound'));
