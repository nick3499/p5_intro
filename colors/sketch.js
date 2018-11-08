setup = () => {
  createCanvas(800, 400)
  noStroke()
}

draw = () => {
  background(220)
  fill(51, 51, 51)
  ellipse(400, 200, 300, 300) // ellipse 1
  fill(255, 53, 139)
  ellipse(400, 200, 275, 275) // ellipse 2
  fill(1, 176, 240)
  ellipse(400, 200, 250, 250) // ellipse 3
  fill(174, 238, 0)
  ellipse(400, 200, 150, 150) // ellipse 4
}
