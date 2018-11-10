setup = () => {
  createCanvas(800, 300)
  textAlign(CENTER, CENTER)
  fill(33, 43, 47)
  frameRate(1)
}

draw = () => {
  let r0 = random()
  let r1 = random(10)
  let r2 = random(100, 1000)
  let offset = 40
  textSize(24)
  background(255)
  text(r0, width/2, height/2-offset)
  text(r1, width/2, height/2-0)
  text(r2, width/2, height/2+offset)
}
