const assert = require('assert');

class EventEmitter {
  constructor() {
    this.listener = {};
  }

  on(eventName, fn) {}

  emit(eventName, ...args) {}
}

const iShouldBeCalled = (args) => {
  assert(args[0] === 123, 'Args 0 incorrect');
  assert(args[1] === 456, 'Args 1 incorrect');

  console.log('Completed');
};

const eventEmitter = new EventEmitter();
console.log('Started');
