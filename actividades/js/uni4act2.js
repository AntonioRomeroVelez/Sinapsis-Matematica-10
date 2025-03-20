var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Usa la pizarra para resolver el ejercicio y graficar la recta.  <br>`,
    `En la actividad 2 y 3. Usa la pizarra para resolver el ejercicio.  <br>`,
    `En la actividad 4. Selecciona para pintar la opción correcta.  <br>`,
    `En la actividad 5. Escribe en los recuadros de texto.  <br>`,
]
var unidad = '4'
$("#numTema").html('2')
$("#temaActividad").html('Métodos de solución de sistemas de ecuaciones lineales con dos incógnitas')
$("#n_pagina").html("140");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA



$(document).ready(function () {
    agregarEcuacion_campo(p1ecuaciones, "p1ecuacion")
    agregarEcuacion_campo(p2ecuaciones, "p2ecuacion")
    agregarEcuacion_campo(p3ecuaciones, "p3ecuacion")
    agregarEcuacion_campo(p4ecuaciones, "p4ecuacion")
    agregarEcuacion_campo(p5ecuaciones, "p5ecuacion")

})

let p1ecuaciones = [
    `\\[
        \\left\\{
            \\begin{aligned}
                2x - y = 3 \\\\
                x + 2y = 4
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                4x + y = 7 \\\\
                5x - y = 3
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                6x - 3y = 9 \\\\
                4x + 2y = 6
            \\end{aligned}
        \\right.
    \\]`,
]

let p1actividad = [
    `<span id="p1ecuacion0"></span>`,
    `<span id="p1ecuacion1"></span>`,
    `<span id="p1ecuacion2"></span>`,
]
mezclar(p1actividad)
let p1items = p1actividad.map((e, i) => {
    let resultado = `<div style="margin:5px 0px">
                        <div class="d-i-f-min">
                            <div>
                                <div style="display:inline-flex;align-items:center;justify-content:center"><b class="txt-azul">${letrasLista[i]}</b> &emsp;${e}</div>
                                <div id="pizarra1${i}" style="width:480px;height:250px"></div>
                            </div>                        
                            <div class="my-drawing" style="width:440px"></div>
                        </div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p1act").html(p1items);



let p2ecuaciones = [
    `\\[
        \\left\\{
            \\begin{aligned}
                8x - 4y = 12 \\\\
                3x - y = 6
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                15x + 10y = 20 \\\\
                4x + y = 8
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                -9x - y = 15 \\\\
                12x - 4y = -30
            \\end{aligned}
        \\right.
    \\]`,
]

let p2actividad = [
    `<span id="p2ecuacion0"></span>`,
    `<span id="p2ecuacion1"></span>`,
    `<span id="p2ecuacion2"></span>`,
]
mezclar(p2actividad)
let p2items = p2actividad.map((e, i) => {
    let resultado = `<div style="margin:5px 0px">
                        <div>
                            <div style="display:inline-flex;align-items:center;justify-content:center"><b class="txt-azul">${letrasLista[i]}</b> &emsp;${e}</div>
                            <div id="pizarra2${i}" style="width:480px;height:250px"></div>
                        </div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p2act").html(p2items);



let p3ecuaciones = [
    `\\[
        \\left\\{
            \\begin{aligned}
                10x + y = 25 \\\\
                14x + 28y = 63
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                25x - 40y = 20 \\\\
                4x + 16y = 56
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                4x + y = 5 \\\\
                6x + 8y = 14
            \\end{aligned}
        \\right.
    \\]`,
]


let p3actividad = [
    `<span id="p3ecuacion0"></span>`,
    `<span id="p3ecuacion1"></span>`,
    `<span id="p3ecuacion2"></span>`,
]
mezclar(p3actividad)
let p3items = p3actividad.map((e, i) => {
    let resultado = `<div style="margin:5px 0px">
                        <div>
                            <div style="display:inline-flex;align-items:center;justify-content:center"><b class="txt-azul">${letrasLista[i]}</b> &emsp;${e}</div>
                            <div id="pizarra3${i}" style="width:480px;height:250px"></div>
                        </div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p3act").html(p3items);


function agregarEcuacion_campo(array, div_id) {
    array.forEach((element, index) => {
        const equationElement = document.createElement('p');
        equationElement.classList.add('ecuacionCSS');
        equationElement.innerHTML = element;
        // Insertar la ecuación en el contenedor
        document.getElementById(`${div_id}${index}`).appendChild(equationElement);
        // Renderizar la ecuación con MathJax
        MathJax.typesetPromise();
    });
}

// pregunta 4


let p4ecuaciones = [
    `\\[
        \\left\\{
            \\begin{aligned}
                x + 3y = 9 \\\\
                2x - 4y = 8
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                4x + y = 7 \\\\
                4x + 2y = 10
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                -6x + 9y = 12 \\\\
                10x - 5y = 20
            \\end{aligned}
        \\right.
    \\]`,
]

var p4act = [
    { enunciado: `<span id="p4ecuacion0"></span>`, respuesta: ['(6,1)', '(6,6)', '(4,1)', '(6,3)'], },
    { enunciado: `<span id="p4ecuacion1"></span>`, respuesta: ['(1,3)', '(1,4)', '(0,3)', '(1,1)'], },
    { enunciado: `<span id="p4ecuacion2"></span>`, respuesta: ['(4,4)', '(4,0)', '(0,4)', '(1,4)'], },
];
literalesRespuestasSeleccionSimple(p4act, "#p4act", 4);



function pregunta4() {
    let core = validarLiteralesRespuestasSeleccionSimple(p4act, 4);
    let total = core * 2;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}





let p5ecuaciones = [
    `\\[
        \\left\\{
            \\begin{aligned}
                21x + 28y = 7 \\\\
                6x + 3y = 12
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                5x + 10y = 15 \\\\
                9x + y = 10
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                7x - 3y = 11 \\\\
                -x + 5y = 3
            \\end{aligned}
        \\right.
    \\]`,
]


let p5actividad = [
    { item: `<span id="p5ecuacion0"></span>`, resp: '(3,-2)' },
    { item: `<span id="p5ecuacion1"></span>`, resp: '(1, 1)' },
    { item: `<span id="p5ecuacion2"></span>`, resp: '(2, 1)' },
]
let p5respuestas = []
mezclar(p5actividad)
let p5items = p5actividad.map((e, i) => {
    p5respuestas.push(e.resp)
    let resultado = `<div style="margin:6px;border:solid 1px silver;padding:10px">
                        <div style="display:inline-flex;align-items:center;justify-content:center"><b class="txt-azul">${letrasLista[i]}</b> &emsp;${e.item}</div>
                        <div><i class="txt-morado">Resp.</i> <input class="p5input" id="p5var${i}" placeholder="(4,5)"/></div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p5act").html(p5items);


function pregunta5() {
    let core = validarExactas(p5respuestas, "#p5var");
    let total = core * 2;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}





var coevaluacion = [
    `¿Sé respetar las opiniones dadas por mi compañero?`,
    `¿Puedo resolver sistemas de ecuaciones por diferentes métodos?`,
]

var itemsReflexiono = [`¿Cómo puedo explicar un concepto matemático a un compañero que no lo entiende?`]

function total() {
    pregunta4();
    pregunta5();
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    cor = pre4a + pre5a
    Calculo_nota();
    EndActivity()
}
