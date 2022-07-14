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
        it("draw a vertical line", function () {
            drawLine.line(1, 2, 6, 2, canvasArr, totalWidth);
            drawLine.line(6, 3, 6, 4, canvasArr, totalWidth);
            canvas = factory.converToString(canvasArr, totalWidth);

            expect(canvas[(totalWidth * 3) + 8]).to.eql(' ');
            expect(canvas[(totalWidth * 3) + 9]).to.eql('x');
            expect(canvas[(totalWidth * 3) + 10]).to.eql(' ');
        })
    })

    describe("drawing the rectangle", function() {
        it("draws a rectangle", function () {
            drawRectangle.rectangle(14, 1, 18, 3, canvasArr, totalWidth);
            canvas = factory.converToString(canvasArr, totalWidth);
            expect(canvas[totalWidth + 14]).to.eql(' ');
            expect(canvas[totalWidth + 15]).to.eql('x');
            expect(canvas[totalWidth + 16]).to.eql('x');
            expect(canvas[totalWidth + 17]).to.eql('x');
            expect(canvas[totalWidth + 18]).to.eql('x');
            expect(canvas[totalWidth + 19]).to.eql('x');
            expect(canvas[totalWidth + 20]).to.eql(' ');

            expect(canvas[(totalWidth * 2) + 15]).to.eql(' ');
            expect(canvas[(totalWidth * 2) + 16]).to.eql('x');
            expect(canvas[(totalWidth * 2) + 17]).to.eql(' ');
            expect(canvas[(totalWidth * 2) + 19]).to.eql(' ');
            expect(canvas[(totalWidth * 2) + 20]).to.eql('x');
            expect(canvas[(totalWidth * 2) + 21]).to.eql(' ');

            expect(canvas[(totalWidth * 3) + 16]).to.eql(' ');
            expect(canvas[(totalWidth * 3) + 17]).to.eql('x');
            expect(canvas[(totalWidth * 3) + 21]).to.eql('x');
            expect(canvas[(totalWidth * 3) + 22]).to.eql(' ');
        })
    })
})
