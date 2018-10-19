//node --inspect-brk .\client.js
//then i go to chrome://inspect

process.stdout.write('\u001B[2J\u001B[0;0f');
let port = 8000;
const server = require('net').createServer();

//This gets fired each time a client connects to the server
server.on('connection', socket => {
  //socket its duplex, we can read and write
  console.log('Client connected');
  socket.write('Welcome new client!\n');
  let message="";
  socket.on('data', data => {
    //with netcat for example
    console.log('data is:', data);
    socket.write('data is: ');
    socket.write(data);
    // If I wanted to use telnet, as I originally did...
    // I had to do the following because telnet doesn't wait until linebreak to send the info
    // I couldn't change the mode with set mode, or it doesn't work like that
    // ask for other options
    // Is it possible to mix up the message between clients (sockets)?
       //Next file, but two different client, two different sockets
    // if (data.toString().charCodeAt()==13) {
    //   console.log('message: ' + message);
    //   socket.write('data is: ' + message + '\n');
    //   //socket.write(message + '\n', 'utf8'); //this assumes utf8 encoding
    //   message="";
    //   } else {
    //     message+=data;
    //   }
  });

  //It doesn't tell me that the client telnet disconnected on ctrl+], but it does when I reconnect
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

//To run the server we need to listen to a port
server.listen(port, () => console.log('Server bound'));

//TO test, install or use TELNET (or NETCAT)
/**
Click Start.
Select Control Panel.
Choose Programs and Features.
Click Turn Windows features on or off.
Select the Telnet Client option.
Click OK.
A dialog box appears to confirm installation. The telnet command should now be available.
*/
// write telnet in CMD
// open localhost 8000