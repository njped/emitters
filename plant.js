const EventEmiiter = require('events')

class Plant extends EventEmiiter {
  constructor(size) {
    super();
    this.size = size;
    this.isPlanted = false

    this.once('plantSeed', () => {
      this.isPlanted = true
      console.log('The seed has been planted')
    })
    this.on('water', () => {
      if(this.isPlanted){
        size++
        console.log(size)
      } else{
        console.log("The seed hasn't been planted yet")
      }
    })
    
    this.on('bugAttack', () => {
      if(this.isPlanted){
        size--
        console.log(size)
      } else{
        console.log("The seed hasn't been planted yet")
      }
    })
    
    this.on('harvest', () => {
      if(this.isPlanted) {
        console.log(size)
        this.removeAllListeners()
      }
      else {
        console.log("The seed hasn't been planted yet")
      }
    })
  }
  
}

const myPlant = new Plant(1)

myPlant.emit('harvest')
myPlant.emit('plantSeed')
myPlant.emit('water')
myPlant.emit('water')
myPlant.emit('bugAttack')
myPlant.emit('water')
myPlant.emit('bugAttack')
myPlant.emit('water')
myPlant.emit('harvest')
myPlant.emit('bugAttack')
myPlant.emit('bugAttack')
myPlant.emit('water')