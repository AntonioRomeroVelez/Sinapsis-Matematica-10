import Utility from './utility.class.js';
import Tool from './tool.class.js';
import Fill from './fill.class.js';

export default class Paint {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.undoStack = [];
        this.undoLimit = 3;
        this.isDrawing = false; // Indica si se está dibujando (ratón o touch)
        this.isTouching = false; // Indica si hay un toque activo
    }

    // Setter functions
    set activeTool(tool) {
        this.tool = tool;
    }

    set selectedColor(color) {
        this.color = color;
        this.context.fillStyle = this.color;
        this.context.strokeStyle = this.color;
    }

    set lineWidth(lineWidth) {
        this._lineWidth = lineWidth;
    }

    set brushSize(brushSize) {
        this._brushSize = brushSize;
    }

    init() {
        // Eventos de ratón
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mouseup', (e) => this.onMouseUp(e));

        // Eventos táctiles
        this.canvas.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
        this.canvas.addEventListener('touchend', (e) => this.onTouchEnd(e));
    }

    onMouseDown(e) {
        this.startDrawing(Utility.getMouseCoordsOnCanvas(this.canvas, e));
    }

    onMouseMove(e) {
        if (this.isDrawing) {
            this.updateDrawing(Utility.getMouseCoordsOnCanvas(this.canvas, e));
        }
    }

    onMouseUp(e) {
        this.stopDrawing();
    }

    onTouchStart(e) {
        // Verificar si el evento táctil ocurre dentro del canvas antes de prevenir el comportamiento por defecto
        const touch = e.touches[0];
        const touchPosition = Utility.getTouchCoordsOnCanvas(this.canvas, touch);

        if (this.isTouchInsideCanvas(touchPosition)) {
            e.preventDefault(); // Prevenir comportamiento por defecto solo en el canvas
            this.startDrawing(touchPosition);
            this.isTouching = true;
        }
    }

    onTouchMove(e) {
        if (this.isTouching) {
            const touch = e.touches[0];
            const touchPosition = Utility.getTouchCoordsOnCanvas(this.canvas, touch);

            if (this.isTouchInsideCanvas(touchPosition)) {
                e.preventDefault(); // Prevenir comportamiento por defecto solo en el canvas
                this.updateDrawing(touchPosition);
            }
        }
    }

    onTouchEnd(e) {
        this.stopDrawing();
        this.isTouching = false;
    }

    startDrawing(startPos) {
        this.savedImage = this.context.getImageData(0, 0, this.context.canvas.width, this.context.canvas.height);
        if (this.undoStack.length >= this.undoLimit) this.undoStack.shift();
        this.undoStack.push(this.savedImage);
        this.startPos = startPos;
        this.isDrawing = true;

        if (this.tool == Tool.TOOL_PENCIL || this.tool == Tool.TOOL_BRUSH) {
            this.context.beginPath();
            this.context.moveTo(this.startPos.x, this.startPos.y);
        } else if (this.tool == Tool.TOOL_PAINT_BUCKET) {
            new Fill(this.canvas, Math.round(this.startPos.x), Math.round(this.startPos.y), this.color);
        }
    }

    updateDrawing(currentPos) {
        this.currentPos = currentPos;
        switch (this.tool) {
            case Tool.TOOL_LINE:
            case Tool.TOOL_RECTANGLE:
            case Tool.TOOL_CIRCLE:
            case Tool.TOOL_TRIANGLE:
                this.drawShape();
                break;
            case Tool.TOOL_PENCIL:
                this.drawFreeLine(this._lineWidth);
                break;
            case Tool.TOOL_BRUSH:
                this.drawFreeLine(this._brushSize);
                break;
        }
    }

    stopDrawing() {
        this.isDrawing = false;
        this.canvas.onmousemove = null;
        document.onmouseup = null;
    }

    drawShape() {
        this.context.putImageData(this.savedImage, 0, 0);
        this.context.beginPath();
        this.context.lineWidth = this._lineWidth;
        if (Tool.TOOL_LINE == this.tool) {
            this.context.moveTo(this.startPos.x, this.startPos.y);
            this.context.lineTo(this.currentPos.x, this.currentPos.y);
        } else if (Tool.TOOL_RECTANGLE == this.tool) {
            this.context.rect(this.startPos.x, this.startPos.y, this.currentPos.x - this.startPos.x, this.currentPos.y - this.startPos.y);
        } else if (Tool.TOOL_CIRCLE == this.tool) {
            let distance = Utility.calcHypotenuse(this.startPos, this.currentPos);
            this.context.arc(this.startPos.x, this.startPos.y, distance, 0, 2 * Math.PI, false);
        } else if (Tool.TOOL_TRIANGLE == this.tool) {
            this.context.moveTo(this.startPos.x + (this.currentPos.x - this.startPos.x) / 2, this.startPos.y);
            this.context.lineTo(this.startPos.x, this.currentPos.y);
            this.context.lineTo(this.currentPos.x, this.currentPos.y);
            this.context.closePath();
        }
        this.context.stroke();
    }

    drawFreeLine(lineWidth) {
        this.context.lineWidth = lineWidth;
        this.context.lineTo(this.currentPos.x, this.currentPos.y);
        this.context.lineCap = 'round';
        this.context.lineJoin = 'round';
        this.context.stroke();
    }

    undoPaint() {
        if (this.undoStack.length > 0) {
            this.context.putImageData(this.undoStack[this.undoStack.length - 1], 0, 0);
            this.undoStack.pop();
        } else {
            // alert("No undo available");
        }
    }

    // Función para verificar si el toque está dentro del canvas
    isTouchInsideCanvas(touchPosition) {
        return (
            touchPosition.x >= 0 &&
            touchPosition.x <= this.canvas.width &&
            touchPosition.y >= 0 &&
            touchPosition.y <= this.canvas.height
        );
    }
}