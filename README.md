# p5_intro
P5.js: Intro Demos
 * [based on code featured in the book titled [Learning JavaScript with p5.js](https://www.codingforvisuallearners.com/)]

![P5.js Example](https://github.com/nick3499/p5_intro/blob/master/rect-ellipse-p5-js.png)

## Directory Order

 1. rect_ellipse
 2. colors
 3. dolly
 4. do_not_enter
 5. frame_count
 6. growing_sign
 7. if_statement
 8. mouse_pressed
 9. mousex_mousey
 10. for_loop
 11. random_numbers

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

### ES6 Arrow Functions

The line `setup = () => {` demos [ES6 arrow functions](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/), which are optional.

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

Know that a `pre` element has precedence over the `canvas` element in the DOM. Also, text can be displayed on the canvas.
