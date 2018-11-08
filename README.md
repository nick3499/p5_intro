# p5_intro
P5.js: Intro Demos
 * [based on code featured in the book titled [Learning JavaScript with p5.js](https://www.codingforvisuallearners.com/)]

## Paths

 * /p5_intro/rect_ellipse/index.html
 * /p5_intro/rect_ellipse/lib/p5.js
 * /p5_intro/rect_ellipse/sketch.js

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

## JavaScript Library

The P5.js dev library may also be linked with a content delivery network. But as sketch complexity increases, a local P5.js development library can become a convenient reference.

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
```

## Preformatted Text

`index.html` file may contain preformatted text to display P5.js code used, which can be removed.
