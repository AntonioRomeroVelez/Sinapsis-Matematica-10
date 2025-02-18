var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.  <br>`,
    `En la actividad 2 y 3, 11 y 12. Usa las pizarras para resolver cada ejercicio.  <br>`,
    `En la actividad 4. Selecciona el círculo amarillo luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 5, 6, 7, 8, 9 y 10. Completa con la respuestas correcta.  <br>`,
]
var unidad = '1'
$("#numTema").html('2')
$("#temaActividad").html('Potenciación de números reales')
$("#n_pagina").html("22");
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

    // for (let i = 0; i < 6; i++) {
    //     $('<style>').prop('type', 'text/css').html(`#pizarra20>div>.wrs_toolbar { display: none !important; }`).appendTo('head');
    // }


    cajaUnir1_1(330, 500, 'none', 0, 0)

})



var p1act = [
    {
        enunciado: `La propiedad de la división de potencias con la misma base establece que <img src="img/i1_p22_act1.png"> para cualquier a ≠ 0.`, correcta: 'V'
    },
    {
        enunciado: `La potencia de exponente cero establece que a<sup>0</sup>  = 0 para cualquier número real a.`, correcta: 'F'
    },
    {
        enunciado: `La propiedad de la potencia de una potencia indica que <img src="img/i2_p22_act1.png">.`, correcta: 'F'
    },
    {
        enunciado: `Si a  es un número real y m es un número racional, entonces <img src="img/i3_p22_act1.png">.`, correcta: 'V'
    },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')
// console.log(p1respuestas)


function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    tpre1 = core * 1;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}

let p2actividad = [
    '<img src="img/i1_p22_act2.png" alt="">',
    '<img src="img/i2_p22_act2.png" alt="">',
    '<img src="img/i3_p22_act2.png" alt="">',
    '<img src="img/i4_p22_act2.png" alt="">',
    '<img src="img/i5_p22_act2.png" alt="">',
    '<img src="img/i6_p22_act2.png" alt="">',
]
mezclar(p2actividad)

let p2items = p2actividad.map((element, index) => {
    return `<div class="p2container">
                <b class="txt-azul">${letrasLista[index]}</b> ${element}
                <div id="pizarra2${index}" style="width: 345px;height: 300px;"></div>
            </div>`
})
$("#p2act").html(p2items)



let p3actividad = [
    '<img src="img/i1_p22_act3.png" alt="">',
    '<img src="img/i2_p22_act3.png" alt="">',
    '<img src="img/i3_p22_act3.png" alt="">',
    '<img src="img/i4_p22_act3.png" alt="">',
    '<img src="img/i5_p22_act3.png" alt="">',
]
mezclar(p3actividad)

let p3items = p3actividad.map((element, index) => {
    return `<div class="p2container">
                <b class="txt-azul">${letrasLista[index]}</b> ${element}
                <div id="pizarra3${index}" style="width: 345px;height: 300px;"></div>
            </div>`
})
$("#p3act").html(p3items)






var arrayElemInicio = [
    '<div class="divinicio"><img src="img/i1_p22_act4.png" alt=""></div>',
    '<div class="divinicio"><img src="img/i2_p22_act4.png" alt=""></div>',
    '<div class="divinicio"><img src="img/i3_p22_act4.png" alt=""></div>',
    '<div class="divinicio"><img src="img/i4_p22_act4.png" alt=""></div>',
]
var arrayElemFin = [
    '<div class="divfin"><img src="img/i5_p22_act4.png" alt=""></div>',
    '<div class="divfin"><img src="img/i6_p22_act4.png" alt=""></div>',
    '<div class="divfin"><img src="img/i7_p22_act4.png" alt=""></div>',
    '<div class="divfin"><img src="img/i8_p22_act4.png" alt=""></div>',
]

function pregunta4() {
    let core = validarUnir1_1();
    let total = core * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}



///// pregunta 5
let p5actividad = [
    { img: '<img src="img/i1_p22_act5.png" alt="">', respuesta: '6' },
    { img: '<img src="img/i2_p22_act5.png" alt="">', respuesta: '-3' },
    { img: '<img src="img/i3_p22_act5.png" alt="">', respuesta: '7' },
    { img: '<img src="img/i4_p22_act5.png" alt="">', respuesta: '4' },
    { img: '<img src="img/i5_p22_act5.png" alt="">', respuesta: '2' },
    { img: '<img src="img/i6_p22_act5.png" alt="">', respuesta: '9' },
]
mezclar(p5actividad)

let p5respuestas = []

let p5items = p5actividad.map((element, index) => {
    let color = generarColorSuave()
    let colorOscuro = oscurecerColorRGB(color, 5);
    p5respuestas.push(element.respuesta)

    return `<div style="display: flex;align-items: center;justify-content: center;margin:10px;border:solid 2px ${colorOscuro}">
                <div style="width:135px;height:60px;display: flex;align-items: center;justify-content: start;padding:5px;background-color:${colorOscuro} !important; print-color-adjust: exact;">
                    <b class="txt-azul">${letrasLista[index]}</b>
                    ${element.img}
                </div>
                <div style="width:100px;height:60px;display: flex;align-items: center;justify-content: center;gap:5px;background-color:${color} !important; print-color-adjust: exact;">
                    x = <input class="caracter2" id="p5var${index}">
                </div>
            </div>`
})
$("#p5act").html(p5items)

function pregunta5() {
    let core = validarExactas(p5respuestas, "#p5var");
    let total = core * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}





let p6actividad = [
    { img: '<img src="img/i1_p22_act6.png" alt="">', resp: '-50' },
    { img: '<img src="img/i2_p22_act6.png" alt="">', resp: '9' },
]
mezclar(p6actividad)

let p6respuestas = []

let p6items = p6actividad.map((element, index) => {
    p6respuestas.push(element.resp)
    return `<div class="p2container">
                <b class="txt-azul">${letrasLista[index]}</b> ${element.img}
                <div id="pizarra6${index}" style="width: 440px;height: 300px;"></div>
                <div><span class="txt-naranja">Respuesta: </span> ${letrasLista[index]} = <input class="caracter4" id="p6var${index}"></div>
            </div>`
})
$("#p6act").html(p6items)

function pregunta6() {
    let core = validarExactas(p6respuestas, "#p6var");
    let total = core * 1;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}


function pregunta7() {
    let core = validarExactas(['8', '256'], "#p7var");
    let total = core * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}


function pregunta8() {
    let core = validarExactas(['1', '32'], "#p8var");
    let total = core * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}


function pregunta9() {
    let core = validarExactas(['262144'], "#p9var");
    let total = core * 1;
    $("#pre9a").val(parseFloat(total).toFixed(2));
}




function pregunta10() {
    let core = validarExactas(['221'], "#p10var");
    let total = core * 1;
    $("#pre10a").val(parseFloat(total).toFixed(2));
}


var coevaluacion = [
    '¿Logré resolver los ejercicios propuestos de manera sencilla?',
    '¿Colaboré por igual para realizar la actividad?',
]
var itemsReflexiono = [
    `¿En qué aspectos de mi vida cotidiana puedo usar lo aprendido sobre la potenciación?`
]


function total() {
    pregunta1();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta9();
    pregunta10();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre9a = parseFloat(document.getElementById("pre9a").value)
    var pre10a = parseFloat(document.getElementById("pre10a").value)
    cor = ((pre1a + pre4a + pre5a + pre6a + pre7a + pre8a + pre9a + pre10a) / 12) * 10
    Calculo_nota();
    EndActivity()
}
