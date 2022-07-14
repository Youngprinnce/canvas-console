export const fill = (x:number, y:number, newColor:string, canvasArr:string[], width:number) => {
    const currentPixel = (y * width)+ x;
    const current = canvasArr[currentPixel];
    try {
        if(current === newColor){
            return canvasArr;
        }
        colorFill(canvasArr, x, y, newColor, current, width);
        return canvasArr;
    } catch(err) {
        throw new Error('Canvas cannot be filled!');
    }
};

const colorFill = (canvasArr:string[], x:number, y:number, newColor:string, current:string, width:number) => {
    const currentPixel = (y * width)+ x;
    if (x < 0){
        return;
    }
    if (y < 0){
        return;
    }
    if (x > canvasArr.length - 1) {
        return;
    }
    if (y > canvasArr.length - 1) {
        return;
    }
    if (canvasArr[currentPixel] !== current) {
        return;
    }

    //Update the new color
    canvasArr[currentPixel] = newColor;

    //Fill in all four directions
    colorFill(canvasArr, x - 1, y, newColor, current, width);
    colorFill(canvasArr, x + 1, y, newColor, current, width);
    colorFill(canvasArr, x, y - 1, newColor, current, width);
    colorFill(canvasArr, x, y + 1, newColor, current, width);
}
