export const rectangle = (x1:number, y1:number, x2:number, y2:number, canvasArr: string[], width:number) => {
    let x = x2 - x1;
    let y = y2 - y1;
    let xLine = x1;
    try {
        for (let i = 0; i < (x + 1); i++) {
            canvasArr[(width * y1) + xLine] = 'x';
    
            canvasArr[(width * y2) + xLine] = 'x';
            xLine += 1;
        }
        for (let j = 0; j < y1; j++) {
            if (y !== 0) {
                canvasArr[width * (y1 + 1) + x1] = 'x';
    
                canvasArr[width * (y1 + 1) + x2] = 'x';
            }
        }
        return canvasArr;
    } catch(err) {
        throw new Error('Rectangle cannot be drawn!');
    }
}