var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona y empareja correctamente.  <br>`,
    `En la actividad 2, 3, 5, 8 y 9. Escribe en cada recuadro de texto.   <br>`,
    `En la actividad 4. Selecciona la palabra correcta para cada imagen.  <br>`,
    `En la actividad 6. El nombre correcto para cada parte del microscopio.  <br>`,
    `En la actividad 7. Escribe el número 1, 2, 3 y 4 para ordenar la fase de la nutrición celular.  <br>`,
    `En la Autoregulación. Selecciona para marcar con una X.  <br>`,
]

$("#temaActividad").html('Evaluación sumativa')
$("#n_pagina").html("44");
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA




$(document).ready(function () {
    $("#p1actInicio").prepend(`<div class="cajaRelacionarLiterales p1titulo1">Propiedad</div>`)
    $("#p1actFin").prepend(`<div class="cajaRelacionarLiterales p1titulo2">Ejemplo</div>`)


})



let p1actividad = [
    { literal: 'Metabolismo', enunciado: '<img src="img/i1_p44_act1.jpg" alt="">' },
    { literal: 'Reproducción', enunciado: '<img src="img/i2_p44_act1.jpg" alt="">' },
    { literal: 'Adaptación', enunciado: '<img src="img/i3_p44_act1.jpg" alt="">' },
]
let p1respuestas = Relacionarliterales(p1actividad, '1')

function pregunta1() {
    let core = validarExactas(p1respuestas, "#p1var")
    let total = (core / 1) * 0.75;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}



var p4act = [
    { item: '<img src="img/i1_p44_act4.jpg" alt="">', resp: 'Aparato o sistema' },
    { item: '<img src="img/i2_p44_act4.jpg" alt="">', resp: 'Atómico' },
    { item: '<img src="img/i3_p44_act4.jpg" alt="">', resp: 'Población' },
    { item: '<img src="img/i4_p44_act4.jpg" alt="">', resp: 'Célula' },
];
var p4res = imgSelectRespuesta(p4act, 4);
let p4opciones = ['Aparato o sistema', 'Atómico', 'Población', 'Célula'];
asignarOpcionesAselect(p4opciones, ".p4sel")

function pregunta4() {
    let core = validarExactas(p4res, "#p4var");
    let total = (core / 1) * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}



let p6opciones = ['Tubo ocular', 'Ajuste micrométrico', 'Lente objetivo', 'Condensador'];
asignarOpcionesAselect(p6opciones, '.p6sel')
let respuestas = ['Tubo ocular', 'Ajuste micrométrico', 'Lente objetivo', 'Condensador'];

function pregunta6() {
    let core = validarExactas(respuestas, "#p6var")

    let total = Math.max(core * 1.25, 0)
    $("#pre6a").val(parseFloat(total).toFixed(2));
}

let p7respuestas = []
let p7actividad = ['Ingreso de sustancias', 'Digestión de sustancias', 'Utilización de moléculas', 'Excreción']
let p7items = p7actividad.map((el, index) => {
    p7respuestas.push(index + 1)
    return `<div class="p7caja">
        <input class="caracter1" id="p7var${index}"> <div>${el}</div>
    </div>`
})

mezclar(p7items)

$("#p7act").html(p7items.join(''))

function pregunta7() {
    let core = validarExactas(p7respuestas, "#p7var")

    let total = Math.max(core * 1, 0)
    $("#pre7a").val(parseFloat(total).toFixed(2));
}




var autoregulacion = [
    `Reconozco las principales características pertenecientes a los seres vivos.`,
    `Identifico cómo se relacionan los tipos de células y la diversidad de seres vivos.`,
    `Comprendo los avances científicos que han contribuido en la comprensión de las células y su función en los seres vivos.`,
]

function validarAutoregulacion() {
    let score = 0;
    for (let i = 0; i < autoregulacion.length; i++) {
        if ($(".AutoReg" + i + "0").text().includes('X')) {
            score += 3;
        } else if ($(".AutoReg" + i + "1").text().includes('X')) {
            score += 2;
        } else if ($(".AutoReg" + i + "2").text().includes('X')) {
            score += 1;
        }
    }
    let subtotal = score / (autoregulacion.length * 3)
    $("#inputAutoregulacion").val(parseFloat(subtotal).toFixed(2));
}



function total() {
    pregunta1();
    pregunta4();
    pregunta6();
    pregunta7();
    validarAutoregulacion()
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var inputAutoregulacion = parseFloat(document.getElementById("inputAutoregulacion").value)
    cor = pre1a + pre4a + pre6a + pre7a + inputAutoregulacion
    Calculo_nota();
    EndActivity()
}
