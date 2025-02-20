var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona la palabra correcta para cada número.  <br>`,
    `En la actividad 2. Selecciona la opción correcta para cada gráfica.   <br>`,
    `En la actividad 3 y 4. Usa la pizarra para resolver cada ejercicio.   <br>`,
    `En la actividad 5. Selecciona para pintar la opción correcta.   <br>`,
    `En la actividad 6. Seleccion la opción correcta para cada enunciado.   <br>`,
    `En la actividad 7. Completa cada proposición compuesta.  <br>`,
    `En la actividad 8. Completa la tabla y usa las herramientas de dibujo.  <br>`,
    `En la Autoregulación. Selecciona para marcar con una X.  <br>`,
]

$("#temaActividad").html('Evaluación sumativa')
$("#n_pagina").html("48");
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA




$(document).ready(function () {


    // for (let i = 0; i < 6; i++) {
    //     $('<style>').prop('type', 'text/css').html(`#pizarra20>div>.wrs_toolbar { display: none !important; }`).appendTo('head');
    // }


})



let p1act = [
    { img: '<img src="img/i1_p48_act1.png">', resp: 'Racional' },
    { img: '<img src="img/i2_p48_act1.png">', resp: 'Racional' },
    { img: '<img src="img/i3_p48_act1.png">', resp: 'Irracional' },
    { img: '<img src="img/i4_p48_act1.png">', resp: 'Irracional' },
    { img: '<img src="img/i5_p48_act1.png">', resp: 'Racional' },
    { img: '<img src="img/i6_p48_act1.png">', resp: 'Irracional' },
]
mezclar(p1act)
let p1respuestas = []

let p1items = p1act.map((element, index) => {
    p1respuestas.push(element.resp)
    return `<div class="p1container">
        <b class="txt-azul">${letrasLista[index]}</b>
        <div>
            ${element.img}
            <select class="p1sel selectbox2" id="p1var${index}"></select>
        </div>
    </div>`
}).join('')
$("#p1act").html(p1items)

let p1opciones = ['Racional', 'Irracional']
asignarOpcionesAselect(p1opciones, '.p1sel')

function pregunta1() {
    let core = validarExactas(p1respuestas, "#p1var")
    let total = (core / 1) * 0.5;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


let p2actividad = [
    { item: '<img src="img/i1_p48_act2.png" alt="">', id: 'p2var0', class: "p2sel0" },
    { item: '<img src="img/i2_p48_act2.png" alt="">', id: 'p2var1', class: "p2sel1" },
    { item: '<img src="img/i3_p48_act2.png" alt="">', id: 'p2var2', class: "p2sel2" },
    { item: '<img src="img/i4_p48_act2.png" alt="">', id: 'p2var3', class: "p2sel3" },
    { item: '<img src="img/i5_p48_act2.png" alt="">', id: 'p2var4', class: "p2sel4" },
]
mezclar(p2actividad)
let p2items = p2actividad.map((element, index) => {
    return `<div class="p2container">
        <b class="txt-azul">${letrasLista[index]}</b>
        <div>
            ${element.item}
            <select class="${element.class} selectbox2" id="${element.id}"></select>
        </div>
    </div>`
}).join('')

$("#p2act").html(p2items)

let p2respuestas = ['–3 ≤ x ≤ 4 o [–3,4]', '2 ≤ x < 8 o [2, 8)', 'x≥ 5 o [5, +∞)', '(–∞, –8) o x< –8', '12 > x ≤ 0 o [–∞, 0)']


let p2opciones0 = ['–3 ≤ x ≤ 4 o [–3,4]', '3 ≤ x ≤ 4 o [–3,4)', '-3 ≤ x ≤ 4 o (3,–4]'];
asignarOpcionesAselect(p2opciones0, ".p2sel0")

let p2opciones1 = ['2 ≤ x < 8 o [2, 8)', '2 ≤ x < 8 o [2, 8]', '2 ≤ x < -8 o (2, 8]'];
asignarOpcionesAselect(p2opciones1, ".p2sel1")

let p2opciones2 = ['x≥ 5 o [5, +∞)', 'x≥ -5 o (5, +∞]', 'x≥ 5 o [-5, +∞]'];
asignarOpcionesAselect(p2opciones2, ".p2sel2")

let p2opciones3 = ['(–∞, –8) o x< –8', '(–∞, 8] o x< –8', '(–∞, –8) o x< 8'];
asignarOpcionesAselect(p2opciones3, ".p2sel3")

let p2opciones4 = ['12 > x ≤ 0 o [–∞, 0)', '-12 > x ≤ 0 o [–∞, 0]', '12 > x ≤ 0 o (+∞, 0]'];
asignarOpcionesAselect(p2opciones4, ".p2sel4")

function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var");
    let total = (core / 1) * 1.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



var p3actividad = [
    '<img src="img/i1_p48_act3.png" alt="">',
    '<img src="img/i2_p48_act3.png" alt="">',
];
mezclar(p3actividad)

let p3items = p3actividad.map((element, index) => {
    return `<div style="margin:10px">
        <div><b class="txt-azul">${letrasLista[index]}</b> ${element}</div>
        <div id="pizarra3${index}" style="width:460px;height:250px"></div>
    </div>`
}).join('')

$("#p3act").html(p3items)




var p4actividad = [
    '<img src="img/i1_p48_act4.png" alt="">',
    '<img src="img/i2_p48_act4.png" alt="">',
    '<img src="img/i3_p48_act4.png" alt="">',
];
mezclar(p4actividad)

let p4items = p4actividad.map((element, index) => {
    return `<div style="margin:10px">
        <div><b class="txt-azul">${letrasLista[index]}</b> ${element}</div>
        <div id="pizarra4${index}" style="width:460px;height:250px"></div>
    </div>`
}).join('')

$("#p4act").html(p4items)



var p5act = [
    {
        enunciado: '<img src="img/i1_p49_act5.png">',
        respuesta: ['5,9 x 10<sup>8</sup>', '8,8 &#149; 10<sup>7</sup>', '3,9 &#149; 10<sup>8</sup>', '6,9 &#149; 10<sup>8</sup>', '5,9 &#149; 10<sup>6</sup>', '3,9 &#149; 10<sup>10</sup>'],
    },
    {
        enunciado: '<img src="img/i2_p49_act5.png">',
        respuesta: ['1,65 &#149; 10<sup>7</sup>', '1,65 &#149; 10<sup>7</sup>', '1,2 &#149; 10<sup>7</sup>', '14,3 &#149; 10<sup>8</sup>', '2,2 &#149; 10<sup>7</sup>', '6,2 &#149; 10<sup>7</sup>'],
    },
    {
        enunciado: '<img src="img/i3_p49_act5.png">',
        respuesta: ['2,6 &#149; 10<sup>5</sup>', '2,6 &#149; 10<sup>3</sup>', '5,6 &#149; 10<sup>2</sup>', '2,5 &#149; 10<sup>8</sup>', '4,4 &#149; 10<sup>3</sup>', '3,4 &#149; 10<sup>3</sup>'],
    },
];
literalesRespuestasSeleccionSimple(p5act, "#p5act", 5);

function pregunta5() {
    let core = validarLiteralesRespuestasSeleccionSimple(p5act, 5);
    let total = Math.max(core * 1, 0)
    $("#pre5a").val(parseFloat(total).toFixed(2));
}


let p6actividad = [
    { item: 'Los estudiantes aprobarán el curso si y solo si completan todos los deberes y exámenes.', id: 'p6var0', class: 'p6sel0' },
    { item: 'La clase de funciones fue interesante y la participación de los estudiantes fue activa.', id: 'p6var1', class: 'p6sel1' },
    { item: 'No es cierto que todas las especies animales se adapten fácilmente a los cambios climáticos.', id: 'p6var2', class: 'p6sel2' },
    { item: 'El contrato será renovado este año o será cancelado en diciembre, dependiendo de los resultados financieros.', id: 'p6var3', class: 'p6sel3' },
    { item: 'El sistema aprobará la transacción si y solo si el número de identificación del cliente es correcto y la cuenta tiene fondos suficientes.', id: 'p6var4', class: 'p6sel4' },
    { item: 'Si la producción alcanza las metas trimestrales, entonces se considerará la expansión de la planta.', id: 'p6var5', class: 'p6sel5' },
]
mezclar(p6actividad)

let p6items = p6actividad.map((element, index) => {
    return `<div class="p6container">
        <b class="txt-azul">${letrasLista[index]}</b>
        <div>
            ${element.item}
            <select class="${element.class} selectbox2" id="${element.id}"></select>
        </div>
    </div>`
}).join('')


$("#p6act").html(p6items)


let p6opciones0 = ['p ↔ (q ∧ r)', 'p ↔ (q ∨ r)', 'p ⇒ (q ∧ r)'];
asignarOpcionesAselect(p6opciones0, '.p6sel0')

let p6opciones1 = ['p ∧ q', 'p ∨ q', 'q ∧ p'];
asignarOpcionesAselect(p6opciones1, '.p6sel1')

let p6opciones2 = ['~ p', '↔ p', 'p ⇒ q'];
asignarOpcionesAselect(p6opciones2, '.p6sel2')

let p6opciones3 = ['p ∧ q', 'p ∨ q', 'q ∧ p'];
asignarOpcionesAselect(p6opciones3, '.p6sel3')

let p6opciones4 = ['p ↔ (q ∧ r)', 'p ⇒ (q ∧ r)', 'p ↔ (q ∨ r)'];
asignarOpcionesAselect(p6opciones4, '.p6sel4')

let p6opciones5 = ['p ⇒ q', 'p ↔ q', 'p ~ q'];
asignarOpcionesAselect(p6opciones5, '.p6sel5')

let respuestas = ['p ↔ (q ∧ r)', 'p ∧ q', '~ p', 'p ∨ q', 'p ↔ (q ∧ r)', 'p ⇒ q'];

function pregunta6() {
    let core = validarExactas(respuestas, "#p6var")
    let total = Math.max(core * 1, 0)
    $("#pre6a").val(parseFloat(total).toFixed(2));
}



let p7actividad = [
    {
        texto1: '[∼', texto2: '(p ∨ q )', texto3: '⇒', texto4: 'q]', texto5: '∨', texto6: 'q', tit1: 'p', tit2: 'q',
        opciones: ['VVFVVVVV', 'VFFVVFVF', 'FVFVVVVV', 'FFVFFFFF', '--211131']
    }
]
let p7items = p7actividad.map((element, i) => {

    let array = element.opciones
    let cuerpo = array.map((elemento, index) => {
        let caja = '';
        let arrayElemento = elemento.split('')
        if (index + 1 == array.length) {
            for (let j = 0; j < arrayElemento.length; j++) {
                if (arrayElemento[j] == '-') {
                    caja += `<td style="border:none"></td>`
                } else if (j == 0 || j == 1) {
                    caja += `<td style="padding:5px 2px">${arrayElemento[j]}</td>`
                } else {
                    caja += `<td style="padding:5px 2px"><input class="caracter2 p7var" data-info=${arrayElemento[j]}></td>`
                }
            }
        } else {
            // console.log(arrayElemento)
            for (let j = 0; j < arrayElemento.length; j++) {
                if (arrayElemento[j] == '-') {
                    caja += `<td style="border:none"></td>`
                } else if (j == 0 || j == 1) {
                    caja += `<td>${arrayElemento[j]}</td>`
                } else {
                    caja += `<td><select class="p7sel vof p7var" data-info=${arrayElemento[j]}></select></td>`
                }
            }
        }
        return `<tr>${caja}</tr>`
    }).join('')
    return `
    <div style="margin:10px"><b class="txt-azul">a)</b> ${element.texto1} ${element.texto2} ${element.texto3} ${element.texto4} ${element.texto5} ${element.texto6}
     <table class="table-bordered-1" style="width:450px">
                            <tr>
                                <td style="width:40px">${element.tit1}</td>
                                <td style="width:40px">${element.tit2}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto1}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto2}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto3}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto4}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto5}</td>
                                <td style="width:40px;border-left:none">${element.texto6}</td>
                            </tr>
                           ${cuerpo}
                        </table><br><span class="txt-naranja">Respuesta:</span> <input class="textocorto"></div>`
}).join('')

$("#p7act").append(p7items)


let p7actividadA = [
    {
        texto1: '[(p ∧ q)', texto2: '⇔', texto3: 'r]', texto4: '∨', texto5: '∼ p', tit1: 'p', tit2: 'q', tit3: 'r',
        opciones: ['VVVVVVVF', 'VVFVFFFF', 'VFVFFVFF', 'VFFFVFVF', 'FVVFFVVV', 'FVFFVFVV', 'FFVFFVVV', 'FFFFVFVV', '---12131']
    }
]
// mezclar(p7actividadA)

let p7itemsA = p7actividadA.map((element, i) => {

    let array = element.opciones

    let cuerpo = array.map((elemento, index) => {
        let caja = '';
        let arrayElemento = elemento.split('')
        if (index + 1 == array.length) {
            for (let j = 0; j < arrayElemento.length; j++) {
                if (arrayElemento[j] == '-') {
                    caja += `<td style="border:none"></td>`
                } else if (j == 0 || j == 1 || j == 2) {
                    caja += `<td style="padding:5px 2px">${arrayElemento[j]}</td>`
                } else {
                    caja += `<td style="padding:5px 2px"><input class="caracter2 p7var" data-info=${arrayElemento[j]}></td>`
                }
            }
        } else {
            // console.log(arrayElemento)
            for (let j = 0; j < arrayElemento.length; j++) {
                if (arrayElemento[j] == '-') {
                    caja += `<td style="border:none"></td>`
                } else if (j == 0 || j == 1 || j == 2) {
                    caja += `<td>${arrayElemento[j]}</td>`
                } else {
                    caja += `<td><select class="p7sel vof p7var" data-info=${arrayElemento[j]}></select></td>`
                }
            }
        }




        return `<tr>${caja}</tr>`
    }).join('')
    return `
    <div style="margin:10px"><b class="txt-azul">b)</b> ${element.texto1} ${element.texto2} ${element.texto3} ${element.texto4} ${element.texto5} 
     <table class="table-bordered-1" style="width:450px">
                            <tr>
                                <td style="width:40px">${element.tit1}</td>
                                <td style="width:40px">${element.tit2}</td>
                                <td style="width:40px">${element.tit3}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto1}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto2}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto3}</td>
                                <td style="width:40px;border:none;border-top:solid 2px #5082C8">${element.texto4}</td>
                                <td style="width:40px;border-left:none">${element.texto5}</td>
                            </tr>
                           ${cuerpo}
                        </table><br><span class="txt-naranja">Respuesta:</span> <input class="textocorto"></div>`
}).join('')

$("#p7act").append(p7itemsA)


let p7vf = ['V', 'F']
asignarOpcionesAselectCorto(p7vf, '.p7sel')

function pregunta7() {
    let core = validarCajaDataInfo('p7var')
    let total = (core / 1) * 2;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}

let p8actividad = [
    `Altura (cm),f<sub>i</sub>,x<sub>i</sub>,F<sub>i</sub>`,
    `[154 – 158 ),6,156,6`,
    `[158 – 162 ),8,160,14`,
    `[162 – 166 ),10,164,24`,
    `[166 – 170 ),4,168,28`,
    `[170 – 174 ),2,172,30`,
]
let p8items = p8actividad.map((element, index) => {
    let array = element.split(',')

    let cuerpo = array.map((dato, i) => {
        if (index == 0) {
            return `<td style="padding:3px 6px">${dato}</td>`
        } else {
            if (i == 0 || i == 1) {
                return `<td style="padding:3px 6px">${dato}</td>`
            } else {
                return `<td style="padding:3px 6px"><input class="caracter4 p8var" data-info="${dato}"></td>`
            }
        }
    }).join('')

    return `<tr>${cuerpo}</tr>`
}).join('')
$("#p8act").append(`<table  class="table-bordered-1">${p8items}</table>`)







function pregunta8() {
    // let core = 
    validarCajaDataInfo('p8var')
    // let total = (core / 1) * 1;
    // $("#pre8a").val(parseFloat(total).toFixed(2));
}


var autoregulacion = [
    `Realizo las actividades y problemas siguiendo un proceso.`,
    `Aplico estrategias que me permiten solucionar de mejor manera los problemas.`,
    `Interpreto los resultados de las operaciones que realizo.`,
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
    pregunta2();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    validarAutoregulacion()
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var inputAutoregulacion = parseFloat(document.getElementById("inputAutoregulacion").value)
    cor = pre1a + pre2a + pre5a + pre6a + pre7a + inputAutoregulacion
    Calculo_nota();
    EndActivity()
}
