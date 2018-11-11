setup = () => {
  createCanvas(800, 200)
  background(249, 202, 6)
}

draw = () => {
  grid(30, 10, 20) // cols, rows, grid size
}

// x = num of cols; y = num of rows; s = grid size
grid = (x, y, s) => {
  fill(33, 43, 47)
  stroke(249, 202, 6)
  for (let i=0; i<x*s; i=i+s) {
    for (let j=0; j<y*s; j=j+s) {
      rect(i, j, s, s)
    }
  }
}
