const dns = require('dns'); // name -- addresses

//Use the underlining OS to check this, not a network connection
//so it uses libuv threads
dns.lookup('pluralsight.com', (err, address) => {
  console.log(address);
});

//The rest use the network
dns.resolve4('pluralsight.com', (err, address) => {
  console.log(address);
});

dns.resolveMx('pluralsight.com', (err, address) => {
  console.log(address);
});

dns.reverse('35.161.75.227', (err, hostnames) => {
  console.log(hostnames);
});
