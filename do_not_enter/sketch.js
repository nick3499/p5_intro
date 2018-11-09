let x = 0

setup = () => {
  createCanvas(800, 300)
  rectMode(CENTER)
  noStroke()
}

draw = () => {
  background(1, 186, 240)
  const y = height / 2
  let size = 200 + x
  fill(237, 34, 93)
  ellipse(x, y, size, size)
  fill(255)
  rect(x, y, size*0.75, size*0.15)
  x = x + 1
}
