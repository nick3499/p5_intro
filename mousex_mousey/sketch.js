setup = () => {
  createCanvas(800, 300)
  background(249, 202, 6)
}

draw = () => {
  let x = mouseX
  let y = mouseY
  let size = 25
  fill(33, 43, 47, 100)
  noStroke()
  ellipse(x, y, size, size)
}
