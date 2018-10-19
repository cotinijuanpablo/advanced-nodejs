exports.id = 'm1';

exports.content = [1]; //this will be available in m2 (since theres a require there for m1)
const m2 = require('./m2');
console.log(m2);

exports.content.push(11);
exports.content.push(111);
