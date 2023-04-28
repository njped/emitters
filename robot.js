const EventEmiiter = require('events')

class Robot extends EventEmiiter {
  constructor(name) {
    // EventEmitter's contructor doesn't have parameters that is why super doesn't have parameters
    super()
    this.name = name
    this.isActive = false
    this.addListeners()
  }
  addListeners(){
    this.once('activate', this.activateListener)
    this.on('speak', this.speakListener)
  }
  activateListener() {
    this.isActive = true
  }
  speakListener(said) {
    if(this.isActive) {
      console.log(`${this.name}: ${said}`)
    }
  }
}

const nate = new Robot('Nate')

nate.emit('speak', 'hello')

nate.emit('activate')
nate.emit('speak', 'Good Morning')