import * as factory from '../src/factory';
import * as createCanvas from '../src/create-canvas';
import * as drawLine from '../src/draw-line';
import * as drawRectangle from '../src/draw-rectangle';
import * as fillCanvas from '../src/fill-canvas';

const expect = require('chai').expect;

describe("drawing the canvas", function() {
    let canvas: string;
    const totalWidth = 20 + 2;
    const totalHeight = 4 + 2;
    const canvasArr = createCanvas.drawCanvas(20, 4);
    const areaLength = totalWidth * totalHeight;

    describe('creating the canvas', function() {
        it("creates the canvas array with correct length", function () {
            expect(canvasArr.length).to.eql(areaLength);
        })
        it("displays the canvas with - and |", function () {
            canvas = factory.converToString(canvasArr, totalWidth);
            expect(canvas[0]).to.eql('-');
            expect(canvas[totalWidth + 1]).to.eql('|');
            expect(canvas[totalWidth + 2]).to.eql(' ');
            expect(canvas[areaLength]).to.eql('-');
        })
    })

    describe("drawing the line", function() {
        it("draws a horizontal line", function () {
            drawLine.line(1, 2, 6, 2, canvasArr, totalWidth);
            canvas = factory.converToString(canvasArr, totalWidth);

            expect(canvas[(totalWidth * 2) + 2]).to.eql('|');
            expect(canvas[(totalWidth * 2) + 3]).to.eql('x');
            expect(canvas[(totalWidth * 2) + 8]).to.eql('x');
            expect(canvas[(totalWidth * 2) + 9]).to.eql(' ');
        })
    })
})
