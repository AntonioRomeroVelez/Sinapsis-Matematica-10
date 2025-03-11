var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Completa correctamente.  <br>`,
    `En la actividad 2. Selecciona V o F.  <br>`,
    `En la actividad 3. Selecciona el círculo amarillo luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 4 y 5. Usa la pizarra para realizar cada ejercicio.  <br>`,
    `En la actividad 6. Escribe correctamente.  <br>`,
]
var unidad = '3'
$("#numTema").html('2')
$("#temaActividad").html('Expresiones algebraicas racionales')
$("#n_pagina").html("102");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(360, 500, 'none', 0, 40)
})


let p1actividad = [
    { img: '<img src="img/i1_p102_act1.png">', resp1: '4', resp2: '3', resp3: 'x' },
    { img: '<img src="img/i2_p102_act1.png">', resp1: '5', resp2: '2', resp3: 'x, y' },
    { img: '<img src="img/i3_p102_act1.png">', resp1: '3', resp2: '2', resp3: 's' },
    { img: '<img src="img/i4_p102_act1.png">', resp1: '2', resp2: '3', resp3: 'a' },
]
mezclar(p1actividad)

let p1items = p1actividad.map((el, i) => {
    let item = `<tr>
        <td>${el.img}</td>
        <td><input class="caracter2 p1var" data-info="${el.resp1}"></td>
        <td><input class="caracter2 p1var" data-info="${el.resp2}"></td>
        <td><select class="selectbox2 caracter4 p1var p1selc" data-info="${el.resp3}"></select></td>
    </tr>`
    return item
}).join('')

$("#p1act").html(`<table class="table-bordered-1" style="width:450px">
        <tr>
            <td class="bg-verdesuave">Polinomio</td>
            <td class="bg-amarillosuave">Grado</td>
            <td class="bg-rosa">N° de términos</td>
            <td class="bg-naranjasuave">Variable</td>
        </tr>
        ${p1items}
    </table>`)

let p1selc = ['x', 's', 'a', 'x, y', 'a, b', 's, t']
asignarOpcSelVacio(p1selc, ".p1selc")



function pregunta1() {
    let core = validarCajas('p1var')
    let total = core * 1.5;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


function mostrarExpresionPotencia() {
    let expresion = document.getElementById("expresion").value;
    expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
        return p1 + `<sup>${p2}</sup>`;
    });
    document.getElementById("resultado").innerHTML = expresion;
}




var p2act = [
    { enunciado: ponerExpresionPotencia('x - 4y = (x + 4y)(x - y)'), correcta: 'F' },
    { enunciado: ponerExpresionPotencia('3x2 - 5x - 2 = (x - 2)(3x + 1)'), correcta: 'V' },
    { enunciado: ponerExpresionPotencia('6x2 + 13x + 5 = (3x + 1)(2x + 5)'), correcta: 'F' },
    { enunciado: ponerExpresionPotencia('x2 - 4y2 = (x + 2y)(x - 2y)'), correcta: 'V' },
    { enunciado: ponerExpresionPotencia('x3 - 27y3 = (x + 9y)( x2 - 9xy + 9y2 )'), correcta: 'F' },
    { enunciado: ponerExpresionPotencia('x3 - 27y3 = (x - 9y)( x2 + 9xy + 9y2 )'), correcta: 'V' },
]

let p2respuestas = enunciadoSelectOpcion(p2act, "#p2act", '2', 'vof')
// console.log(p2respuestas)



function pregunta2() {
    let core = validarExactas(p2respuestas, '#p2var')
    let total = (core) * 1.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


let arrayElemInicio = [
    `<div class="divinicio">Diferencia de cuadrados</div>`,
    `<div class="divinicio">Trinomio Cuadrado Perfecto (TCP)</div>`,
    `<div class="divinicio">Trinomio de la forma <br> x<sup>2n</sup> + bx<sup>n</sup> + c</div>`,
    `<div class="divinicio">Trinomio de la forma <br> ax<sup>2n</sup> + bx<sup>n</sup> + c</div>`,
    `<div class="divinicio">Diferencia de Cubos Perfectos</div>`,
]
let arrayElemFin = [
    `<div class="divfin">${ponerExpresionPotencia('9x2 - 4y2')}</div>`,
    `<div class="divfin">${ponerExpresionPotencia('x2 + 6xy + 9y2')}</div>`,
    `<div class="divfin">${ponerExpresionPotencia('x2 + 3x - 10')}</div>`,
    `<div class="divfin">${ponerExpresionPotencia('6x2 + 13x + 5')}</div>`,
    `<div class="divfin">${ponerExpresionPotencia('27 - y3')}</div>`,
]
function pregunta3() {
    let core = validarUnir1_1()
    let total = Math.max((core * 1.5), 0)
    $("#pre3a").val(parseFloat(total).toFixed(2));
}



let p4actividad = [
    `<img src="img/i1_p102_act4.png"/>`,
    `<img src="img/i2_p102_act4.png"/>`,
    `<img src="img/i3_p102_act4.png"/>`,
    `<img src="img/i4_p102_act4.png"/>`,
    `<img src="img/i5_p102_act4.png"/>`,
    `<img src="img/i6_p102_act4.png"/>`,
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



let p5actividad = [
    `<img src="img/i1_p102_act5.png"/>`,
    `<img src="img/i2_p102_act5.png"/>`,
    `<img src="img/i3_p102_act5.png"/>`,
    `<img src="img/i4_p102_act5.png"/>`,
    `<img src="img/i5_p102_act5.png"/>`,
];
mezclar(p5actividad)
let p5respuestas = [];

let p5items = p5actividad.map((p, i) => {
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b> ${p} 
                </div>
                <div class="pizarra-matematicas" id="pizarra5${i}"></div>
            </div>`;
}).join('');
$("#p5act").html(p5items);


let p6actividad = [
    `<img src="img/i1_p102_act6.png"/>`,
    `<img src="img/i2_p102_act6.png"/>`,
    `<img src="img/i3_p102_act6.png"/>`,
];
mezclar(p6actividad)
let p6items = p6actividad.map((p, i) => {
    return `<div class="p6_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b> ${p} 
                </div>
                <div>
                Lado 1: <input class="caracter9"> y 
                Lado 2: <input class="caracter9">
                </div>
            </div>`;
}).join('');
$("#p6act").html(p6items);





var coevaluacion = [
    `Tomé en cuenta las ideas y opiniones de mis compañeros durante la actividad.`,
    `Considero que mis aportes fueron valiosos para el resultado final.`
]

var itemsReflexiono = [`¿Qué estrategias o técnicas utilicé para mejorar mi aprendizaje y cuál fue mi debilidad al resolver los ejercicios de
aplicación?`]

function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    cor = pre1a + pre2a + pre3a
    Calculo_nota();
    EndActivity()
}
