import Point from './point.class.js';

export default class Utility {
  // Obtener las coordenadas del ratón relativas al canvas
  static getMouseCoordsOnCanvas(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return new Point(event.clientX - rect.left, event.clientY - rect.top);
  }

  // Obtener las coordenadas táctiles relativas al canvas
  static getTouchCoordsOnCanvas(canvas, touch) {
    const rect = canvas.getBoundingClientRect();
    return new Point(touch.clientX - rect.left, touch.clientY - rect.top);
  }

  // Calcular la hipotenusa entre dos puntos (distancia)
  static calcHypotenuse(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Convertir un color hexadecimal a formato RGBA
  static hexToRgba(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
        255,
      ]
      : null;
  }

  // Obtener el color de un píxel específico en el canvas
  static getPixel(context, x, y) {
    const imageData = context.getImageData(
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
    if (
      x < 0 ||
      y < 0 ||
      x >= imageData.width ||
      y >= imageData.height
    ) {
      return [-1, -1, -1, -1]; // Color imposible
    } else {
      const offset = (y * imageData.width + x) * 4;
      return [
        imageData.data[offset + 0],
        imageData.data[offset + 1],
        imageData.data[offset + 2],
        imageData.data[offset + 3],
      ];
    }
  }

  // Establecer el color de un píxel específico en el canvas
  static setPixel(context, x, y, color) {
    const imageData = context.getImageData(
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
    const offset = (y * imageData.width + x) * 4;
    imageData.data[offset + 0] = color[0];
    imageData.data[offset + 1] = color[1];
    imageData.data[offset + 2] = color[2];
    imageData.data[offset + 3] = color[3]; // Corrección: usar color[3] para el canal alfa
    context.putImageData(imageData, 0, 0);
  }

  // Comparar si dos colores son iguales
  static colorsMatch(a, b) {
    return (
      a[0] === b[0] &&
      a[1] === b[1] &&
      a[2] === b[2] &&
      a[3] === b[3]
    );
  }
}