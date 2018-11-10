setup = () => {
  createCanvas(800, 300)
}

draw = () => {
  background(1, 75, 100)
  fill(237, 34, 93)
  noStroke()
  let dia = 50
  for (let i = 0; i < width / dia; i = i + 1) {
    for (let j = 0; j < height / dia; j = j + 1) {
      ellipse(dia / 2 + i * dia, dia / 2 + j * dia, dia, dia)
    }
  }
}
