export const line = (x1:number, y1:number, x2:number, y2:number, canvasArr: string[], width:number) => {
    let x = (x2 + 1) - x1;
    let y = (y2 + 1) - y1;
    let xLine = x1;
    let yLine = y1;
    try {
        for (let i = 0; i < x; i++) {
            canvasArr[(width * y1) + xLine] = 'x';
            xLine += 1;
        }
        for (let j = 0; j < y; j++) {
            if (y !== 0) {
                canvasArr[(width * yLine) + x1] = 'x';
                yLine += 1;
            }
        }
        return canvasArr;
    } catch(err) {
        throw new Error('Line cannot be drawn!');
    }
};