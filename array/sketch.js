const words = ['I', 'love', 'programming', 'with', 'JavaScript']
const colors = [
  [14,26,64], [34,47,91], [93,93,93], [148,107,45], [0,0,0]
]

setup = () => {
  createCanvas(800, 300)
  textAlign(CENTER, CENTER)
  frameRate(3)
}

draw = () => {
  let currentIndex = frameCount % words.length
  let currentColor = colors[currentIndex]
  let currentWord = words[currentIndex]
  background(currentColor)
  fill(255)
  textSize(45)
  text(currentWord, width/2, height/2)
}
