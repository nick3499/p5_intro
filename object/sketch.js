let c1
let c2
let c3

setup = () => {
  createCanvas(800, 300)
  c1 = new Circle()
  c2 = new Circle()
  c3 = new Circle()
}

draw = () => {
  background(249, 202, 6)
  fill(33, 43, 47)
  noStroke()
  c1.draw()
  c1.grow()
  c2.x = 150
  c2.draw()
  c2.grow()
  c3.x = 650
  c3.draw()
  c3.grow()
}

let Circle = function() {
  this.x = width/2
  this.y = height/2
  this.size = 50
  this.draw = function() {
    ellipse(
      this.x,
      this.y,
      this.size,
      this.size
    )
  }
  this.grow = function() {
    if (this.size < 250) {
      this.size += 1
    }
  }
}
