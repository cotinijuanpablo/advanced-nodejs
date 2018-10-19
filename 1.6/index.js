// console.log(module);
// take note on the paths to find the node_modules that go all the way up to the root dir
// and some extra paths below

// Extra paths:
// $HOME/.node_modules
// $HOME/.node_libraries
// $PREFIX/lib/node

//core node modules are and exception, the resolve step returns inmmediatly for code modules

// Just resolve, don't load
// require.resolve('find-me');
// lets say we have a console.log inside this find-me, that won't be consoled
// Resolve coudl be use to check if a module is installed or not

// Also take into accoutn that if resolve its stop.
// think about two files that could be resolved, one in the same level, and the other above
// find one and thats it

// Modules don't need to be files
//In case of a folder being use, it will use the index.js file inside.
//To cahnge it inside the package.json we can put
/**
 {
     "name": "find-me",
     "main": "start.js"
 }
 */

// Resolve a find-me.js on the same level as index.js
// const findMe = require('./find-me');

// Resolve a find-me.js on the parent level
// const findMe = require('../find-me');

// Resolve a find-me.js on the root level
// const findMe = require('/find-me');

//we can move the find me, use abs or rel paths
// const findMeExports = require('./lib/find-me');

// Circular module
const m1 = require('./lib/m1');
console.log(m1); //loaded for m1 is true here

//We can use the export object inside timers