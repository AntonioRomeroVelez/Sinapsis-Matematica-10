var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Empareja con el literal que corresponde.  <br>`,
    `En la actividad 7. Selecciona las palabras correctas y completa.  <br>`,
    `En la actividad 2, 3, 4, 5, 6 y 8. Escribe en los recuadros de texto.  <br>`,
]
var unidad = '1'
$("#numTema").html('4')
$("#temaActividad").html('El estudio de la célula')
$("#n_pagina").html("32");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {


})


let p1actividad = [
    { literal: 'Célula procariota', enunciado: 'El material genético no se encuentra protegido por una membrana celular.' },
    { literal: 'Célula eucariota', enunciado: 'Posee núcleo y organelos con doble membrana.' },
    { literal: 'Micrómetros', enunciado: 'Unidad de medida equivalente a una milésima parte de un milímetro. ' },
    { literal: 'Movimiento vibrátil', enunciado: 'Movimiento de cilios y flagelos para el desplazamiento' }
]
let p1respuestas = Relacionarliterales(p1actividad, '1')

function pregunta1() {
    let core = validarExactas(p1respuestas, "#p1var")
    let total = (core / 1) * 1.25;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


let p7opci1 = ['dinámica', 'estática']
let p7opci2 = ['positivo', 'negativo']
let p7act = [
    { img: '<img src="img/i1_p33_act7.jpg">', resp1: 'dinámica', resp2: 'positivo', },
    { img: '<img src="img/i2_p33_act7.jpg">', resp1: 'dinámica', resp2: 'negativo', },
]
mezclar(p7act)
let p7respuestas = []
let p7items = p7act.map((element, index) => {
    let indexid = index * 2
    p7respuestas.push(element.resp1)
    p7respuestas.push(element.resp2)

    return `
    <div style="border:solid 3px #47B441;border-radius:5px;padding:3px 7px;padding:5px;text-align:center">
        ${element.img}
        <div>
            Respuesta
            <select class="p7sel1 selectbox2" id="p7var${indexid}"></select>, estímulo 
            <select class="p7sel2 selectbox2" id="p7var${indexid + 1}"></select>
        </div>
    </div>`
}).join('')
$("#p7act").html(p7items)

asignarOpcionesAselect(p7opci1, '.p7sel1')
asignarOpcionesAselect(p7opci2, '.p7sel2')

function pregunta7() {
    let core = validarExactas(p7respuestas, "#p7var")
    let total = (core / 1) * 1.25;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}




var rutinaPensamiento = [
    { img: '<img src="img/ico_loquese.png" alt="">', txt2: '¿Qué funciones de la célula conozco?', color2: '#DCBCCD', },
    { img: '<img src="img/ico_loquequierosaber.png" alt="">', txt2: '¿Qué dudas tengo sobre el funcionamiento de la célula?', color2: '#CCEDE8', },
    { img: '<img src="img/ico_loquehare.png" alt="">', txt2: '¿Qué haré para aprenderlas?', color2: '#FCDCC0', },
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

var coevaluacion = [
    `¿Colaboré con la búsqueda de la información sobre los microorganismos que se encuentran frecuentemente en aguas contaminadas? `,
    `¿Participé con entusiasmo en las actividades que me asignaron?`,
    `¿Respeté las opiniones de mis compañeros?`,
]

var itemsReflexiono = [
    `¿Qué hábitos saludables debo desarrollar para asegurar un funcionamiento adecuado de mis células?`
]


function total() {
    pregunta1();
    pregunta7();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    cor = pre1a + pre7a
    Calculo_nota();
    EndActivity()
}
