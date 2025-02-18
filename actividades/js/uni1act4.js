var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 8 y 9. Selecciona V o F.  <br>`,
    `En la actividad 2, 3, 4, 7 y 10. Usa la pizarra para resolver cada ejercicio y selecciona V o F.  <br>`,
    `En la actividad 5. Completa las tablas de verdad.  <br>`,
    `En la actividad 6. Selecciona la opción correcta para cada enunciado.  <br>`,
]
var unidad = '1'
$("#numTema").html('4')
$("#temaActividad").html('Lógica matemática')
$("#n_pagina").html("30");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    $('<style>')
        .prop('type', 'text/css')
        .html(`.wrs_toolbar>.wrs_header>.wrs_context { display: none !important; }`)
        .appendTo('head');

    $('<style>')
        .prop('type', 'text/css')
        .html(`.wrs_toolbar>.wrs_linksContainer { display: none !important; }`)
        .appendTo('head');

    /// SIRVE PARA QUITAR LA BARRA DE HERRAMIENTAS DE LA PIZARRA DE ECUACIONES
    //   $('<style>').prop('type', 'text/css').html(`#pizarra10>div>.wrs_toolbar { display: none !important; }`).appendTo('head');

})


var p1act = [
    { enunciado: 'La proposición, “Si 5 + 3 = 8, entonces 8 - 3 = 5".', correcta: 'V' },
    { enunciado: 'Una conjunción es verdadera solo si ambas proposiciones que la componen son verdaderas.', correcta: 'V' },
    { enunciado: 'En una disyunción, si ambas proposiciones son falsas, la disyunción es verdadera.', correcta: 'F' },
    { enunciado: 'En una proposición bicondicional, para que la respuesta sea falsa ambas proposiciones deben ser verdaderas.', correcta: 'F' },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')
// console.log(p1respuestas)

function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    let total = (core / 1) * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


let p2actividad = [
    { img: '<img src="img/i1_p30_act2.png" alt="">', resp: 'V' },
    { img: '<img src="img/i2_p30_act2.png" alt="">', resp: 'F' },
    { img: '<img src="img/i3_p30_act2.png" alt="">', resp: 'V' },
    { img: '<img src="img/i4_p30_act2.png" alt="">', resp: 'V' },
]
mezclar(p2actividad)
let p2respuestas = []
let p2items = p2actividad.map((element, index) => {
    p2respuestas.push(element.resp)
    return `<div style="margin:5px;border:solid 1px silver;padding:5px;border-radius:5px">
                <div style="display:flex;alig-items:center;justify-content:center">
                    <b class="txt-azul">${letrasLista[index]}</b>&nbsp;
                    <div>
                        ${element.img} &nbsp;
                        <span class="txt-naranja">R =</span> <select class="selectbox2 p2sel" id="p2var${index}"></select>
                    </div>
                </div>
                <div id="pizarra2${index}" style="width: 340px;height:250px;"></div>
            </div>`
}).join('')
$("#p2act").html(p2items)

let p2opciones = ['V', 'F']
asignarOpcionesAselectCorto(p2opciones, '.p2sel')


function pregunta2() {
    let core = validarExactas(p2respuestas, '#p2var')
    let total = (core / 1) * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}





let p3actividad = [
    { item: 'Si 1 299 es múltiplo de 433, entonces 56 es divisor de 28.', resp: 'V' },
    { item: 'No es verdad que 2 + 2 = 5 si y solo si 4 + 4 = 10.', resp: 'F' },
]
mezclar(p3actividad)

let p3respuestas = []
let p3items = p3actividad.map((element, index) => {
    p3respuestas.push(element.resp)
    return `<div style="margin:5px;width: 480px;">
                <b class="txt-azul">${letrasLista[index]}</b> ${element.item} &nbsp;
                <div id="pizarra3${index}" style="width: 480px;height:250px;"></div>
                <div>
                    <span class="txt-naranja">Respuesta: </span> <select class="selectbox2 p3sel" id="p3var${index}"></select>
                </div>
            </div>`
}).join('')
$("#p3act").html(p3items)

let p3opciones = ['V', 'F']
asignarOpcionesAselectCorto(p3opciones, '.p3sel')


function pregunta3() {
    let core = validarExactas(p3respuestas, '#p3var')
    let total = (core / 1) * 1;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}



let p4opciones = ['V', 'F']
asignarOpcionesAselectCorto(p4opciones, '.p4sel')


function pregunta4() {
    let core = validarExactas(['V', 'F', 'F'], '#p4var')
    let total = (core / 1) * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}



let p5opciones = ['V', 'F']
asignarOpcSelVacio(p5opciones, '.p5sel')


var p6act = [
    { enunciado: 'Si un número es divisible para 4 y para 6, entonces es divisible para 12.', correcta: '(p ∧ q) ⇒ r' },
    { enunciado: 'Un número es primo si y solo si no tiene más divisores que 1 y él mismo.', correcta: '(p ⇔ ~ q)' },
    { enunciado: 'Si un triángulo es equilátero, entonces sus ángulos son iguales, y si sus ángulos son iguales, entonces es un triángulo equilátero.', correcta: '(p ⇒ q) ∧ (q ⇒ p)' },
    { enunciado: 'Un número es divisible por 3 o por 5, pero no por ambos.', correcta: '(p V q) ∧ ~ (p ∧ q)' },
    { enunciado: 'O estudias para el examen o no obtendrás una buena calificación.', correcta: 'p V ~ q' },
]

let p6respuestas = enunciadoSelectOpcion(p6act, "#p6act", '6', 'selectbox1')
// console.log(p6respuestas)

function pregunta6() {
    let core = validarExactas(p6respuestas, '#p6var')
    let total = (core / 1) * 1;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}




let p7actividad = [
    { img: 'El módulo de la adición no es 0 sino 1.', resp: 'F' },
    { img: 'Un ángulo recto no tiene 90° sino 45°.', resp: 'F' },
    { img: 'El cero no es un número positivo ni negativo.', resp: 'V' },
    { img: 'Si 6 no es mayor que 4, entonces 6 - 4 > 0.', resp: 'V' },
    { img: 'Si un número es par, entonces su cuadrado es par, y su doble es mayor que 10.', resp: 'F' },
]
mezclar(p7actividad)

let p7respuestas = []
let p7items = p7actividad.map((element, index) => {
    p7respuestas.push(element.resp)
    return `<div style="margin:5px;border:solid 1px silver;padding:5px;border-radius:5px;width:450px">
                <div style="display:flex;alig-items:center;justify-content:center">
                    <b class="txt-azul">${letrasLista[index]}</b>&nbsp;
                    <div>
                        ${element.img} 
                    </div>
                </div>
                <div id="pizarra7${index}" style="width: 440px;height:250px;"></div>
                <span class="txt-naranja">Respuesta = </span> <select class="selectbox2 p7sel" id="p7var${index}"></select>
            </div>`
}).join('')
$("#p7act").html(p7items)

let p7opciones = ['V', 'F']
asignarOpcionesAselectCorto(p7opciones, '.p7sel')


function pregunta7() {
    let core = validarExactas(p7respuestas, '#p7var')
    let total = (core / 1) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}


var p8act = [
    { enunciado: '(~ V ⇔ F)', correcta: 'V' },
    { enunciado: '(F \u2228 F)', correcta: 'F' },
    { enunciado: '(~ F ∧ V)', correcta: 'V' },
    { enunciado: '~ (~ F ⇔ V)', correcta: 'F' },
    { enunciado: '(~ V ⇔ ~ F)', correcta: 'F' },
    { enunciado: '(V ⇔ F) \u2228 V', correcta: 'V' },
    { enunciado: '(V ∧ ~ F) ⇒ F', correcta: 'F' },
    { enunciado: '~ (V ∧ F) ∧ F', correcta: 'F' },
]

let p8respuestas = enunciadoSelectOpcion(p8act, "#p8act", '8', 'vof')
// console.log(p8respuestas)


function pregunta8() {
    let core = validarExactas(p8respuestas, '#p8var')
    let total = (core / 1) * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}




var p9act = [
    { enunciado: 'v(p) = V; v(q) = V ⇒ v(~p ∧ q) =', correcta: 'F' },
    { enunciado: 'v(p) = V; v(q) = F ⇒ v(p ∧ ~q) =', correcta: 'V' },
    { enunciado: 'v(p) = F; v(q) = F ⇒ v(~p ⇒ q) =', correcta: 'F' },
    { enunciado: 'v(p) = F; v(q) = V ⇒ v(~p ∧ ~q) =', correcta: 'F' },
    { enunciado: 'v(p) = V; v(q) = V ⇒ v [(p ⇔ q) ∧ ~p]= ', correcta: 'F' },
]

let p9respuestas = enunciadoSelectOpcion(p9act, "#p9act", '9', 'vof')
// console.log(p9respuestas)


function pregunta9() {
    let core = validarExactas(p9respuestas, '#p9var')
    let total = (core / 1) * 1;
    $("#pre9a").val(parseFloat(total).toFixed(2));
}


let p10opciones = ['verdadero', 'falso']
asignarOpcionesAselect(p10opciones, '.p10sel')

function pregunta10() {
    let core = validarExactas(['verdadero'], '#p10var')
    let total = (core / 1) * 1;
    $("#pre10a").val(parseFloat(total).toFixed(2));
}



var coevaluacion = [
    `¿Qué obstáculos enfrentamos durante el proceso de resolución de ejercicios?`,
    `¿Compartieron el trabajo realizado con todos los integrantes del grupo?`,
]

var itemsReflexiono = [
    `¿Cómo puedo aplicar las proposiciones lógicas y tablas de verdad en las desiciones que tomo en mi vida?`
]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta10();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre10a = parseFloat(document.getElementById("pre10a").value)
    cor = pre1a + pre2a + pre3a + pre4a + pre6a + pre7a + pre8a + pre10a
    Calculo_nota();
    EndActivity()
}
