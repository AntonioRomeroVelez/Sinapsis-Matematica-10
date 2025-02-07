
function NumerosaLetras(cantidad) {
    var numero = "";
    cantidad = parseFloat(cantidad);

    if (cantidad === 0) {
        return "CERO";
    } else {
        var ent = cantidad.toString().split(".");
        var arreglo = separar_split(ent[0]);
        var longitud = arreglo.length;

        switch (longitud) {
            case 1:
                numero = unidades(arreglo[0]);
                break;
            case 2:
                numero = decenas(arreglo[0], arreglo[1]);
                break;
            case 3:
                numero = centenas(arreglo[0], arreglo[1], arreglo[2]);
                break;
            case 4:
                numero = unidadesdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3]);
                break;
            case 5:
                numero = decenasdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4]);
                break;
            case 6:
                numero = centenasdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5]);
                break;
            case 7:
                numero = millones(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5], arreglo[6]);
                break;
            case 8:
                numero = decenasdemillones(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5], arreglo[6], arreglo[7]);
                break;
            case 9:
                numero = centenasdemillones(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5], arreglo[6], arreglo[7], arreglo[8]);
                break;
        }

        // Si tiene decimales
        if (ent[1]) {
            var decimales = parseInt(ent[1].substring(0, 2)); // Tomamos solo los primeros dos decimales
            if (decimales > 0) {
                numero += " CON " + decimales + "/100";
            }
        }

        return numero.trim();
    }
}

function unidades(unidad) {
    var unidades = Array('UN', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE');
    return unidades[unidad - 1];
}

// Función de decenas
function decenas(decena, unidad, enMiles = false) {
    var diez = Array('ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISEIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE');
    var decenas = Array('DIEZ', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA');

    // Manejo especial para veinti-
    if (decena == 2) {
        if (unidad == 0) {
            return "VEINTE ";
        } else if (unidad == 1) {
            return "VEINTIUNO ";
        } else if (unidad == 2) {
            return "VEINTIDÓS ";
        } else if (unidad == 3) {
            return "VEINTITRÉS ";
        } else if (unidad == 6) {
            return "VEINTISÉIS ";
        } else {
            return "VEINTI" + unidades(unidad);
        }
    }

    // Caso para los números de "diez a diecinueve"
    if (decena == 1) {
        if (unidad == 0) {
            return decenas[decena - 1];
        } else if (unidad == 6) {
            return "DIECISEIS";
        } else {
            return diez[unidad - 1];
        }
    }

    // El caso general para decenas
    if (decena == 0 && unidad > 0) {
        return unidades(unidad);
    }

    if (decena == 0 && unidad == 0) {
        return ""; // Caso de "cero" no debe agregar "mil"
    }

    // Si la unidad es 0, solo se debe retornar la decena
    if (unidad == 0) {
        return decenas[decena - 1];
    }

    // Cuando estemos en miles y la unidad sea 1, cambiamos "mil" por "y un"
    if (enMiles && unidad == 1) {
        return decenas[decena - 1] + " Y UN "; // Cambiar "mil" por "y un"
    }

    if (unidad == 1) {
        return decenas[decena - 1] + " Y UNO ";
    }

    return decenas[decena - 1] + " Y " + unidades(unidad);
}


function centenas(centena, decena, unidad) {
    var centenas = Array("CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS");

    if (centena == 1 && decena == 0 && unidad == 0) {
        return "CIEN ";
    }

    return (centena != 0 ? centenas[centena - 1] : "") + (decena || unidad ? " " + decenas(decena, unidad) : "");
}

function unidadesdemillar(unimill, centena, decena, unidad) {
    var numero = unidades(unimill) + " MIL " + centenas(centena, decena, unidad);
    numero = numero.replace("UN MIL", "MIL"); // Corregir 'UN MIL' a 'MIL'

    // Eliminar "Y" cuando la unidad es 0
    if (unidad == 0) {
        return numero.replace(" Y ", " ");
    } else {
        return numero;
    }
}

function decenasdemillar(decemill, unimill, centena, decena, unidad) {
    var numero = decenas(decemill, unimill) + " MIL " + centenas(centena, decena, unidad);
    return numero;
}

function centenasdemillar(centenamill, decemill, unimill, centena, decena, unidad) {
    var numero = centenas(centenamill, decemill, unimill) + " MIL " + centenas(centena, decena, unidad);
    return numero;
}

function millones(million, unimill, centmill, decemill, centena, decena, unidad) {
    var numero = unidades(million);

    // Verificar si es singular o plural
    if (million == 1) {
        numero += " MILLÓN "; // En caso de que sea uno
    } else {
        numero += " MILLONES "; // En caso de que sea más de uno
    }

    numero += centenasdemillar(unimill, centmill, decemill, centena, decena, unidad);

    return numero;
}

function decenasdemillones(millonesdec, million, unimill, centmill, decemill, centena, decena, unidad) {
    var numero = decenas(millonesdec, million) + " MILLONES ";
    numero += centenasdemillar(unimill, centmill, decemill, centena, decena, unidad);
    return numero;
}

function centenasdemillones(centenamillones, millonesdec, million, unimill, centmill, decemill, centena, decena, unidad) {
    var numero = centenas(centenamillones, millonesdec, million) + " MILLONES ";
    numero += centenasdemillar(unimill, centmill, decemill, centena, decena, unidad);
    return numero;
}

function separar_split(texto) {
    return texto.split('');
}
