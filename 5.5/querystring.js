const querystring = require('querystring');

//this will generate a querystring that I can use in the URL
//it will also escape special characters by default
console.log(
  querystring.stringify({
    name: 'Samer Buna',
    website: 'jsComplete.com/samer-buna'
  })
);

console.log(
  querystring.parse('name=Samer%20Buna&website=jsComplete.com%2Fsamer-buna') //This separates the query string into and object
);