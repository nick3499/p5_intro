let toggle = true

setup = () => {
  createCanvas(800, 300)
  rectMode(CENTER) // center rect insertion point
}

draw = () => {
  if (toggle === true) {
    background(1, 186, 240) // background 1
  } else {
    background(250, 150, 50) // background 2
  }
  const x = width/2 // center on x axis
  const y = height/2 // center on y axis
  let size = 200 // size factor
  if (frameCount < 60) {
    size = size + frameCount // grow by frameCount
  } else {
    size = size + 60 // final size
  }
  fill(237, 34, 93) // red ellipse
  noStroke()
  ellipse(x, y, size, size)
  fill(255) // white rect
  rect(x, y, size*0.75, size*0.15)
}

mousePressed = () => {
  toggle = !toggle
}
