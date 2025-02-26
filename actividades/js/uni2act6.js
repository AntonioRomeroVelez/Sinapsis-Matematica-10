var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 5 y 6. Selecciona para encerrar las opción correcta.  <br>`,
    `En la actividad 2. Empareja correctamente.   <br>`,
    `En la actividad 3. Selecciona correctamente.  <br>`,
    `En la actividad 4. Selecciona V o F.  <br>`,
    `En la actividad 7 y 9. Escribe en cada recuadro de texto.  <br>`,
    `En la actividad 8. Selecciona correctamente.  <br>`,
]

$("#temaActividad").html('Evaluación sumativa')
$("#n_pagina").html("86");
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    $("#p1actInicio").prepend(`<div class="p2Inicio">Órgano</div>`)
    $("#p1actFin").prepend(`<div class="p2Fin">Función</div>`)
})



var p1opciones = [
    { title: 'II y IV', resp: '0', },
    { title: 'I y IV', resp: '1', },
    { title: 'II y III', resp: '1', },
    { title: 'III y IV', resp: '1', },
];
SelSimple(p1opciones, "#p1act", 1)

function pregunta1() {
    let core = validarSelSimple(1)
    let total = core * 0.5;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


let p2actividad = [
    { literal: 'Útero', enunciado: 'Alberga y nutre al embrión.' },
    { literal: 'Ovario', enunciado: 'Lugar donde se producen los óvulos.' },
    { literal: 'Glandulas mamarias', enunciado: 'Produce y secreta leche materna.' },
    { literal: 'Trompas de Falopio', enunciado: 'Sitio donde ocurre la fecundación.' },
]

let p2respuestas = RelacionarliteralesTabla(p2actividad, '2')


function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var") /// validar
    let total = core * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}

let p3opciones = ['Ovocito secundario', 'Ovocito primario', 'Primer cuerpo polar', 'Cuerpos polares']
asignarOpcionesAselect(p3opciones, ".p3sel")

function pregunta3() {
    let core = validarExactas(['Ovocito secundario', 'Ovocito primario', 'Primer cuerpo polar', 'Cuerpos polares'], "#p3var")
    let total = core * 1;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}


var p4act = [
    { enunciado: 'La hormona luteinizante induce la liberación del ovocito maduro.', id: 'p4var0' },
    { enunciado: 'En la fase folicular ocurre un sangrado vaginal por el desprendimiento del endometrio.', id: 'p4var1' },
    { enunciado: 'La fase lútea empieza con el desarrollo de un óvulo dentro de un folículo en el ovario.', id: 'p4var2' },
    { enunciado: 'La progesterona mantiene al endometrio engrosado.', id: 'p4var3' },
]
seleccionVF(p4act, "#p4act")

function pregunta4() {
    let core = validarExactas(['V', 'F', 'F', 'V'], "#p4var")
    let total = core * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}


var p5opciones = [
    { title: 'La gametogénesis es la formación de células sexuales.', resp: '1', },
    { title: 'La fecundación es la unión del óvulo y el espermatozoide.', resp: '1', },
    { title: 'La gástrula está conformada por tres capas germinales.', resp: '1', },
    { title: 'La identificación del sexo ya es posible en el primer mes.', resp: '0', },
];

SelSimple(p5opciones, "#p5act", 5)

function pregunta5() {
    let core = validarSelSimple(5)
    let total = core * 0.5;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}



var p6opciones = [
    { title: '<img src="img/i1_p87_act6.jpg">', resp: '1', },
    { title: '<img src="img/i2_p87_act6.jpg">', resp: '0', },
    { title: '<img src="img/i3_p87_act6.jpg">', resp: '1', },
];

SelMultipleClase(p6opciones, "#p6act", 6, 'p6clase')
agregarClaseMultiple('p6clase', 'MarcarO')


function pregunta6() {
    let core = validarSelMultipleClase(6, 'MarcarO') /// para vlaidar se envia tambien la clase que se agrega a cada elemento 
    let total = core * 1;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}


let p8actividad = [
    {
        img: '<img src="img/i1_p87_act8.jpg" alt="">', color: '#FEF7E5', texto: 'Leche rica en anticuerpos y vitaminas, se produce hasta el cuarto día.', resp: 'Calostro', width: '270'
    },
    {
        img: '<img src="img/i2_p87_act8.jpg" alt="">', color: '#F4ECF7', texto: 'Leche con composición balanceada de proteínas, grasas y carbohidratos.', resp: 'Leche madura', width: '270'
    },
    {
        img: '<img src="img/i3_p87_act8.jpg" alt="">', color: '#EDF7E6', texto: 'Se produce desde el cuarto hasta el décimo quinto día   espués del parto. Contiene grasa y lactosa.', resp: 'Leche de transición', width: '300'
    },
]
mezclar(p8actividad)
let p8opciones = []
let p8respuestas = []
let p8items = p8actividad.map((element, index) => {
    p8opciones.push(element.resp)
    p8respuestas.push(element.resp)
    return `<div style="border:solid 1px silver;width:${element.width}px;display: inline-flex;justify-content: center;align-items:end; gap:5px;padding:2px">
                ${element.img}
                <div style="background-color: ${element.color} !important;print-color-adjust: exact;padding: 10px;border-radius: 5px">
                    <select class="p8sel selectbox1" id="p8var${index}"></select>
                    ${element.texto}
                </div>
            </div>`
}).join('')
$("#p8act").html(p8items)
asignarOpcionesAselect(p8opciones, ".p8sel")

function pregunta8() {
    let core = validarExactas(p8respuestas, "#p8var")
    let total = core * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}


var autoregulacion = [
    `Comprendo el funcionamiento del aparato reproductivo humano.`,
    `Promuevo acciones beneficiosas relacionadas con la salud reproductiva y sexual.`,
    `Utilizo el método científico para entender aspectos sobre la pubertad.`,
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
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta8();
    // validarAutoregulacion()
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var inputAutoregulacion = parseFloat(document.getElementById("inputAutoregulacion").value)

    cor = pre1a + pre2a + pre3a + pre4a + pre5a + pre6a + pre8a + inputAutoregulacion
    Calculo_nota();
    EndActivity()
}
