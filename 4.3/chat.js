const server = require('net').createServer();
let counter = 0;
let sockets = {};

// I coudl use moment fo the timestamp
function timestamp() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
  socket.id = counter++;

  console.log('Client connected');
  socket.write('Please type your name: ');

  socket.on('data', data => {
    if (!sockets[socket.id]) {
      //Need to convert it to string
      socket.name = data.toString().trim();
      socket.write(`Welcome ${socket.name}!\n`);
      //Only after identifying I add it into the socket array
      sockets[socket.id] = socket;
      return;
    }
    Object.entries(sockets).forEach(([key, cs]) => {
      if (socket.id == key) return;
      //I can use the name now to identify the sender
      cs.write(`${socket.name} ${timestamp()}: `);
      cs.write(data);
    });
  });

  socket.on('end', () => {
    delete sockets[socket.id];
    console.log('Client disconnected');
  });
});

server.listen(8000, () => console.log('Server bound'));
