const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client){
    super();
    //container of tasks
    this.tasks = {};
    //counter new task
    this.taskId = 1;
    //I do this because the on from the client is done after the server creation.
    process.nextTick(()=>{
      this.emit(
        'response',
        'Type command (help to list commands'
      );
    })
    client.on('command', (command, args)=> {
      switch(command){
        case 'help':
        case 'ls':
        case 'add':
        case 'delete':
          //I access the attributes/methods of a class as an array
          this[command](args);
          break
        default:
          this.emit('response', 'Uknown command...');
      }
    });
  }
  /**
   * @summary Returns tasks in existence
   * @returns {string} - string of tasks
   */
  tasksString() {
    return Object.keys(this.tasks).map(key => {
      return `${key}: ${this.tasks[key]}`;
    }).join('\n');
  }

  /**
   * @summary for list of commands
   */
  help(){
    this.emit('response',
     `Available Commands:
        help, for list of commands
        ls to the current tasks
        add to add a new tasks
        delete to delete it
    `);
  }

  /**
   * @summary Add a new tasks
   * @param parameters are the arguments for the task
   */
  add(args){
    this.tasks[this.taskId] = args.join(' ');
    this.emit('response', `Added task ${this.taskId}`)
    this.taskId++;
  }

  /**
   * @summary to the current tasks
   */
  ls(){
    this.emit('response', `Tasks: \n${this.tasksString()}`);
  } 

  /**
   * @summary to delete it
   * @param args - first should be the ID for the task to be deleted
   */
  delete(args){
    delete(this.tasks[args[0]]);
    this.emit('response', `Deleted task ${args[0]}`)
  }
}

module.exports = (client) => new Server(client);