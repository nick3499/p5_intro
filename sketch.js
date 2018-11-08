let x = 0

setup = () => {
  createCanvas(800, 300)
  rectMode(CENTER)
  noStroke()
}

draw = () => {
  background(1, 186, 240)
  const y = height / 2
  fill(237, 34, 93)
  ellipse(x, y, 200, 200)
  fill(255)
  rect(x, y, 150, 30)
  x = x + 1
}
