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
var unidad = '4'
$("#numTema").html('1')
$("#temaActividad").html('Sistema de ecuaciones lineales')
$("#n_pagina").html("134");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
})



// Lista de números a procesar
var p1actividad = [
    { item1: 'x + 3y = 44', item2: '2x - 5y = - 5', punto: '(5,3)', resp: 'Sí es solución' },
    { item1: 'x - 2y = 54', item2: '5x + 7y = 62', punto: '(6,2)', resp: 'No es solución' },
    { item1: '-9x - 3y = 21', item2: '10x + 8y = 0', punto: '(-4,5)', resp: 'Sí es solución' },
    { item1: '3x + 4y = 24', item2: '2x - y = 1', punto: '(2,3)', resp: 'No es solución' },
    { item1: '-6x + 2y = 12', item2: '8x - 5y = -17', punto: '(1,5)', resp: 'No es solución' },
];
mezclar(p1actividad)
let p1respuestas = []

let p1items = p1actividad.map((e, i) => {
    p1respuestas.push(e.resp)
    let resultado = `<div class="p1_container">
                    <div><b class="txt-azul">${letrasLista[i]}</b> &emsp;<i>${e.item1}</i>&emsp; y el punto &emsp;<i>${e.punto}</i></div>
                    <div>&emsp;&emsp;<i>${e.item2}</i></div>
                    <div id="pizarra1${i}" class="pizarra-matematica"></div>
                    <div><b class="txt-morado"><i>Resp: </i></b><select class="selectbox2 p1sel" id="p1var${i}"></select></div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p1act").html(`${p1items}`);

let p1opciones = ['Sí es solución', 'No es solución']
asignarOpcionesAselect(p1opciones, '.p1sel')




function pregunta1() {
    let core = validarExactas(p1respuestas, "#p1var")
    let total = core * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}





var p2actividad = [
    { item1: '2 + 3y = 6', item2: '2x + 3y = 4', img: '', resp: 'paralelas' },
    { item1: 'x - 2y = 1', item2: '2x + y = 7', img: '', resp: 'secantes' },
    { item1: '-2x + 3y = -6', item2: '-4x + 6y = -12', img: '', resp: 'coincidentes' },
];
// mezclar(p2actividad)
let p2respuestas = []

let p2items = p2actividad.map((e, i) => {
    p2respuestas.push(e.resp)
    let resultado = `<div class="p2_container">
                    <div><b class="txt-azul">${letrasLista[i]}</b> &emsp;<i>${e.item1}</i></div>
                    <div>&emsp;&emsp;<i>${e.item2}</i> &emsp;<b class="txt-morado"><i>Resp: </i></b><select class="selectbox2 p2sel" id="p2var${i}"></select></div>
                    <div class="my-drawing canvasp2" style="width:100%"></div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p2act").html(p2items);

let p2opciones = ['paralelas', 'secantes', 'coincidentes']
asignarOpcionesAselect(p2opciones, '.p2sel')



function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var")
    let total = core * 1;
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
