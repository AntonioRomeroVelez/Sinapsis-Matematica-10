import Utility from "./utility.class.js";

export default class Fill {
    constructor(canvas, mousexpos, mouseypos, color) {
        this.context = canvas.getContext('2d');
        this.imageData = this.context.getImageData(0, 0, canvas.width, canvas.height);
        this.fillStack = [];
        this.targetColor = this.getPixel(mousexpos, mouseypos);
        this.fillColor = Utility.hexToRgba(color);

        // Verificar que el color objetivo no sea igual al color de relleno
        if (!this.colorsMatch(this.targetColor, this.fillColor)) {
            this.floodFill(mousexpos, mouseypos);
            this.context.putImageData(this.imageData, 0, 0); // Actualizar el canvas
        }
    }

    getPixel(x, y) {
        if (x < 0 || y < 0 || x >= this.imageData.width || y >= this.imageData.height) {
            return [-1, -1, -1, -1]; // Color imposible
        }
        const offset = (y * this.imageData.width + x) * 4;
        return [
            this.imageData.data[offset],
            this.imageData.data[offset + 1],
            this.imageData.data[offset + 2],
            this.imageData.data[offset + 3]
        ];
    }

    setPixel(x, y, color) {
        const offset = (y * this.imageData.width + x) * 4;
        this.imageData.data[offset] = color[0];
        this.imageData.data[offset + 1] = color[1];
        this.imageData.data[offset + 2] = color[2];
        this.imageData.data[offset + 3] = color[3];
    }

    colorsMatch(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }

    floodFill(x, y) {
        this.fillStack.push([x, y]);

        while (this.fillStack.length > 0) {
            const [px, py] = this.fillStack.pop();
            const currentColor = this.getPixel(px, py);

            // Si el color actual coincide con el color objetivo, rellenarlo
            if (this.colorsMatch(currentColor, this.targetColor)) {
                this.setPixel(px, py, this.fillColor);

                // Agregar vecinos a la pila
                this.fillStack.push([px + 1, py]);
                this.fillStack.push([px - 1, py]);
                this.fillStack.push([px, py + 1]);
                this.fillStack.push([px, py - 1]);
            }
        }
    }
}