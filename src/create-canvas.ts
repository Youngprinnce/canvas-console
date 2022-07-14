
export const drawCanvas = (w:number, h:number) => {
    const xAxis = '-';
    const yAxis = '|';
    const space = ' ';
    let horizontalBorder = '';
    let centerSpace = '';
    let canvasArr = [];

    if (w === 0 || isNaN(w)) {
        throw new Error(`Canvas cannot be built as width is invalid`);
    } else if (h === 0 || isNaN(h)) {
        throw new Error(`Canvas cannot be built as height is invalid`);
    }
    try {
        const width = w + 2;
        const height = h + 1;
        for (let i = 0; i < w; i ++) {
            centerSpace += space;
        }
        for (let i = 0; i < width; i++) {
            horizontalBorder += xAxis;
            canvasArr.push(xAxis);
        }
        for (let i = 0; i < h; i++) {
            canvasArr.push(yAxis); 
            for (let j = 0; j < w; j++) {
                canvasArr.push(0);
            }
            canvasArr.push(yAxis); 
        }
        for (let i = 0; i < width; i++) {
            horizontalBorder += xAxis;
            canvasArr.push(xAxis);
        }
        return canvasArr;
    } catch (err) {
        throw new Error('Canvas cannot be created!');
    }
}
