class Rectangle {
  constructor(height, width) {
    this.height = height, 
    this.width = width
  }
  
  getArea() {
    return this.height * this.width
  }

  setHeight(height){
    this.height = height
  }

  setWidth(width) {
    this.width = width
  }
}

// Extends access all parent functions
class Square extends Rectangle {
  constructor(length) {
    // super calls the parent's constructor
    // thats why there are two lenghts because each of the will equal height and width
    super(length, length)
  }

  setLength(length) {
    this.setHeight = length,
    this.setWidth = length
    return this.setHeight * this.setWidth
  }
}

const rect = new Rectangle(5, 7) 
const sqr = new Square(5)
console.log(rect.getArea())
console.log(sqr.setLength(10))
console.log(sqr.getArea())
// console.log(sqr.getArea())