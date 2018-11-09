setup = () => {
  createCanvas(800, 300)
  rectMode(CENTER)
}

draw = () => {
  background(1, 186, 240)
  let x = width/2
  let y = height/2
  let size = 200 + frameCount
  fill(237, 34, 93)
  noStroke()
  ellipse(x, y, size, size)
  fill(255)
  rect(x, y, size*0.75, size*0.15)
}
