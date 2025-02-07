var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Usa la pizarra para resolver el ejercicio y selecciona la opción correcta.  <br>`,
    `En la actividad 2. Selecciona V o F.  <br>`,
    `En la actividad 3. Selecciona correctamente los elementos y el nombre del cuerpo geométrico.  <br>`,
    `En la actividad 4 y 5. Usa las herramientas de dibujo y escribe en el recuadro de texto.  <br>`,
    `En la actividad 6, 7, 9 y 12. Usa la pizarra para resolver el ejercicio.  <br>`,
    `En la actividad 10, 11, 13 y 15. Escribe en los recuadros de texto.  <br>`,
    `En la actividad 14. Selecciona para encerrar la opción correcta.  <br>`,
]

$("#temaActividad").html('Evaluación diagnóstica')
$("#n_pagina").html("0");
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

    for (let i = 0; i < p9actividad.length; i++) {
        $('<style>').prop('type', 'text/css').html(`#pizarra9${i}>div>.wrs_toolbar { display: none !important; }`).appendTo('head');
    }

})

var p1opciones = [
    { title: `<div class="fraccionCaja" style="margin:10px 5px"><span class="numeradorCaja">7</span><span class="denominadorCaja">9</span></div>`, resp: '1', },
    { title: `<div class="fraccionCaja" style="margin:10px"><span class="numeradorCaja">9</span><span class="denominadorCaja">11</span></div>`, resp: '0', },
    { title: `<div class="fraccionCaja" style="margin:10px"><span class="numeradorCaja">9</span><span class="denominadorCaja">7</span></div>`, resp: '1', },
    { title: `<div class="fraccionCaja" style="margin:10px"><span class="numeradorCaja">11</span><span class="denominadorCaja">9</span></div>`, resp: '1', },
];

SelSimple(p1opciones, "#p1act", 1)



function pregunta1() {
    let core = validarSelSimple(1)
    let total = (core / 1) * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


var p2act = [
    { enunciado: 'Todos los ángulos rectos son congruentes.', correcta: 'V' },
    { enunciado: 'Dos triángulos son congruentes si tienen sus ángulos respectivamente congruentes.', correcta: 'F' },
    { enunciado: 'Dos triángulos equiláteros son congruentes siempre.', correcta: 'F' },
]
let p2respuestas = enunciadoSelectOpcion(p2act, "#p2act", '2', 'vof')

function pregunta2() {
    let core = validarExactas(p2respuestas, '#p2var')
    let total = Math.max(core * 1, 0);
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


let p3opciones = ['Diagonal', 'Cara', 'Ángulo poliedro', 'Ángulo diedro', 'Arista', 'Vértice']
let p3Nombres = ['Ortoedro', 'Cubo', 'Prisma', 'Pirámides', 'Tetraedro']
asignarOpcionesAselect(p3opciones, ".p3sel")
asignarOpcionesAselect(p3Nombres, ".p3selNombre")

function pregunta3() {
    let core = validarExactas(['Diagonal', 'Cara', 'Ángulo poliedro', 'Vértice', 'Arista', 'Ángulo diedro', 'Ortoedro'], "#p3var")
    let total = (core / 1) * 1;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}


var p8act = [
    'El término con <select class="selectbox2 p8sel" id="p8var0"></select> determina el grado del polinomio.',

    'Un polinomio de solo un término se conoce también como <select class="selectbox2 p8sel" id="p8var1"></select>.',

    'Al realizar operaciones algebraicas con polinomios, se suman o se restan los <select class="selectbox2 p8sel" id="p8var2"></select>.',

    'Para realizar el  <select class="selectbox2 p8sel" id="p8var3"></select> de polinomios hay que ordenar el <select class="selectbox2 p8sel" id="p8var4"></select> y el <select class="selectbox2 p8sel" id="p8var5"/> en forma descendente.',
]
mezclar(p8act)
let p8items = p8act.map(element => {
    return `<li style="margin-top:10px">${element}</li>`
}).join('')
$("#p8act").html(`<ol class="li-letter">${p8items}</ol>`)


let p8opciones = ['mayor exponente', 'monomio', 'términos semejantes', 'cociente', 'dividendo', 'divisor'];
asignarOpcionesAselect(p8opciones, ".p8sel")

let p8respuestas = ['mayor exponente', 'monomio', 'términos semejantes', 'cociente', 'dividendo', 'divisor']
function pregunta8() {
    let core = validarExactas(p8respuestas, "#p8var");;
    let total = (core / 1) * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}

let p9actividad = [
    `( 2x - 1 )<sup>2</sup>`,
    `( -y + 3x )<sup>2</sup>`,
    `25 - y<sup>2</sup>`,
    `4a<sup>2</sup> -  144`,
]
mezclar(p9actividad)

let p9items = p9actividad.map((element, index) => {

    return `<div style="margin:10px">
                <b class="txt-azul">${letrasLista[index]}</b> ${element}
                <div id="pizarra9${index}" style="width: 350px;height: 200px;"></div>
            </div>`
}).join('')

$("#p9act").html(p9items)

let p11actividad = [
    '¿Cuál es la población objeto de estudio?',
    '¿Qué información se recolectó?',
    '¿Cuál es la muestra seleccionada?',
    '¿Qué tipo de variables se muestra en la información?',
]
preguntasArray(p11actividad, 'p11act')


let p13actividad = [
    'Equivalencia lógica',
    'Tautología',
    'Contradicción',
]

preguntasArray(p13actividad, 'p13act')



var p14opciones = [
    { title: '<img src="img/i1_p0_act14.png">', resp: '0', },
    { title: '<img src="img/i2_p0_act14.png">', resp: '1', },
    { title: '<img src="img/i3_p0_act14.png">', resp: '1', },
    { title: '<img src="img/i4_p0_act14.png">', resp: '1', },
];

SelSimple(p14opciones, "#p14act", 14)



function pregunta14() {
    let core = validarSelSimple(14)
    let total = (core / 1) * 1;
    $("#pre14a").val(parseFloat(total).toFixed(2));
}


let p15actividad = [
    'Seguro:',
    'Imposible:',
    'Muy probable:',
    'oco probable:',
]
preguntasArray(p15actividad, 'p15act')

// var coevaluacion = [
//     `¿Mis ideas fueron expresadas de manera clara y organizada?`,
//     `¿Colaboré con la exposición del tema?`
// ]
// var itemsReflexiono = [`¿Cómo han ayudado a la economía del país los diferentes auges económicos que ha tenido?`]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta8();
    pregunta14();
    // pregunta6();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre14a = parseFloat(document.getElementById("pre14a").value)
    // var pre6a = parseFloat(document.getElementById("pre6a").value)
    cor = ((pre1a + pre2a + pre3a + pre8a + pre14a) / 15) * 10
    //  + pre6a
    Calculo_nota();
    EndActivity()
}
