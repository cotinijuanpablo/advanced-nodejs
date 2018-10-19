const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello world\n');

  setTimeout(function () {
    res.write('Another Hello world\n');
  }, 10000);

  setTimeout(function () {
    res.write('Yet Another Hello world\n');
  }, 20000);
});
server.timeout = 1000;
server.listen(8000);

//I use curl to check this
//curl.exe curl -i localhost:8000
/**
  connection: keep-alive //connection to webserver will be persistent, can recieve multiple requests
  Transfer-Encoding: chunked //the response is being stream
    //In chunked transfer encoding, the data stream is divided into a series of non-overlapping "chunks"
 */
//With no end for the request the conecction will TimeOut with a E.G.:
//curl: (18) transfer closed with outstanding read data remaining
  //default time out, 2 minutes
  //can check this with a time put after 130000, > 120000, 120 seg
  //I can change it with server.timeout