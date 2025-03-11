var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Completa correctamente.  <br>`,
    `En la actividad 2 y 4. Escribe la expresión en el campo de texto y luego presiona el botón 'Agregar expresión' para formatearla y agregarla correctamente.  <br>`,
    `En la actividad 3. Selecciona el círculo amarillo luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 5. Selecciona V o F.  <br>`,
    `En la actividad 6. Escribe en los recuadros de texto.  <br>`,
    `En la actividad 7, 8 y 9. Usa la pizarra para realizar cada ejercicio y completa la respuesta correcta. Escribe la expresión en el campo de texto y luego presiona el botón 'Agregar expresión' para formatearla y agregarla correctamente.  <br>`,
]
var unidad = '3'
$("#numTema").html('1')
$("#temaActividad").html('Máximo común divisor y mínimo común múltiplo')
$("#n_pagina").html("96");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(210, 500, 'none', 0, 0)
})

// Función para obtener números primos hasta un límite dado
function obtenerPrimos(limite) {
    let primos = [];
    for (let i = 2; i <= limite; i++) {
        let esPrimo = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(i);
        }
    }
    return primos;
}

// Lista de números a procesar
var p1actividad = ['54', '75', '2025', '3150', '4620', '1302', '128', '4290', '153', '1275'];
mezclar(p1actividad)
// Generamos una lista de números primos hasta un límite razonable (por ejemplo, 50)
const primos = obtenerPrimos(50);


let p1items = p1actividad.splice(0, 6).map((element) => {
    let resultado = '';
    let numero = parseInt(element);  // Aseguramos que `element` sea un número entero
    let contadorWhile = 0

    // Comienza el proceso de división usando los números primos generados
    primos.forEach((primo) => {
        while (numero % primo === 0 && numero !== 1) {
            if (contadorWhile == 0) {
                numero_control = NumAleatorio(1, 3);
                resultado += `<div>
                            <div class="b-derecha"><input class="caracter4 p1input" value="${numero}" readonly></div>
                            <div class="b-izquierda">${numero_control === 2 ? `<input class="caracter4 p1input" value="${primo}" readonly>` : `<input class="caracter4 p1input p1var" data-info="${primo}">`}</div>
                        </div>`;
                numero = numero / primo;
            } else {
                numero_control = NumAleatorio(1, 3);
                resultado += `<div>
                            <div class="b-derecha">${numero_control === 1 ? `<input class="caracter4 p1input" value="${numero}" readonly>` : `<input class="caracter4 p1input p1var" data-info="${numero}">`}</div>
                            <div class="b-izquierda">${numero_control === 2 ? `<input class="caracter4 p1input" value="${primo}" readonly>` : `<input class="caracter4 p1input p1var" data-info="${primo}">`}</div>
                        </div>`;
                numero = numero / primo;
            }
            contadorWhile++
        }
    });

    // Agregar el 1 al final
    resultado += `<div>
                    <div class="b-derecha"><input class="caracter4 p1input" value="1" readonly></div>
                    <div class="b-izquierda"></div>
                </div>`;

    return `<div class="p1_container">${resultado}</div>`;
}).join('');

// Inyectamos el HTML generado en el DOM
$("#p1act").html(`${p1items}`);


function pregunta1() {
    let core = validarCajas('p1var')
    let total = core * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


function mostrarExpresionPotencia() {
    let expresion = document.getElementById("expresion").value;
    expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
        return p1 + `<sup>${p2}</sup>`;
    });
    document.getElementById("resultado").innerHTML = expresion;
}





// Datos de ejemplo
let p2actividad = [
    { item: '2x2 y3 z; 3x2 y3 z; -4x3 y3 z2', respuesta: 'x2y3z' },
    { item: `5a2 b4 c; -2a2 b4 c3; 7a3 b4 c2`, respuesta: 'a2b4c' },
    { item: `-12p2 q6 r;  -2p5 q4 r3;  -6p3 q5 r2`, respuesta: '-2p2q4r' },
    { item: `4m3 n2 o; -2m3 n2 o; 8m4 n2 o3`, respuesta: '2m3n2o' },
    { item: `-2x2 y4 z; 3x2 y4 z; -5x3 y4 z2`, respuesta: 'x2y4z' },
    { item: `6a3 b2 c; -4 a3 b2 c; 9a4 b2 c3`, respuesta: 'a3b2c' },
    { item: `38a2 x6 y4 ;76mx4 y7; 95x5 y6`, respuesta: '19x4y4' },
    { item: `4a2 b; 8a3 b2; 2a2 bc; 10a b3 c2`, respuesta: '2ab' },
    { item: `75a4 b3 c2; 150a5 b7  x2; 225a3 b6 y2`, respuesta: '75a3b3' },
];
mezclar(p2actividad)
let p2respuestas = [];

// Función para formatear la expresión ingresada por el usuario
function formatearExpresion(id) {
    let expresion = $(`#expresion_${id}`).val().toLowerCase();
    expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
        return p1 + `<sup>${p2}</sup>`;  // Convierte 'x2' en 'x<sup>2</sup>'
    });
    console.log(expresion)
    $(`#resultado_${id}`).html(expresion);
}

let p2items = p2actividad.map((p, i) => {
    p2respuestas.push(p.respuesta);
    let expresion = ponerExpresionPotencia(p.item);
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b> ${expresion} &emsp;&emsp;
                    <div id="p2var${i}" style="padding:5px">m. c. d. = <span id="resultado_${i}"></span></div>
                </div>
                <div class="info p2_input_boton">
                    <input type="text" class="input-p2-expresion" id="expresion_${i}" placeholder="Escribe a2 b4 z"  autocomplete="off" style="width:300px"/>
                    <button onclick="formatearExpresion('${i}')" class="btn-success">Agregar expresión</button>
                </div>
            </div>`;
}).join('');

// Inyectamos los items generados en el DOM
$("#p2act").html(p2items);





function pregunta2() {
    let core = 0
    for (let i = 0; i < p2respuestas.length; i++) {
        let dato = procesarTexto($("#expresion_" + i).val())
        if (dato == p2respuestas[i]) {
            core++;
            $("#p2var" + i).addClass('bien');
        } else {
            $("#p2var" + i).addClass('mal');
        }
    }
    let total = (core / p2respuestas.length) * 1.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


let arrayElemInicio = []
let arrayElemFin = []

let p3iniciales = ['m.c.d. (12xyz2, 8xyz)', 'm.c.d. (3a2 x - 9a2, x2 - 6x + 9)', 'm.c.d. (a2 - 6a + 9, a2 - 9)', 'm.c.d. (6mn2, 9m2 n3, m3 p2)']
let p3finales = ['4xyz', '3a2 (x-3)2', '(a-3)', '18m3 n3 p2']

p3iniciales.forEach(element => {
    arrayElemInicio.push(`<div class="divinicio">${ponerExpresionPotencia(element)}</div>`)
});

p3finales.forEach(element => {
    arrayElemFin.push(`<div class="divfin">${ponerExpresionPotencia(element)}</div>`)
});


function pregunta3() {
    let core = validarUnir1_1()
    let total = Math.max((core * 1), 0)
    $("#pre3a").val(parseFloat(total).toFixed(2));
}





// Datos de ejemplo
let p4actividad = [
    { item: `3x2 y3 z, 4x3 y3 z2 , -2x4 y3 z3`, respuesta: `-12x4y3z3` },
    { item: `-5a2 b3 c4 , 7a3 b3 c4 , -3a4 b3 c4`, respuesta: `-105a4b3c4` },
    { item: `2m3 n2 p, -6m4 n2 p2 , 5m5 n2 p3`, respuesta: `-30m5n2p3` },
    { item: `8x3 y2 z, -9x4 y2 z2 , 6x5 y2 z3`, respuesta: `-72x5y2z3` },
    { item: `-4a2 b3 c, 3a3 b3 c2 , -7a4 b3 c3`, respuesta: `-84a4b3c3` },
    { item: `10p3 q2 r, -2p4 q2 r2 , 8p5 q2 r3`, respuesta: `-40p5q2r3` },
    { item: `-6x2 y3 z4 , 5x3 y3 z4 , -3x4 y3 z4`, respuesta: `30x4y3z` },
    { item: `9a3 b4 c5 , -2a4 b4 c5 , 7a5 b4 c5`, respuesta: `-126a5b4c` },
    { item: `-7m2 n3 p4 , 6m3 n3 p4 , -5m4 n3 p4`, respuesta: `-210m4n3p4` },
    { item: `3x4 y5 z6 , -4x5 y5 z6 , 2x6 y5 z6`, respuesta: `-12x6y5z6` },
];
mezclar(p4actividad)
let p4respuestas = [];

let p4items = p4actividad.map((p, i) => {
    p4respuestas.push(p.respuesta);
    let expresion = ponerExpresionPotencia(p.item);
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b> ${expresion} &emsp;&emsp;
                    <div id="p4var${i}" style="padding:5px">m. c. m. = <span id="resultado_p4${i}"></span></div>
                </div>
                <div class="info p2_input_boton">
                    <input type="text" class="input-p2-expresion" id="expresion_p4${i}" placeholder="Escribe a2 b4 z"  autocomplete="off" style="width:300px"/>
                    <button onclick="formatearExpresion('p4${i}')" class="btn-success">Agregar expresión</button>
                </div>
            </div>`;
}).join('');

// Inyectamos los items generados en el DOM
$("#p4act").html(p4items);





function pregunta4() {
    let core = 0
    for (let i = 0; i < p4respuestas.length; i++) {
        let dato = procesarTexto($("#expresion_p4" + i).val())
        if (dato == p4respuestas[i]) {
            core++;
            $("#p4var" + i).addClass('bien');
        } else {
            $("#p4var" + i).addClass('mal');
        }
    }
    let total = (core / p4respuestas.length) * 1.5;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}




var p5act = [
    { enunciado: 'm. c. d. (84, 693) = 21', correcta: 'V' },
    { enunciado: 'm. c. m. (126, 360) = 2 420', correcta: 'F' },
    { enunciado: 'm. c. d. (847, 75) = 5', correcta: 'F' },
    { enunciado: 'm. c. m. (847, 75) = 63 525', correcta: 'V' },
    { enunciado: 'm. c. m. (84, 63) = 52', correcta: 'F' },
    { enunciado: 'm. c. d. (63, 126) = 63', correcta: 'V' },
    { enunciado: 'm. c. d. (3 150, 1 302) = 42', correcta: 'V' },
    { enunciado: 'm. c. m. (2 025, 75) = 4 050', correcta: 'F' },
]

let p5respuestas = enunciadoSelectOpcion(p5act, "#p5act", '5', 'vof')
// console.log(p5respuestas)

function pregunta5() {
    let core = validarExactas(p5respuestas, '#p5var')
    let total = core * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}


var rutinaPensamiento = [
    /// lo que se, lo que quiero saber y lo que haré
    { img: '<img src="img/ico_loquese.png" alt="">', txt2: 'del m. c. d y m. c. m', color2: '#DCBCCD', },
    { img: '<img src="img/ico_loquequierosaber.png" alt="">', txt2: '¿Cómo este conocimiento puede contribuir a mis metas a largo plazo?', color2: '#CCEDE8', },
    { img: '<img src="img/ico_loquehare.png" alt="">', txt2: '¿Puedo buscar la información que necesito para aclarar mis dudas?', color2: '#FCDCC0', },
]
rutinaPensamiento.forEach(element => {
    /// lo que se, lo que quiero saber, lo que hare
    $("#rutinaPensamiento").append(`
        <div style="position: relative;border-radius:5px;width:280px;margin:5px;text-align:center">
            ${element.img}
            <div style="padding: 5px;margin: 5px;background-color: ${element.color2} !important;print-color-adjust: exact;border-radius: 5px;margin-top:-5px">
                <div>
                    <div style="margin-bottom: 5px;">
                       ${element.txt2}
                    </div>
                    <textarea class="form-control bg-blanco" placeholder="Escribir" rows="3"></textarea>
                </div>
            </div>
        </div>
    </div>`)
});


function pregunta7() {
    let core = 0
    let dato = procesarTexto($("#expresion_p7").val())
    if (dato == '4a2(a-b)(a+b)') {
        core++;
        $("#resultado_p7").addClass('bien');
    } else {
        $("#resultado_p7").addClass('mal');
    }
    let total = (core / 1) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}

function pregunta8() {
    let core = 0
    let dato = procesarTexto($("#expresion_p8").val())
    if (dato == '6x2y2') {
        core++;
        $("#resultado_p8").addClass('bien');
    } else {
        $("#resultado_p8").addClass('mal');
    }
    let total = (core / 1) * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}




function pregunta9() {
    let core = 0
    let dato = procesarTexto($("#expresion_p9").val())
    if (dato == '3x(x+2)') {
        core++;
        $("#resultado_p9").addClass('bien');
    } else {
        $("#resultado_p9").addClass('mal');
    }
    let total = (core / 1) * 1;
    $("#pre9a").val(parseFloat(total).toFixed(2));
}





// var coevaluacion = [
//     `¿Inventé con mis compañeros una historia para un cuento ? `,
//     `¿Pude crear personajes y un lugar para el desarrollo de un cuento ? `,
//     `¿Expresé mis ideas y respeté las opiniones de mis compañeros ? `,
//     `¿Apoyé a mi equipo durante todo el trabajo ? `
// ]

var itemsReflexiono = [`¿Por qué es importante para mí comprender el uso del mínimo común múltiplo y máximo común divisor cuando opero con monomios o polinomios en mis actividades diarias?`]

function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta7();
    pregunta8();
    pregunta9();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre9a = parseFloat(document.getElementById("pre9a").value)
    cor = pre1a + pre2a + pre3a + pre4a + pre5a + pre7a + pre8a + pre9a
    Calculo_nota();
    EndActivity()
}
