setup = () => {
  createCanvas(800, 300)
  textAlign(CENTER, CENTER)
  frameRate(6)
}

draw = () => {
  background(249, 202, 6)
  fill(33, 43, 47)
  textSize(36)
  text("frameCount: " + frameCount, width/2, height/2)
}
