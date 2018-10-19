# Advanced Node.js
For help, ask in #questions at [slack.jscomplete.com](http://slack.jscomplete.com/)

Intended for personal use.

These are some question i will answer the best I can with my limited knwoledge over node.

1)How come when you declare a global variable in any Node.js file it’s not really global to all modules?
they are not global because the modules are wrapped in functions, so its local to the module (function)

2)When exporting the API of a Node module, why can we sometimes use exports and other times we have to use module.exports?
exports is the alias for the module.export.
modules.export is what its return by the required class, export is not returned.
So, export = {divide(a,b) {return a/b}} will never be returned, but
export.divide = (a,b) => a/b will be returned just as
module.export.divide = (a,b) => a/b, because
exports = modules.exports but is just no the one that will be returned.

3)Can we require local files without using relative paths?
Like a require for a node modules for example?
For example express, const express = require('express');
I fail at understanding the question.

4)What is the Event Loop? Is it part of V8?
event loop is a concept of the js programming model, every v8 embeder implement event loop. V8 provides a default implementantion. Check the browser which is single threaded and has event loop.

5)What is the Call Stack? Is it part of V8?
ts the stack of calls, show where we are in the executtion. If we have a call, we stack it there. We pop off from the stack. functionA(functionB(functionC)) stack from bottom to top A, B and C, I do C then B and then A.

The javascipt concuirrency model has all this concept that are implemented inside v8, and v8 is a javascript engine.

6)What is the difference between setImmediate and process.nextTick?
SetImmediate is a setDelay with 0, and while we are there, the setDelay defined the MINIMUM time delay for something to be called.
process.nextTick defers the call to the next Event Loop Iteration

//TODO
How do you make an asynchronous function return a value?
Can callbacks be used with promises or is it one way or the other?
What are the major differences between spawn, exec, and fork?
How does the cluster module work? How is it different than using a load balancer?
What are the --harmony-* flags?
How can you read and inspect the memory usage of a Node.js process?
Can reverse-search in commands history be used inside Node’s REPL?
What are V8 object and function templates?
What is libuv and how does Node.js use it?
How can you make Node’s REPL always use JavaScript strict mode?
How can we do one final operation before a Node process exits? Can that operation be done asynchronously?
Besides V8 and libuv, what other external dependencies does Node have?
What’s the problem with the process uncaughtException event? How is it different than the exit event?
Do Node buffers use V8 memory? Can they be resized?
What’s the difference between Buffer.alloc and Buffer.allocUnsafe?
How is the slice method on buffers different from that on arrays?
What is the string_decoder module useful for? How is it different than casting buffers to strings?
What are the 5 major steps that the require function does?
What is the require.resolve function and what is it useful for?
What is the main property in package.json useful for?
What are circular modular dependencies in Node and how can they be avoided?
What are the 3 file extensions that will be automatically tried by the require function?
When creating an http server and writing a response for a request, why is the end() function required?
When is it ok to use the file system *Sync methods?
How can you print only one level of a deeply nested object?
What is the node-gyp package used for?
The objects exports, require, and module are all globally available in every module but they are different in every module. How?
How can a module be both requirable by other modules and executable directly using the node command?
What’s an example of a built-in stream in Node that is both readable and writable?
What’s the difference between using event emitters and using simple callback functions to allow for asynchronous handling of code?
The require function always caches the module it requires. What can you do if you need to execute the code in a required module many times?
What’s the difference between the Paused and the Flowing modes of readable streams?
What does the --inspect argument do for the node command?
When working with streams, when do you use the pipe function and when do you use events? Can those two methods be combined?