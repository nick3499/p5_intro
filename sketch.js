let toggle = true

setup = () => {
  createCanvas(800, 300)
  rectMode(CENTER)
}

draw = () => {
  if (mouseIsPressed === true) {
    toggle = !toggle
  }
  if (toggle === true) {
    background(1, 186, 240)
  } else {
    background(250, 150, 50)
  }
  let x = width/2
  let y = height/2
  let size = 200
  fill(237, 34, 93)
  noStroke()
  ellipse(x, y, size, size)
  fill(255)
  rect(x, y, size*0.75, size*0.15)
}
