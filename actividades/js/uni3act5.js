var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.  <br>`,
    `En la actividad 2, 3, 5 y 6. Usa la pizarra para resolver cada ejercicio.  <br>`,
    `En la actividad 4. Escribe en los recuadros de texto.   <br>`,
    `En la actividad 7. Escribe la expresión en el campo de texto y luego presiona el botón 'Agregar expresión' para formatearla y agregarla correctamente.  <br>`,
]
var unidad = '3'
$("#numTema").html('5')
$("#temaActividad").html('Operaciones combinadas con fracciones algebraicas')
$("#n_pagina").html("118");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

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
    `<img src="img/i1_p118_act2.png"/>`,
    `<img src="img/i2_p118_act2.png"/>`,
    `<img src="img/i3_p118_act2.png"/>`,
    `<img src="img/i4_p118_act2.png"/>`,
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








function mostrarExpresionPotencia() {
    let expresion = document.getElementById("expresion").value;
    expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
        return p1 + `<sup>${p2}</sup>`;
    });
    document.getElementById("resultado").innerHTML = expresion;
}




// Función para formatear la expresión ingresada por el usuario
function formatearExpresionIngresada(id) {
    let expresion = $(`#expresion_${id}`).val().toLowerCase();
    expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
        return p1 + `<sup>${p2}</sup>`;  // Convierte 'x2' en 'x<sup>2</sup>'
    });
    // console.log(expresion)
    $(`#resultado_${id}`).html(expresion);
    $(`#expresion_${id}`).val('')
}


let p7actividad = [
    { item1: `3x2 + 4x - 5`, respuesta: `3x2`, item2: `= 9x4 + 12  x3 - 15x2` },
    { item1: `4x3 + 6x2 - 9`, respuesta: `4x3`, item2: `= 16x6 + 24x5 - 36x3` },
    { item1: `5x4 y2 - 7xy + 3`, respuesta: `2x4 y2`, item2: `= 10x8 y4 - 14x5 y3  + 6x4 y2` },
    { item1: `2xy + 3y2 `, respuesta: `4x2 y2`, item2: `= 8x3 y3  + 12x2 y4` },
    { item1: `-x4  + 5x2 - 2`, respuesta: `x4`, item2: `= -x8  + 5x6 - 2x4` },
    { item1: `6x2 y3 - 4xy2 + 3`, respuesta: `3xy3`, item2: `= 18x3 y6 - 12x2 y5  + 9xy3` },
]
mezclar(p7actividad)
let p7respuestas = [];

let p7items = p7actividad.map((p, i) => {
    p7respuestas.push(p.respuesta);
    let expresion1 = ponerExpresionPotencia(p.item1);
    let expresion2 = ponerExpresionPotencia(p.item2);
    return `<tr>
                <td style="text-align:left;padding-left:3px">
                    <b class="txt-azul">${letrasLista[i]}</b> ${expresion1}
                </td>
                 <td style="width:100px">
                    <div style="padding:5px"><span id="resultado_${i}"></span></div>
                </td>
                <td style="width:140px" class="info">
                    <div style="padding:5px"><span id="resultado_${i}"></span></div>
                    <div class=" p2_input_boton" style="margin:0px 5px 5px 5px">
                        <input type="text" class="input-p2-expresion" id="expresion_${i}" placeholder="a2 b3 z"  autocomplete="off" style="width:100px;outline:none;margin:2px"/>
                        <center><button onclick="formatearExpresionIngresada('${i}')" class="btn-success" style="font-size:15px;border-radius:5px;border:none;display:block">Agregar expresión</button></center>
                    </div>
                </td>
                <td style="text-align:left;padding-left:3px">
                    ${expresion2} 
                </td>
                
            </tr>`;
}).join('');

// console.log(p7respuestas)

// Inyectamos los items generados en el DOM
$("#p7act").html(`<table class="table-bordered-1" style="width:600px">
        ${p7items}
    </table>`);


function pregunta7() {
    let core = 0
    for (let i = 0; i < p7respuestas.length; i++) {
        let dato = procesarTexto($("#resultado_" + i).html().replaceAll('<sup>', '').replaceAll('</sup>', ''))
        let correcto = procesarTexto(p7respuestas[i])
        // console.log(dato)
        // console.log(correcto)
        if (dato == correcto) {
            core++;
            $("#resultado_" + i).parent().parent().addClass('bien');
        } else {
            $("#resultado_" + i).parent().parent().addClass('mal');
        }
    }
    let total = (core / p7respuestas.length) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}


// var coevaluacion = [
//     ``,
//     ``,
// ]

var itemsReflexiono = [`¿En qué contexto de mi vida cotidiana puedo utilizar las operaciones combinadas de fracciones algebraicas?`]

function total() {
    pregunta1();
    pregunta7();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    cor = pre1a + pre7a
    Calculo_nota();
    EndActivity()
}
