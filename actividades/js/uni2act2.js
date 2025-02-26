var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 2, 4, 5 y 6. Usa la pizarra para realizar cada ejercicio.  <br>`,
    `En la actividad 3. Empareja con el literal que corresponde.  <br>`,
]
var unidad = '2'
$("#numTema").html('2')
$("#temaActividad").html('Operación con radicales')
$("#n_pagina").html("60");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
})

var p1actividad = ['1', '2', '3', '4', '5', '6', '7', '8']
mezclar(p1actividad)
let p1items = p1actividad.map((element, index) => {

    return `<div style="border:solid 1px silver;border-radius: 6px;padding: 5px;width: 455px;">
                    <div style="border-radius: 5px;"><b class="txt-azul">${letrasLista[index]}</b> <img src="img/i${element}_p60_act1.png" alt="ejercicio raices  ${index + 1}"></div>
                    <div id="pizarra1${index}" style="width:440px;height:250px;"></div>
                </div> `
}).join('')
$("#p1act").html(p1items)




var p2actividad = ['1', '2', '3', '4', '5']
mezclar(p2actividad)
let p2items = p2actividad.map((element, index) => {

    return `<div style="border:solid 1px silver;border-radius: 6px;padding: 5px;width: 455px;">
                    <div style="border-radius: 5px;"><b class="txt-azul">${letrasLista[index]}</b> <img src="img/i${element}_p60_act2.png" alt="ejercicio raices  ${index + 1}"></div>
                    <div id="pizarra2${index}" style="width:440px;height:250px;"></div>
                </div> `
}).join('')
$("#p2act").html(p2items)



let p3actividad = [
    { literal: '1 <img src="img/i1_p61_act3.png" alt="">', enunciado: '1 <img src="img/i6_p61_act3.png" alt="">' },
    { literal: '2 <img src="img/i2_p61_act3.png" alt="">', enunciado: '2 <img src="img/i7_p61_act3.png" alt="">' },
    { literal: '3 <img src="img/i3_p61_act3.png" alt="">', enunciado: '3 <img src="img/i8_p61_act3.png" alt="">' },
    { literal: '4 <img src="img/i4_p61_act3.png" alt="">', enunciado: '4 <img src="img/i9_p61_act3.png" alt="">' },
    { literal: '5 <img src="img/i5_p61_act3.png" alt="">', enunciado: '5 <img src="img/i10_p61_act3.png" alt="">' },
]
let p3respuestas = RelacionarliteralesTabla(p3actividad, '3')

function pregunta3() {
    let core = validarExactas(p3respuestas, "#p3var") /// validar
    let total = core * 2;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}


var p6actividad = ['1', '2', '3', '4', '5', '6']
mezclar(p6actividad)
let p6items = p6actividad.map((element, index) => {

    return `<div style="border:solid 1px silver;border-radius: 6px;padding: 5px;width: 450px;">
                    <div style="border-radius: 5px;"><b class="txt-azul">${letrasLista[index]}</b> <img src="img/i${element}_p61_act6.png" alt="ejercicio ${index + 1}"></div>
                    <div id="pizarra6${index}" style="width:440px;height:250px;"></div>
                </div> `
}).join('')
$("#p6act").html(p6items)




var coevaluacion = [
    `Escuché y respeté las opiniones y criterios de mis compañeros.`,
    `Contribuí de manera activa al resolver el problema, aportando ideas y soluciones.`,
    `Identifique las propiedades de radicación de manera fácil.`,
]

var itemsReflexiono = [
    `¿Por qué es importante que los radicales y el radicando tengan el mismo índice para sumar o restarlos?`,
    `¿Qué sucede cuando no cumplen esta condición?`,
]


function total() {
    // pregunta1();
    // pregunta2();
    pregunta3();
    // var pre1a = parseFloat(document.getElementById("pre1a").value)
    // var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    cor = pre3a
    Calculo_nota();
    EndActivity()
}
