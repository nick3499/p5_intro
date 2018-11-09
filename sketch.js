let size

setup = () => {
  createCanvas(800, 300)
  rectMode(CENTER)
  size = 200
}

draw = () => {
  background(1, 186, 240)
  let x = width/2
  let y = height/2
  let size = 200
  if (frameCount < 30) {
    size = size + frameCount
  } else {
    size = size + 30
  }
  fill(237, 34, 93)
  noStroke()
  ellipse(x, y, size, size)
  fill(255)
  rect(x, y, size*0.75, size*0.15)
}
