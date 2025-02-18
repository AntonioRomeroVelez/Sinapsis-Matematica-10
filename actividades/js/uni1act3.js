var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 2, 3 y 5. Completa correctamente.  <br>`,
    `En la actividad 4. Selecciona la opciona correcta.  <br>`,
    `En la actividad 6. Selecciona V o F.  <br>`,
    `En la actividad 7. Escribe en el recuadro de texto.  <br>`,
    `En la actividad 8, 9, 10, 11 y 12. Usa la pizarra para resolver el ejercicio y escribe en cada recuadro de texto.  <br>`,
]

var unidad = '1'
$("#numTema").html('3')
$("#temaActividad").html('Notación científica')
$("#n_pagina").html("26");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})


let p1actividad = [
    { img: '<img src="img/i1_p26_act1.png" alt="">', resp1: '9.98', resp2: '7' },
    { img: '<img src="img/i2_p26_act1.png" alt="">', resp1: '1.6', resp2: '-2' },
    { img: '<img src="img/i3_p26_act1.png" alt="">', resp1: '4.9', resp2: '3' },
    { img: '<img src="img/i4_p26_act1.png" alt="">', resp1: '3.1', resp2: '3' },
]
mezclar(p1actividad)

let p1respuestas = []
let p1items = p1actividad.map((element, index) => {
    p1respuestas.push(element.resp1, element.resp2)
    let indexId = index * 2
    return `<div style="border:solid 1px silver;padding:15px 5px;border-radius:5px;display:flex;justify-content:start;align-items:center;width:450px;margin:5px">
            <b class="txt-azul">
                ${letrasLista[index]} &nbsp;
            </b>
            <div>
                ${element.img}
                <input type="text" class="input-base" maxlength="5" id="p1var${indexId}" autocomplete="off"> ⋅ 10
                <sup><sup><input class="input-potencia" maxlength="2" id="p1var${indexId + 1}" autocomplete="off"></sup></sup>
            </div>
          </div>`
})
$("#p1act").html(p1items)

// console.log(p1respuestas)

function pregunta1() {
    let core = 0
    for (let i = 0; i < p1respuestas.length; i++) {
        let dato = String($("#p1var" + i).val()).replace(',', '.')
        console.log(dato)
        if (dato == p1respuestas[i]) {
            core++;
            $("#p1var" + i).addClass('bien')
        } else {
            $("#p1var" + i).addClass('mal')
        }
    }
    let totalp1 = (core / p1respuestas.length) * 1;
    $("#pre1a").val(parseFloat(totalp1).toFixed(2));
}


let p2actividad = [
    { num1: '9 200', num2: '9,2', num3: '3' },
    { num1: '0,004 56', num2: '4,56', num3: '-3' },
    { num1: '43 850', num2: '4,385', num3: '4' },
    { num1: '12 000 000', num2: '1,2', num3: '7' },
    { num1: '0,005 89', num2: '5,89', num3: '-3' },
    { num1: '0,007 4', num2: '7,4', num3: '-3' },
    { num1: '451 000 000', num2: '4,51', num3: '8' },
]
mezclar(p2actividad)
let p2items = p2actividad.map((element, index) => {
    let contenido
    if (index % 2 === 0) {
        contenido = `<tr>
                <td style="background-color:#EBF6E4 !important; print-color-adjust: exact;">${element.num1}</td>
                <td style="background-color:#FDEDDF !important; print-color-adjust: exact;">
                    <input type="text" class="input-base p2var" maxlength="5" data-info="${element.num2}" autocomplete="off"> ⋅ 10
                    <sup><sup><input class="input-potencia p2var" maxlength="2" data-info="${element.num3}" autocomplete="off"></sup></sup>
                </td>
            </tr>`
    } else {
        contenido = `<tr>
                <td style="background-color:#EBF6E4 !important; print-color-adjust: exact;">
                    <input class="caracter9 p2var" data-info="${element.num1}" autocomplete="off"></td>
                <td style="background-color:#FDEDDF !important; print-color-adjust: exact;">
                    <input type="text" class="input-base" value="${element.num2}" readonly> ⋅ 10
                    <sup><sup><input class="input-potencia" value="${element.num3}" readonly></sup></sup>
                </td>
            </tr>`
    }
    return contenido
}).join('')

$("#p2act").html(`<table class="table-bordered-1">
        <tr>
            <td style="background-color:#D8EDCB !important; print-color-adjust: exact;">Notación decimal</td>
            <td style="background-color:#FCDCC0 !important; print-color-adjust: exact;">Notación científica</td>
        </tr>
        ${p2items}
    </table>`)





let p2Aactividad = [
    { enunciado: 'Diámetro de un átomo de oxígeno: 0,000 000 000 1 metros.', num2: '1', num3: '-10' },
    { enunciado: 'El peso de una gota de agua: 0,000 05 kg.', num2: '5', num3: '-5' },
    { enunciado: 'Número de bacterias en una muestra de cultivo: 2 300 000 000 bacterias.', num2: '2.3', num3: '9' },
    { enunciado: 'Número de neuronas en el cerebro humano: Aproximadamente 80 000 000 000 neuronas.', num2: '8', num3: '10' },

]
mezclar(p2Aactividad)
let p2Aitems = p2Aactividad.map((element, index) => {
    let contenido = `<div>
                <div>
                    <b class="txt-azul">${letrasLista[index]}</b>
                    ${element.enunciado}
                </div>
                <div style="padding:15px 5px">
                    &nbsp;<spabn class="txt-naranja">Respuesta. </spabn>
                    <input type="text" class="input-base p2var" maxlength="5" data-info="${element.num2}" autocomplete="off"> ⋅ 10
                    <sup><sup><input class="input-potencia p2var" maxlength="3" data-info="${element.num3}" autocomplete="off"></sup></sup>
                </div>
            </div>`

    return contenido
}).join('')

$("#p2Aact").html(p2Aitems)


const pregunta2 = () => {
    let core = 0
    let cajas = document.querySelectorAll(`.p2var `)
    // console.log(cajas.length)
    cajas.forEach(caja => {
        let dato = String(caja.value).replace(',', '.')
        let resp = caja.getAttribute('data-info')
        // console.log(procesarTexto(dato) + " es igual a : " + procesarTexto(resp))
        if (procesarTexto(dato) == procesarTexto(resp)) {
            core++;
            caja.classList.add('bien')
        } else {
            caja.classList.add('mal')
        }
    });
    let totalp2 = (core / cajas.length) * 1;
    $("#pre2a").val(parseFloat(totalp2).toFixed(2));
}




let p3actividad = [
    { enunciado: 'Cuatro mil quinientos: ', num2: '4.5', num3: '3' },
    { enunciado: 'Diez mil millones:', num2: '1', num3: '10' },
    { enunciado: 'La mitad de un millón:', num2: '5', num3: '5' },
    { enunciado: 'Novecientos noventa y nueve mil:', num2: '9.99', num3: '5' },
    { enunciado: 'Setenta y cinco mil cuatrocientos', num2: '7.54', num3: '4' },

]
mezclar(p3actividad)
let p3items = p3actividad.map((element, index) => {
    let contenido = `<div style="padding:15px 5px;width:440px;border:solid 1px silver;margin:5px;border-radius:5px">
                        <b class="txt-azul">${letrasLista[index]}</b>
                        ${element.enunciado}
                        =
                        <input type="text" class="input-base p3var" maxlength="5" data-info="${element.num2}" autocomplete="off"> ⋅ 10
                        <sup><sup><input class="input-potencia p3var" maxlength="3" data-info="${element.num3}" autocomplete="off"></sup></sup>
                    </div>`

    return contenido
}).join('')

$("#p3act").html(p3items)


const pregunta3 = () => {
    let core = 0
    let cajas = document.querySelectorAll(`.p3var `)
    // console.log(cajas.length)
    cajas.forEach(caja => {
        let dato = String(caja.value).replace(',', '.')
        let resp = caja.getAttribute('data-info')
        // console.log(procesarTexto(dato) + " es igual a : " + procesarTexto(resp))
        if (procesarTexto(dato) == procesarTexto(resp)) {
            core++;
            caja.classList.add('bien')
        } else {
            caja.classList.add('mal')
        }
    });
    let totalp3 = (core / cajas.length) * 1;
    $("#pre3a").val(parseFloat(totalp3).toFixed(2));
}



var p4act = [
    { enunciado: `55 ⋅ 10<sup>2</sup>`, correcta: 'No está en notación científica.' },
    { enunciado: `4,5 ⋅ 10<sup>-8</sup>`, correcta: 'Sí está en notación científica. ' },
    { enunciado: `345 000 000`, correcta: 'No está en notación científica.' },
    { enunciado: `0,000 5`, correcta: 'No está en notación científica.' },
    { enunciado: `7,8 ⋅ 10<sup>-3</sup>`, correcta: 'Sí está en notación científica. ' },
    { enunciado: `33,45 ⋅ 10<sup>3</sup>`, correcta: 'No está en notación científica.' },
    { enunciado: `596 ⋅ 10<sup>12</sup>`, correcta: 'No está en notación científica.' },
    { enunciado: `9,9 ⋅ 10<sup>-6</sup>`, correcta: 'Sí está en notación científica. ' },
]
let p4respuestas = enunciadoSelectOpcion(p4act, "#p4act", '4', 'selectbox2')
// console.log(p4respuestas)


const pregunta4 = () => {
    let core = validarExactas(p4respuestas, '#p4var')
    let totalp4 = core * 1;
    $("#pre4a").val(parseFloat(totalp4).toFixed(2));
}




let p5actividad = [
    { enunciado: '<img src="img/i1_p26_act5.png" alt="">', num2: '2.59', num3: '-10' },
    { enunciado: '<img src="img/i2_p26_act5.png" alt="">', num2: '2.47', num3: '-85' },
    { enunciado: '<img src="img/i3_p26_act5.png" alt="">', num2: '1.97', num3: '-12' },
    { enunciado: '<img src="img/i4_p26_act5.png" alt="">', num2: '1.897', num3: '24' },
    { enunciado: '<img src="img/i5_p26_act5.png" alt="">', num2: '2.12', num3: '4' },
    { enunciado: '<img src="img/i6_p26_act5.png" alt="">', num2: '8.02', num3: '62' },
]
mezclar(p5actividad)
let p5items = p5actividad.map((element, index) => {
    let contenido = `<div style="padding:15px 5px;width:440px;border:solid 1px silver;margin:5px;border-radius:5px">
                        <b class="txt-azul">${letrasLista[index]}</b>
                        ${element.enunciado}
                        <input type="text" class="input-base p5var" maxlength="5" data-info="${element.num2}" autocomplete="off"> ⋅ 10
                        <sup><sup><input class="input-potencia p5var" maxlength="3" data-info="${element.num3}" autocomplete="off"></sup></sup>
                    </div>`
    return contenido
}).join('')

$("#p5act").html(p5items)


const pregunta5 = () => {
    let core = 0
    let cajas = document.querySelectorAll(`.p5var `)
    // console.log(cajas.length)
    cajas.forEach(caja => {
        let dato = String(caja.value).replace(',', '.')
        let resp = caja.getAttribute('data-info')
        // console.log(procesarTexto(dato) + " es igual a : " + procesarTexto(resp))
        if (procesarTexto(dato) == procesarTexto(resp)) {
            core++;
            caja.classList.add('bien')
        } else {
            caja.classList.add('mal')
        }
    });
    let totalp5 = (core / cajas.length) * 1;
    $("#pre5a").val(parseFloat(totalp5).toFixed(2));
}


var p6act = [
    { enunciado: `En la notación científica, el exponente siempre es positivo.`, correcta: 'F' },
    { enunciado: `3,2 ⋅ 10<sup>4</sup> es equivalente a 32 000.`, correcta: 'V' },
    { enunciado: `El exponente en notación científica indica el número de dígitos en el número decimal.`, correcta: 'F' },
    { enunciado: `Cuando se multiplica un número en notación científica, se suman los exponentes.`, correcta: 'F' },
    { enunciado: `0,000 7 en notación científica es 7 · 10<sup>-4</sup>`, correcta: 'V' },
    { enunciado: `La notación científica puede expresar números enteros y fraccionarios.`, correcta: 'V' },
    { enunciado: `La notación científica se utiliza para representar números muy grandes o muy pequeños, facilitando su escritura y lectura.`, correcta: 'V' },
]
let p6respuestas = enunciadoSelectOpcion(p6act, "#p6act", '6', 'vof')
// console.log(p6respuestas)


const pregunta6 = () => {
    let core = validarExactas(p6respuestas, '#p6var')
    let totalp6 = core * 1;
    $("#pre6a").val(parseFloat(totalp6).toFixed(2));
}



let p8preguntas = [
    '¿Cuántos kWh se producen en una semana?',
    '¿Cuántos kWh consumen las fábricas en una semana?',
    '¿Cuál es el excedente de energía producido en una semana después de satisfacer la demanda de las fábricas?',
]
preguntasArray(p8preguntas, 'p8act')



let p9preguntas = [
    '¿Cuántos kilómetros cúbicos de agua permanecen en el océano después de un año de evaporación?',
    '¿Cuántos años se necesitan para que se evapore la mitad del volumen total del océano, suponiendo que la tasa de evaporación es constante?',
]
preguntasArray(p9preguntas, 'p9act')



let p10preguntas = [
    '¿Cuál es la diferencia en masa entre un átomo de carbono y un átomo de helio?',
    'Si se tienen 2,5 ⋅ 10<sup>6</sup>  átomos de helio, ¿cuál es la masa total de estos átomos?',
]
preguntasArray(p10preguntas, 'p10act')


let p11preguntas = [
    '¿Cuántas veces más grande es la edad del universo comparada con la distancia a la galaxia Andrómeda en años luz?',
    'Si otra galaxia, la galaxia de Triángulo, está a 3,0 ⋅ 10<sup>6</sup>  años luz de la Tierra, ¿cuál es la diferencia en distancia entre la galaxia de Triángulo y la Andrómeda.',
]
preguntasArray(p11preguntas, 'p11act')


const pregunta12 = () => {
    let core = validarExactas(['75'], '#p12var')
    let totalp12 = core * 1;
    $("#pre12a").val(parseFloat(totalp12).toFixed(2));
}



// var coevaluacion = [
//     `¿Compartí con mis compañeros lo que conozco acerca de los juegos tradicionales?`,
//     `¿Elaboré junto a mis compañeros las instrucciones de un juego tradicional?`,
//     `¿Expresé mis opiniones y respeté las de mis compañeros?`,
//     `¿Participé activamente durante todo el trabajo?`
// ]



var itemsReflexiono = [
    `¿Cómo puedo utilizar de manera útil la notación científica en mi vida cotidiana?`
]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta12();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre12a = parseFloat(document.getElementById("pre12a").value)
    cor = ((pre1a + pre2a + pre3a + pre4a + pre5a + pre12a) / 12) * 10
    Calculo_nota();
    EndActivity()
}
