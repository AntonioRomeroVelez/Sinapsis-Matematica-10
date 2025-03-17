var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Usa la pizarra para realizar el ejercicio, para ordenar las expresiones, selecciona la imagen luego selecciona el lugar para pegar la imagen.  <br>`,
    `En la actividad 2. Selecciona la imagen luego selecciona el recuadro para pegar la imagen.   <br>`,
    `En la actividad 3, 4 y 6. Usa la pizarra para realizar el ejercicio.  <br>`,
    `En la actividad 5. Selecciona el círculo amarillo, luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 7, 8 y 9. Desarrolla el ejercicio y completa la respuesta correctamente.  <br>`,
]

$("#temaActividad").html('Evaluación sumativa')
$("#n_pagina").html("88");
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(350, 500, 'none', 0, 100)
})



let p1actividad = [
    '<img src="img/i2_p88_act1.png" alt="" class="cloneImg p1img">',
    '<img src="img/i3_p88_act1.png" alt="" class="cloneImg p1img">',
    '<img src="img/i4_p88_act1.png" alt="" class="cloneImg p1img">',
    '<img src="img/i5_p88_act1.png" alt="" class="cloneImg p1img">',
    '<img src="img/i6_p88_act1.png" alt="" class="cloneImg p1img">',
    '<img src="img/i7_p88_act1.png" alt="" class="cloneImg p1img">',
    '<img src="img/i8_p88_act1.png" alt="" class="cloneImg p1img">',
    '<img src="img/i9_p88_act1.png" alt="" class="cloneImg p1img">',
    '<img src="img/i10_p88_act1.png" alt="" class="cloneImg p1img">',
]
mezclar(p1actividad)
$("#p1opciones").html(p1actividad)


function pregunta1() {
    let p1respuestas = [
        'img/i2_p88_act1.png',
        'img/i3_p88_act1.png',
        'img/i4_p88_act1.png',
        'img/i5_p88_act1.png',
        'img/i6_p88_act1.png',
        'img/i7_p88_act1.png'
    ]
    let core = 0;
    for (let i = 0; i < p1respuestas.length; i++) {
        let selector = $(`#p1var${i} > img`).attr('src'); // Construye el selector dinámico
        // console.log(selector)
        if (selector == p1respuestas[i]) {
            core++;
            $(`#p1var${i}`).addClass("bien4");
        } else {
            $(`#p1var${i}`).addClass("mal4");
        }
    }
    let total = (core / p1respuestas.length) * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}

let p2opciones = [
    '<img src="img/i7_p88_act2.png" alt="" class="cloneImg p1img">',
    '<img src="img/i8_p88_act2.png" alt="" class="cloneImg p1img">',
    '<img src="img/i9_p88_act2.png" alt="" class="cloneImg p1img">',
    '<img src="img/i10_p88_act2.png" alt="" class="cloneImg p1img">',
    '<img src="img/i11_p88_act2.png" alt="" class="cloneImg p1img">',
]
mezclar(p2opciones)
$("#p2opciones").html(p2opciones)


let p2actividad = [
    { img: '<img src="img/i1_p88_act2.png" alt="">', respuesta: 'img/i7_p88_act2.png' },
    { img: '<img src="img/i2_p88_act2.png" alt="">', respuesta: 'img/i8_p88_act2.png' },
    { img: '<img src="img/i3_p88_act2.png" alt="">', respuesta: 'img/i9_p88_act2.png' },
    { img: '<img src="img/i4_p88_act2.png" alt="">', respuesta: 'img/i10_p88_act2.png' },
    { img: '<img src="img/i5_p88_act2.png" alt="">', respuesta: 'img/i10_p88_act2.png' },
    { img: '<img src="img/i6_p88_act2.png" alt="">', respuesta: 'img/i11_p88_act2.png' },
]
mezclar(p2actividad)
let p2respuestas = []

let p2items = p2actividad.map((el, index) => {
    p2respuestas.push(el.respuesta)
    let item = `<tr>
        <td>${el.img}</td>
        <td style="padding:3px"><div class="boxPegarImg cajap2" id="p2var${index}"></div></td>
    </tr>`
    return item
}).join('')

$("#p2act").html(`<table class="table-bordered-1">
        <tr>
            <td style="width:110px">Expresión original</td>
            <td style="width:110px">Expresión simplificada</td>
        </tr>
        ${p2items}
    </table>`)



function pregunta2() {
    let core = 0;
    for (let i = 0; i < p2respuestas.length; i++) {
        let selector = $(`#p2var${i} > img`).attr('src'); // Construye el selector dinámico
        console.log(selector)
        if (selector == p2respuestas[i]) {
            core++;
            $(`#p2var${i}`).addClass("bien4");
        } else {
            $(`#p2var${i}`).addClass("mal4");
        }
    }
    let total = (core / p2respuestas.length) * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}




let p3actividad = [
    '<img src="img/i1_p88_act3.png" alt="">',
    '<img src="img/i2_p88_act3.png" alt="">',
    '<img src="img/i3_p88_act3.png" alt="">',
    '<img src="img/i4_p88_act3.png" alt="">',
    '<img src="img/i5_p88_act3.png" alt="">',
    '<img src="img/i6_p88_act3.png" alt="">',
]

let p3items = p3actividad.map((el, index) => {
    let p3item = `<div>
        <div><b class="txt-azul">${letrasLista[index]}</b> ${el}</div>
        <div id="pizarra3${index}" class="pizarra-matematica"></div>
    </div>`
    return p3item
}).join('')

$("#p3act").html(p3items)




let p4actividad = [
    '<img src="img/i1_p88_act4.png" alt="">',
    '<img src="img/i2_p88_act4.png" alt="">',
    '<img src="img/i3_p88_act4.png" alt="">',
    '<img src="img/i4_p88_act4.png" alt="">',
    '<img src="img/i5_p88_act4.png" alt="">',
    '<img src="img/i6_p88_act4.png" alt="">',

]

let p4items = p4actividad.map((el, index) => {
    let p4item = `<div>
        <div><b class="txt-azul">${letrasLista[index]}</b> ${el}</div>
        <div id="pizarra4${index}" class="pizarra-matematica"></div>
    </div>`
    return p4item
}).join('')

$("#p4act").html(p4items)


var unir1_varios_inicio = [
    '<div class="unirinicio"><img src="img/i2_p89_act5.png"></div>',
    '<div class="unirinicio"><img src="img/i6_p89_act5.png"></div>',
    '<div class="unirinicio"><img src="img/i3_p89_act5.png"></div>',
    '<div class="unirinicio"><img src="img/i5_p89_act5.png"></div>',
    '<div class="unirinicio"><img src="img/i1_p89_act5.png"></div>',
    '<div class="unirinicio"><img src="img/i4_p89_act5.png"></div>',

]

var unir1_varios_fin = [
    '<div class="divfin">60°</div>',
    '<div class="divfin">30°</div>',
    '<div class="divfin">45°</div>',
]
/// la respuesta poner el orden ascendente
// para validar se arma un nuevo array con las posiciones del array fin en la ubicacion correcta del array inicio
var respuestasunir1_varios = ['0', '0', '1', '1', '2', '2']

function pregunta5() {
    let core = unirvarios()
    let total = core * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}



let p6actividad = [
    '<img src="img/i1_p89_act6.png" alt="">',
    '<img src="img/i2_p89_act6.png" alt="">',
    '<img src="img/i3_p89_act6.png" alt="">',
]

let p6items = p6actividad.map((el, index) => {
    let p6item = `<div class="p6_container">
        <div>${el}</div>
        <div id="pizarra6${index}" class="pizarra-matematica"></div>
    </div>`
    return p6item
}).join('')

$("#p6act").html(p6items)



function replace_punto_por_coma(text) {
    let texto = String(text.trim()).replace(/\./g, ',');
    return texto;
}



function pregunta7() {
    let core = 0;
    let p7respuestas = ['1052,57']
    for (let i = 0; i < p7respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p7var' + i).val())
        if (dato == p7respuestas[i]) {
            core++
            $('#p7var' + i).addClass('bien');
        } else {
            $('#p7var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}



function pregunta8() {
    let core = 0;
    let p8respuestas = ['3,70']
    for (let i = 0; i < p8respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p8var' + i).val())
        if (dato == p8respuestas[i]) {
            core++
            $('#p8var' + i).addClass('bien');
        } else {
            $('#p8var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}


function pregunta9() {
    let core = 0;
    let p9respuestas = ['61,21']
    for (let i = 0; i < p9respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p9var' + i).val())
        if (dato == p9respuestas[i]) {
            core++
            $('#p9var' + i).addClass('bien');
        } else {
            $('#p9var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1;
    $("#pre9a").val(parseFloat(total).toFixed(2));
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
    pregunta7();
    pregunta8();
    pregunta9();
    validarAutoregulacion()
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre9a = parseFloat(document.getElementById("pre9a").value)
    var inputAutoregulacion = parseFloat(document.getElementById("inputAutoregulacion").value)

    cor = pre1a + pre2a + pre5a + pre7a + pre8a + pre9a + inputAutoregulacion
    Calculo_nota();
    EndActivity()
}
