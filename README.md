# p5_intro
P5.js: Intro Demos

## Paths

 * /p5_intro/index.html
 * /p5_intro/lib/p5.js
 * /p5_intro/sketch.js

## sketch.js

```js
setup = () => {
  createCanvas(800, 300)
  background(220, 220, 220)
  rectMode(CENTER)
}

draw = () => {
  rect(400, 150, 100, 100)
  ellipse(350, 120, 100, 100)
}
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>
      Rect, Ellipse
    </title>
  </head>
  <body>
    <script type="text/javascript" src="../lib/p5.js"></script>
    <script type="text/javascript" src="sketch.js"></script>
    <canvas></canvas>
  </body>
</html>
```
