//If i wanted to work with http instead, just change the https for http
const https = require('https');

// req: http.ClientRequest
const req = https.get(
  'https://www.google.com',
  //no error arg because it gets registered as an event Listener, so we handle it THERE X1
  (res) => {
    // res: http.IncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (data) => {
      console.log(data.toString());
    });
  }
);

//X1 HERE
req.on('error', (e) => console.log(e));
//we can also do a req.write in case of a post method

console.log(req.agent); // http.Agent

//req.end(); //Do not need, will be done for us

// req: http.ClientRequest
/**
const req = https.request(
  //hostname, method
  'https://www.google.com',
  
  (res) => {
    // res: http.IncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (data) => {
      console.log(data.toString());
    });
  }
);

req.end();
 */


