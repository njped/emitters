const EventEmiiter = require('events')
const fs = require('fs')
const file = fs.createWriteStream('./plantGame.txt')
process.stdin.setEncoding('utf-8')
let count = 1
const myPlant = new Plant(1)

process.stdin.on('readable', () => {
  let userInput;
  console.log('Welcome to the Plant Game')
  console.log('Commands: plant seed, water, bug attack, harvest quit')
  while ((userInput = process.stdin.read()) !== null) {
    process.stdout.write(`Your Data: ${userInput}`)
    file.write(`${count}: ${userInput}`)
    count++
    if(userInput === 'plant seed') {
      myPlant.emit('plantSeed')
    }
    else if(userInput === 'water') {
      myPlant.emit('water')
      
    }
    else if(userInput === 'bug attack') {
      myPlant.emit('bugAttack')
      
    }
    else if(userInput === 'harvest') {
      myPlant.emit('harvest')
    }
    else {
      myPlant.error('error')
      console.log('Please type one of the commands to continue\n')
      console.log('plant seed, water, bug attack, harvest quit')
    }

    if(userInput.trim() === 'exit'){
      break;
    }
  }
})

process.stdin.on('quit', () => {
  process.stdout.write("Thanks for playing\n")
})
process.stdin.on('close', () => {
  process.stdout.write('terminal signing out\n')
})

class Plant extends EventEmiiter {
  constructor(size) {
    super();
    this.size = size;
    this.isPlanted = false

    this.once('plantSeed', () => {
      this.isPlanted = true
      console.log('You have planted the seed. Start nurturing it')
    })
    this.on('water', () => {
      if(this.isPlanted){
        size++
        console.log(`The seed received water. The size of the seed is now: ${size}`)
      } else{
        console.log("The seed hasn't been planted yet. Glad this isn't real life we don't want to waste in a drout")
      }
    })
    
    this.on('bugAttack', () => {
      if(this.isPlanted){
        size--
        console.log(`Oh no! The bugs are your plant. The seed is now ${size}`)
      } else{
        console.log("Bug Attack incoming, glad you were smart to see the bugs incoming before you planted your seed")
      }
    })
    
    this.on('harvest', () => {
      if(this.isPlanted) {
        console.log(`You have harvested your seed the current size of it is: ${seed}`)
        this.removeAllListeners()
      }
      else {
        console.log("The seed hasn't been planted yet")
      }
    })

    this.on('error', () => {
      console.log('Error Occured')
    })
  }
  
}

