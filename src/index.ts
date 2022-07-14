import * as createCanvas from './create-canvas';

let canvas;
let canvasArr;
let width;

const converToString = (arr: (string | number)[], index: number) => {
    let checkCanvas = arr.join('');
    for (let i = 0; i < 6; i++) {
        checkCanvas = [checkCanvas.slice(0, index), '\n', checkCanvas.slice(index)].join('');
        index += 23;
    }
    const regex = new RegExp('0', 'g');
    const stringCanvas = checkCanvas.replace(regex, ' ');
    return stringCanvas;
}

const runCommands = (values: string) => {
    let canvasValues = values.split(' ');
    try {
        if (canvasValues[0] === 'N') {
            const w = Number(canvasValues[1]);
            const h = Number(canvasValues[2]);
            width = Number(canvasValues[1]) + 2;
            canvasArr = createCanvas.drawCanvas(w, h);
            canvas = converToString(canvasArr, width);
            console.log(canvas);
            return;
        } 
    } catch(err) {
        throw new Error('Unable to draw canvas!');
    }
}

runCommands('N 5 5');