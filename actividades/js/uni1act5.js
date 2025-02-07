var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Empareja con el literal que corresponde.  <br>`,
    `En la actividad 3, 4 y 5. Escribe en cada recuadro de texto.  <br>`,
]
var unidad = '1'
$("#numTema").html('5')
$("#temaActividad").html('Células animales y vegetales')
$("#n_pagina").html("40");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    $("#p1actInicio").prepend(`<div class="cajaRelacionarLiterales p1titulo1">Organelo</div>`)
    $("#p1actFin").prepend(`<div class="cajaRelacionarLiterales p1titulo2">Función</div>`)
})

let p1actividad = [
    { literal: 'Mitocondria', enunciado: 'Genera energía.' },
    { literal: 'Ribosomas', enunciado: 'Producción de proteínas.' },
    { literal: 'Cloroplasto', enunciado: 'Realiza la fotosíntesis.' },
]
let p1respuestas = Relacionarliterales(p1actividad, '1')

function pregunta1() {
    let core = validarExactas(p1respuestas, "#p1var")
    let total = (core / 1) * 2;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}




var p2actividad = [
    '<img src="img/i1_p40_act2.jpg" alt="">',
    '<img src="img/i2_p40_act2.jpg" alt="">',
    '<img src="img/i3_p40_act2.jpg" alt="">',
    '<img src="img/i4_p40_act2.jpg" alt="">',
]
mezclar(p2actividad)

let p2items = p2actividad.map((element) => {
    return `
    <div class="p2caja">
        ${element}
        <textarea class="form-control" placeholder="Escribir" rows="2"></textarea>
    </div>`
}).join('')

$("#p2act").html(p2items)






var coevaluacion = [
    `¿Tomé en cuenta las opiniones de mis compañeros para realizar el trabajo?`,
    `¿Contribuí con ideas creativas para la elaboración de la historieta?`,
    `¿Colaboré activamente con mis compañeros durante todo el proceso?`,
    `¿Me esforcé por mantener un buen ambiente de trabajo con mis compañeros?`,
]


var itemsReflexiono = [
    `¿Qué herramientas tecnológicas podría usar para mejorar mi comprensión sobre las células animales y vegetales?`
]


function total() {
    pregunta1();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    cor = pre1a
    Calculo_nota();
    EndActivity()
}
