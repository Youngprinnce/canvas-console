# canvas-console
Canvas Console

### Installation

Install the dependencies and devDependencies and start the program.

``` sh
$ cd canvas-console
$ npm install
$ npm start

```

### Testing

Run the Mocha tests file with npm:

``` sh
$ cd canvas-console
$ npm test

```

### Usage

```
Command         Description
C w h           Create a new canvas of width w and height h.
L x1 y1 x2 y2   Create a new line from (x1,y1) to (x2,y2). Currently only 
                horizontal or vertical lines are supported. Horizontal and
                vertical lines will be drawn using the selected colour.
R x1 y1 x2 y2   Create a new rectangle, whose upper left corner is(x1,y1) and 
                lower right corner is (x2,y2). Horizontal and vertical lines 
                will be drawn using the selected colour.
B x y           Fill the entire area connected to (x,y) with selected colour. 
                The behaviour of this is the same as that of the "bucket fill" 
                tool in paint programs.
C c             Set the selected colour to “c”. The default colour is “x”.
Q               Quit.

```

### Helpful resource

*   Paint fill algorithm taken from the following blog:
*   [https://learnersbucket.com/examples/algorithms/flood-fill-algorithm-in-javascript/](https://learnersbucket.com/examples/algorithms/flood-fill-algorithm-in-javascript/)

### Improvements
*   More tests coverage
*   Object oriented approach
