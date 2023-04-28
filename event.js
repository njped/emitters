const EventEmiiter = require('events')

class MyEmitter extends EventEmiiter{

}

const myEmitter = new MyEmitter()

myEmitter.on('secondEvent', () => {
  console.log('secondEvent emitted')
})

myEmitter.on('error', () => {
  console.log('There was an error')
})

myEmitter.on('event', function(a, b) {
  console.log(a, b);
  // this happens when you the this function in the console log
  // Prints: 
  //   a b MyEmitter {
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
});

myEmitter.on('event', function(a, b) {
  console.log("This is the second event registered of", a, b);
});

myEmitter.emit('event', 'a', 'b')
myEmitter.removeAllListeners('secondEvent')
myEmitter.emit('event', 4, false)
// myEmitter.emit('event')
myEmitter.emit('error')
myEmitter.emit('secondEvent')
