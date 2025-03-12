var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.  <br>`,
    `En la actividad 2, 3, 4, 5 y 6. Usa la pizarra para resolver cada ejercicio.  <br>`,
]
var unidad = '3'
$("#numTema").html('5')
$("#temaActividad").html('Operaciones combinadas con fracciones algebraicas')
$("#n_pagina").html("117");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(380, 500, 'none', 0, 0)
})


var p1act = [
    { enunciado: `Al resolver operaciones combinadas sin signos de agrupación, primero se realizan las multiplicaciones y divisiones, y luego las sumas y restas.`, correcta: `V` },
    { enunciado: `Si una expresión tiene signos de agrupación, las operaciones fuera de estas se resuelven antes que las del interior.`, correcta: `F` },
    { enunciado: `El recíproco de una fracción algebraica se obtiene invirtiendo el numerador y el denominador.`, correcta: `V` },
    { enunciado: `Al realizar una división entre dos fracciones algebraicas, se multiplica la primera por el inverso de la segunda.`, correcta: `V` },
    { enunciado: `Si <img src="img/i1_p118_act1.png"> es igual a  <img src="img/i2_p118_act1.png">, entonces el resultado simplificado es <img src="img/i3_p118_act1.png">.`, correcta: `F` },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')

function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    let total = (core) * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}



let p2actividad = [
    `<img src="img/i1_p114_act2.png"/>`,
    `<img src="img/i2_p114_act2.png"/>`,
    `<img src="img/i3_p114_act2.png"/>`,
    `<img src="img/i4_p114_act2.png"/>`,
    `<img src="img/i5_p114_act2.png"/>`,
    `<img src="img/i6_p114_act2.png"/>`,
    `<img src="img/i7_p114_act2.png"/>`,
];
mezclar(p2actividad)
let p2respuestas = [];

let p2items = p2actividad.map((p, i) => {
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b>
                     ${p} 
                </div>
                <div class="pizarra-matematicas" id="pizarra2${i}"></div>
            </div>`;
}).join('');
$("#p2act").html(p2items);





let p3actividad = [
    `<img src="img/i1_p114_act3.png"/>`,
    `<img src="img/i2_p114_act3.png"/>`,
    `<img src="img/i3_p114_act3.png"/>`,
    `<img src="img/i4_p114_act3.png"/>`,
];
mezclar(p3actividad)
let p3respuestas = [];

let p3items = p3actividad.map((p, i) => {
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b> ${p} 
                </div>
                <div class="pizarra-matematicas" id="pizarra3${i}"></div>
            </div>`;
}).join('');
$("#p3act").html(p3items);





let p4actividad = [
    `<img src="img/i1_p115_act4.png"/>`,
    `<img src="img/i2_p115_act4.png"/>`,
    `<img src="img/i3_p115_act4.png"/>`,
];
mezclar(p4actividad)
let p4respuestas = [];

let p4items = p4actividad.map((p, i) => {
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b> ${p} 
                </div>
                <div class="pizarra-matematicas" id="pizarra4${i}"></div>
            </div>`;
}).join('');
$("#p4act").html(p4items);



var coevaluacion = [
    `¿Enfrenté obstáculos en el proceso de resolución de ejercicios?`,
    `¿Pude trabajar de manera adecuada con todos los integrantes del grupo?`,
    `¿Justifiqué los procesos y estrategias utilizadas en la resolución de problemas?`,
]

var itemsReflexiono = [`¿Cómo puedo mejorar mi habilidad para resolver casos de factorización más rápidamente?`]

function total() {
    pregunta1();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    cor = pre1a
    Calculo_nota();
    EndActivity()
}
