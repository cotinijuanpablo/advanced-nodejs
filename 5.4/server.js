const fs = require('fs');
const server = require('http').createServer();
const data = {};

server.on('request', (req, res) => {
  //the url requested
  switch (req.url) {
  case '/api':
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    break;
  case '/home':
  case '/about':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(`.${req.url}.html`));
    break;
  case '/':
    res.writeHead(301, { 'Location': '/home' });
    res.end();
    break;
  default:
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000);
// http.STATUS_CODES to see the code
/**
 * 1XX Information
 * 2XX Sucess
 * 3XX Redirect
 * 4XX Client Error
 * 5XX Server Error 
 */